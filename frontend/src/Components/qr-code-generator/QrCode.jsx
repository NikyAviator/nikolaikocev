import '../../scss/styles.scss';
import QRCode from 'react-qr-code';
import { useState } from 'react';

const QrCode = () => {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  const handleGenerateQrCode = () => {
    setQrCode(input);
  };

  return (
    <div>
      <p>Enter something to generate it as a qr-code:</p>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type='text'
          name='qr-code'
          placeholder='Enter text to generate Qr code'
        />
        <button
          disabled={input && input.trim() !== '' ? false : true}
          onClick={handleGenerateQrCode}
          type='button'
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id='qr-code-value' value={qrCode} size={400} bgColor='white' />
      </div>
    </div>
  );
};

export default QrCode;
