import React from 'react';
import PropTypes from 'prop-types';
 // You may not need this if all styles are converted to Tailwind

function ImageSection({ images, speed }) {
  const imagesStyle = {
    animation: `swipe ${speed}ms linear infinite`,
  };

  return (
    <div className='flex' style={imagesStyle}>
      {images.map(({ src, name }, index) => (
        <div className='flex-shrink-0' key={index}>
          <img className='max-w-xs h-40 object-cover px-2 cursor-pointer' src={src} alt={name} />
        </div>
      ))}
    </div>
  );
}

ImageSection.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  speed: PropTypes.number.isRequired,
};

function Banner({ images, speed }) {
  return (
    <div className='w-full h-40 overflow-hidden'>
      <div className='flex'>
        <ImageSection images={images} speed={speed} />
        <ImageSection images={images} speed={speed} />
      </div>
    </div>
  );
}

Banner.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  speed: PropTypes.number.isRequired,
};

export default Banner;
