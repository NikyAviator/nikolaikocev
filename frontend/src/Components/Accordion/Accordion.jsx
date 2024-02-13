import { useState } from 'react';
import data from './data';
import '../../scss/main.scss';
import { Button } from 'react-bootstrap';

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    // För att kunna stänga en redan öppen accordion
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultipleSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  }

  console.log(selected, multiple);
  return (
    <div className='acc-wrapper'>
      <Button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className='btn btn-primary'
      >
        Enable multi-selection
      </Button>

      <div className='accordion'>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className='item' key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className='title'
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className='acc-content'>{dataItem.answer} </div>
              ) : null}
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
