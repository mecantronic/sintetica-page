import PropTypes from "prop-types"

import CustomInput from "../shared/customInput/CustomInput";
import CustomButton from "../shared/customButtons/CustomButton";
import CustomSelect from "../shared/customSelect/CustomSelect";

import { SPEACHERS } from "./config"

import {
  StyledTtsForm,
  StyledHeader,
  StyledLeft,
  StyledRight,
  StyledFooter,
  StyledButtons
} from './TtsForm.styles'

function TtsForm ({ speach, setSpeach, speed, speachers, formMethods }) {
  return (
    <StyledTtsForm onSubmit={formMethods.onSubmit}>
      <StyledHeader>
        <h3>330 caracteres como máximo</h3>
        <CustomInput
          inputType='textArea'
          placeHolder='Ingresá aquí el texto'
          name='text-input'
          required
          maxLength={330}
        />
      </StyledHeader>

      <StyledLeft>
        <h3>Hablante</h3>

        <CustomSelect
          value={speach.value}
          onChange={event => {
            setSpeach(
              SPEACHERS.find(({ value }) => value === event.target.value)
            )
          }}
        >
          {speachers.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </CustomSelect>
      </StyledLeft>

      <StyledRight>
        <h3>Velocidad de reproducción</h3>
        <StyledButtons>
          <button
            type="button"
            onClick={formMethods.onDecrement}
            disabled={speed <= 0.5}
          >-</button>
          <CustomInput
            contentType='number'
            value={speed}
            readOnly
          />
          <button
            type="button"
            onClick={formMethods.onIncrement}
            disabled={speed >= 1.5}
          >+</button>
        </StyledButtons>
      </StyledRight>

      <StyledFooter>
        <CustomButton
          buttonText='Procesar'
          type='submit'
          pattern='square'
        />
        <CustomButton
          buttonText='Limpiar'
          buttontype='tertiary'
          type='reset'
          handleClick={formMethods.onReset}
          pattern='square'
        />
      </StyledFooter>
    </StyledTtsForm>
  )
}

TtsForm.propTypes = {
  speach: PropTypes.object,
  setSpeach: PropTypes.func,
  speed: PropTypes.number,
  setSpeed: PropTypes.func,
  speachers: PropTypes.array,
  formMethods: PropTypes.object
}

export default TtsForm