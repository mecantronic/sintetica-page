import PropTypes from 'prop-types';
import { SmallInput } from '../styles/components/contactSection.style';
import { BigInput } from '../styles/components/contactSection.style';
import { useState } from 'react';
import theme from '../styles/theme';
import { MdOutlineTableRestaurant } from 'react-icons/md';

function CustomInput({ type, placeholder, id, name, value, onChange, isTextArea=false}) {

    const [borderColor, setBorderColor] = useState(theme.colors.platinum);

    const onBlur = () => {
        if (value) {
            setBorderColor(theme.colors.lightSlateBlue + '59');
        } else {
            setBorderColor(theme.colors.platinum);
        }
    }

    return (
        <>
        {!isTextArea ? 
            <SmallInput
            type={type}
            placeholder={placeholder}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            borderColor={borderColor}
            onBlur={onBlur}
            /> : 
            <BigInput
                id={id}
                name={name}
                cols="30"
                rows="5"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                borderColor={borderColor}
            />
        }
        </>
    );
}

CustomInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    isTextArea: PropTypes.bool,
};

export default CustomInput;
