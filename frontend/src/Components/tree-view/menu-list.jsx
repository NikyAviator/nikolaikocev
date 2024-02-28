import '../../scss/styles.scss';
import MenuItem from './menu-item';

// eslint-disable-next-line react/prop-types
const MenuList = ({ list = [] }) => {
  return (
    <ul className='menu-list-container'>
      {list && list.length > 0
        ? list.map((listItem) => <MenuItem key={list.label} item={listItem} />)
        : null}
    </ul>
  );
};

export default MenuList;
