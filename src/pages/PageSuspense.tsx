import {FC, ReactNode, Suspense} from 'react';

export const PageSuspense: FC<{children: ReactNode}> = ({children}) => {
  return <Suspense fallback={<h1>Page is Loading</h1>}>{children}</Suspense>;
};
