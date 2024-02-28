import '../scss/styles.scss';
import TreeView from '../Components/tree-view/TreeView';
import menus from '../Components/tree-view/data';

const TreeViewPage = () => {
  return (
    <div>
      <TreeView menus={menus} />
    </div>
  );
};

export default TreeViewPage;
