import PropTypes from 'prop-types';
import { CustomButtonStyle } from './customButton.styles';
import { useEffect, useState } from 'react';

function CustomButton({
  isLink,
  buttonText,
  to,
  handleClick,
  icon,
  device,
  pattern,
  buttontype,
  type
}) {
  const [size, setSize] = useState('desktop');

  const handleResize = () => {
    const width = window.innerWidth;
    if (device === 'all') {
      setSize(device);
    } else {
      if (width < 768) {
        setSize('mobile');
      } else if (width < 1024) {
        setSize('tablet');
      } else {
        setSize('desktop');
      }
    }
  };

  useEffect(() => {
    handleResize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  return (
    <CustomButtonStyle
      isLink={isLink}
      to={to}
      onClick={handleClick}
      type={type}
      device={size}
      pattern={pattern}
      buttontype={buttontype}
    >
      {icon} {buttonText}
    </CustomButtonStyle>
  );
}

export default CustomButton;

CustomButton.propTypes = {
  isLink: PropTypes.bool,
  buttonText: PropTypes.string,
  to: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.string,
  icon: PropTypes.element,
  device: PropTypes.oneOf(['desktop', 'tablet', 'mobile', 'all']),
  pattern: PropTypes.oneOf(['cto-rounded', 'rounded', 'square']),
  buttontype: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

CustomButton.defaultProps = {
  isLink: false,
  pattern: 'rounded',
  buttontype: 'primary',
};
