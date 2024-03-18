import '../../scss/styles.scss';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Modal from './Modal';

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  const onClose = () => {
    setShowModalPopup(false);
  };

  return (
    <>
      <Button onClick={handleToggleModalPopup}>Open Modal Popup</Button>
      {showModalPopup && (
        <Modal onClose={onClose} body={<div>Customized body, poggers.</div>} />
      )}
    </>
  );
};

export default ModalTest;
