import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Parallax = ({ image, speed }) => {
  const imageRef = useRef(null);

  console.log(image);
  console.log(imageRef);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = imageRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const imageHeight = imageRef.current.offsetHeight;
      const scrollDistance = offsetTop - scrollTop;
      const parallaxDistance = Math.floor(scrollDistance * speed);
      const minTranslateY = -(imageHeight - windowHeight);
      const translateY = Math.max(minTranslateY, parallaxDistance);

      imageRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div className="parallax" ref={imageRef}>
      <img src={image} alt="Parallax" />
    </div>
  );
};

Parallax.propTypes = {
  image: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

export default Parallax;
