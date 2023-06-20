import React, {useLayoutEffect, useRef} from 'react';
import style from './SVGTest.module.scss';
import ReactLogo from '@SVG/logo.svg';
import reactLogo from '@SVG/logo.svg?url';

export const SVGTest: React.FC = () => {
  const refSVG = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    console.log(refSVG);
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
