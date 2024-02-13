import { useState } from 'react';
import data from './data';
import '../../scss/main.scss';

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  console.log('accordion rendered' + data.indexOf(0));

  return (
    <div className='acc-wrapper'>
      <div className='accordion'>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className='item' key={dataItem.id}>
              <div className='title'>
                <h3>{dataItem.question}</h3>
                <span>ppc test</span>
                {console.log('accordion rendered in loop')}
                <span>+</span>
              </div>
            </div>
          ))
        ) : (
          <div>No data present</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
