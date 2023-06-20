import {FC, Suspense} from 'react';
import {NavLink, Outlet} from 'react-router-dom';

export const CalendarW: FC = () => {
  return (
    <div>
      <div>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: '15px'
          }}
        >
          <li>
            <NavLink to="/calendar" end>
              Main
            </NavLink>
          </li>
          <li>
            <NavLink to="single">single</NavLink>
          </li>
          <li>
            <NavLink to="range">range</NavLink>
          </li>
          <li>
            <NavLink to="multiple">multiple</NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<h1>Calendar is Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
