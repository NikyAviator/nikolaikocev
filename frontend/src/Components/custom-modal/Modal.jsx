import '../../scss/styles.scss';

const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || 'Modal'} className='Modal'>
      <div className='modal-content'></div>
      <div className='header'>
        <span onClick={onClose} className='close-modal-icon'>
          &times;
        </span>
        <h2>{header ? header : 'Header'}</h2>
      </div>
      <div className='body'>
        {body ? (
          body
        ) : (
          <div>
            <p>This is the modal body</p>
          </div>
        )}
      </div>
      <div className='footer'>{footer ? footer : <h2>Footer</h2>}</div>
    </div>
  );
};

export default Modal;
