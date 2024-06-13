import styled from '@emotion/styled'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputField = styled.input`
  width: 468px;
  height: 48px;
  border: 1px solid #3f3f3f;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #1e1e1e;
  margin-bottom: 10px;

  &::placeholder {
    color: #9a9a9a;
  }

  &:focus {
    border-color: #1f27f5;
    outline: none;
  }
`

export const LabelComponent = styled.label`
  color: black;
`

export const ErrorMessage = styled.div`
  color: red;
  height: 30px;
`
