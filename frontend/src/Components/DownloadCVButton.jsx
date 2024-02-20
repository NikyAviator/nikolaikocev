import '../scss/styles.scss';
import download from '/pictures/download.png';

const DownloadCVButton = () => {
  return (
    <div className='d-flex justify-content-center mt-4 download-cv-button-container'>
      {/* Adjusted the column classes to be more responsive */}
      <div className='col-12 col-sm-10 col-md-8 col-lg-8'>
        <a
          href='/pdf/Nikolai-Kocev-CV.pdf'
          className='btn btn-dark btn-lg btn-download-cv niky-text-info protest-revolution-regular'
          role='button'
          download='Nikolai_Kocev_CV.pdf'
        >
          <img src={download} alt='Download' />
          Download my CV
        </a>
      </div>
    </div>
  );
};

export default DownloadCVButton;
