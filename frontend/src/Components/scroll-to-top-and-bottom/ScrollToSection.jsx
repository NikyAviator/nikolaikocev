import '../../scss/styles.scss';

const ScrollToSection = () => {
  const data = [
    {
      label: 'First Card',
      style: {
        width: '100%',
        height: '600px',
        backgroundColor: 'blue',
      },
    },
    {
      label: 'Second Card',
      style: {
        width: '100%',
        height: '600px',
        backgroundColor: 'red',
      },
    },
    {
      label: 'Third Card',
      style: {
        width: '100%',
        height: '600px',
        backgroundColor: 'yellow',
      },
    },
    {
      label: 'Fourth Card',
      style: {
        width: '100%',
        height: '600px',
        backgroundColor: 'green',
      },
    },
    {
      label: 'Fifth Card',
      style: {
        width: '100%',
        height: '600px',
        backgroundColor: 'black',
      },
    },
  ];

  return (
    <>
      <h1>Scroll to a particular section:</h1>
      <button>Click to scroll</button>
      {data.map((item) => (
        <div key={item.label} style={item.style}>
          <h3>{item.label}</h3>
        </div>
      ))}
    </>
  );
};

export default ScrollToSection;
