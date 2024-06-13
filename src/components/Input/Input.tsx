import {InputContainer, InputField, LabelComponent, ErrorMessage} from './styles'
import { InputProps } from './types'

function Input({ name, type = 'text', placeholder, label, value, onChange, error }: InputProps) {
console.log('Input update');


  return (
    <InputContainer>
      <LabelComponent>{label}</LabelComponent>
      <InputField
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value = {value}
        onChange={onChange}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </InputContainer>
  )
}

export default Input
