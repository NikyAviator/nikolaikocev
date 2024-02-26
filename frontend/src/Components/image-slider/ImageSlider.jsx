import '../../scss/styles.scss';
import { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { Container } from 'react-bootstrap';

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== '') fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div className='loader'>Data loading...</div>;
  }

  if (errorMsg !== null) {
    return <div className='error-msg'>Something happened... {errorMsg}</div>;
  }

  return (
    <Container className='display'>
      <BsArrowLeftCircleFill className='arrow arrow-left' />
      {images && images.length
        ? images.map((imageItem) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className='current-image'
            />
          ))
        : null}

      <BsArrowRightCircleFill className='arrow arrow-right' />
      <span className='circle-indicators'>
        {images && images.length
          ? images.map((_, index) => (
              <button key={index} className='current-indicator'></button>
            ))
          : null}
      </span>
    </Container>
  );
};

export default ImageSlider;
