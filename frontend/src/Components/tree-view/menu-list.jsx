import '../../scss/styles.scss';
import MenuItem from './menu-item';

const MenuList = ({ list = [] }) => {
  return (
    <div className='menu-list-container'>
      <p>MenuList + map:</p>
      {list && list.length > 0
        ? list.map((listItem) => <MenuItem key={list.label} item={listItem} />)
        : null}
    </div>
  );
};

export default MenuList;
