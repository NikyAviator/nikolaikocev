import '../../scss/styles.scss';
import MenuList from './menu-list';

// eslint-disable-next-line react/prop-types
const TreeView = ({ menus = [] }) => {
  return (
    <div className='tree-view-container'>
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
