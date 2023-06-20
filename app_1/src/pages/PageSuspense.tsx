import {FC, ReactNode, Suspense} from 'react';

interface PageSuspenseProps {
  children: ReactNode;
}

export const PageSuspense: FC<PageSuspenseProps> = ({children}) => {
  return <Suspense fallback={<h1>Page is Loading...</h1>}>{children}</Suspense>;
};
