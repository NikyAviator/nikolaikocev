/* eslint-disable react/prop-types */
import '../../scss/styles.scss';
import { useState } from 'react';
import MenuList from './menu-list';
import { FaMinus, FaPlus } from 'react-icons/fa';

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  };

  return (
    <li className='menu-item'>
      <span>{item.label}</span>
      {item && item.children && item.children.length > 0 ? (
        <span onClick={() => handleToggleChildren(item.label)}>
          {displayCurrentChildren[item.label] ? (
            <FaMinus color='#fff' size={20} style={{ marginLeft: '5px' }} />
          ) : (
            <FaPlus color='#fff' size={20} style={{ marginLeft: '5px' }} />
          )}
        </span>
      ) : null}

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
