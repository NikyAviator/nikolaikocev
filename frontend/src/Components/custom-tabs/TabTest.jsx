/* eslint-disable no-undef */
import '../../scss/styles.scss';
import Tabs from './Tabs';

const RandomComponent = () => <div>Random Component</div>;

const TabTest = () => {
  const tabs = [
    {
      label: 'Tab 1',
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: 'Tab 2',
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: 'Tab 3',
      content: <div>This is content for Tab 3</div>,
    },
    {
      label: 'Tab 4',
      content: <RandomComponent />,
    },
  ];
  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabTest;
