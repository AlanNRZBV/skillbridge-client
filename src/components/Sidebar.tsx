import { paths } from '../constants';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';

interface Props {
  visible: boolean;
  isLg: boolean;
  onClick: () => void;
}

const Sidebar: FC<Props> = ({ visible, isLg, onClick }) => {
  return (
    <div
      className={`absolute -left-5 top-0 z-50 bg-white p-4 pl-8 pt-16 transition-all duration-200 ${visible ? 'translate-x-0' : '-translate-x-full'} ${isLg ? 'hidden' : ''}`}
    >
      <div className="flex flex-col gap-y-3 md:gap-y-4">
        {paths.map((item, index) => (
          <NavLink
            onClick={onClick}
            key={index}
            to={item.path}
            className={({ isActive }) =>
              !isActive
                ? 'rounded-md px-5 py-3 transition duration-200 hover:bg-light-95'
                : 'rounded-md bg-light-95 px-5 py-3 transition duration-200 hover:bg-transparent'
            }
          >
            {item.title}
          </NavLink>
        ))}
        <button
          className="rounded-md border border-light-95 px-5 py-3 transition duration-200 hover:bg-transparent"
          onClick={onClick}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
