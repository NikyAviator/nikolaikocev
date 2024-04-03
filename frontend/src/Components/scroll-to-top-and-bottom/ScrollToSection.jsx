import '../../scss/styles.scss';
import { useRef } from 'react';

const ScrollToSection = () => {
  const ref = useRef(null);

  const handleScrollToSection = () => {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: 'smooth',
    });
  };

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
      <button onClick={handleScrollToSection}>Click to scroll</button>
      {data.map((item, index) => (
        <div ref={index === 2 ? ref : null} key={item.label} style={item.style}>
          <h3>{item.label}</h3>
        </div>
      ))}
    </>
  );
};

export default ScrollToSection;
