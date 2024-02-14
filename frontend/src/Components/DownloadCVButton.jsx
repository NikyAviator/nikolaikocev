import download from '/pictures/download.png';

const DownloadCVButton = () => {
  return (
    <div className='d-flex justify-content-center mt-4'>
      {/* Use Bootstrap's grid system to control the button's width */}
      <div className='col-8 col-md-8'>
        {' '}
        {/* This makes the button full width on smaller screens and 8/12 columns on medium screens and up */}
        <a
          href='/pdf/Nikolai-Kocev-CV.pdf'
          className='btn btn-dark btn-lg'
          role='button'
          download='Nikolai_Kocev_CV.pdf'
          style={{ width: '100%', height: 'auto', padding: '10px 20px' }} // Adjust padding as needed for sizing
        >
          <img
            src={download}
            alt='Download'
            style={{ width: '48px', marginRight: '8px' }}
          />
          Download my CV
        </a>
      </div>
    </div>
  );
};

export default DownloadCVButton;
