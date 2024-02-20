import '../../scss/styles.scss';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
    console.log(rating);
  };

  return (
    <div className='star-rating'>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => {
              handleClick(index);
            }}
            onMouseEnter={() => {
              handleMouseEnter(index);
            }}
            onMouseLeave={() => {
              handleMouseLeave(index);
            }}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
