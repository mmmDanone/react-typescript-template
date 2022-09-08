import {useRef, useLayoutEffect, useCallback} from 'react';

type callbackType = (...args: Array<any>) => any;

export const useEvent = <TF extends callbackType>(callback: TF): TF => {
  const functionRef = useRef(callback);

  useLayoutEffect(() => {
    functionRef.current = callback;
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return useCallback((...args) => {
    const functionCall = functionRef.current;
    return functionCall(...args);
  }, []);
};
