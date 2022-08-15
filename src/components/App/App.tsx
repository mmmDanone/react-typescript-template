import React, {useLayoutEffect, useRef} from 'react';
import style from './App.module.scss';
import ReactLogo from '@SVG/logo.svg';
import reactLogo from '@SVG/logo.svg?url';
import {useEvent} from '@hooks/useEvent';

export const App: React.FC = () => {
  const refSVG = useRef<SVGSVGElement>(null);

  const event = useEvent((a: number, b: number) => {
    return a + b;
  });

  const res = event(555, 5);

  useLayoutEffect(() => {
    console.log(refSVG);
    console.log(res);
  });

  return (
    <div>
      <div>Test SVG ReactComponent</div>
      <div>
        <ReactLogo ref={refSVG} />
      </div>
      <div>Test URL SVG in IMG</div>
      <div>
        <img src={reactLogo} alt="Logo React" />
      </div>
      <div>Test URL in style file</div>
      <div className={style.testURL} />
      <div>Test URI in style file</div>
      <div className={style.testURI} />
    </div>
  );
};
