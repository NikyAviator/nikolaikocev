// 3 FF är sist implementerad.
import { useContext } from 'react';
import '../../scss/styles.scss';
import StarRating from '../star-rating/StarRating';
import TicTacToe from '../tic-tac-toe/TicTacToe';
import RandomColor from '../random-color/RandomColor';
import QrCodeGenerator from '../qr-code-generator/QrCode';
import TreeView from '../tree-view/TreeView';
import { FeatureFlagContext } from './context/FeatureFlagContext';
import menus from '../tree-view/data';

// Det är samma keys som i data.js
// const dummyApiResponse = {
//   showStarRating: true,
//   showTicTacToe: true,
//   showRandomColor: true,
//   showQrCodeGenerator: false,
//   showTreeView: true,
// };

const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: 'showStarRating',
      component: <StarRating />,
    },
    {
      key: 'showTicTacToe',
      component: <TicTacToe />,
    },
    {
      key: 'showRandomColor',
      component: <RandomColor />,
    },
    {
      key: 'showQrCodeGenerator',
      component: <QrCodeGenerator />,
    },
    {
      key: 'showTreeView',
      component: <TreeView menus={menus} />,
    },
  ];

  const checkEnabledFlags = (getCurrentKey) => enabledFlags[getCurrentKey];

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Feature Flags:</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </>
  );
};

export default FeatureFlags;
