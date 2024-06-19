import styled from '@emotion/styled'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(18, 45, 77, 0.5);
  backdrop-filter: blur(10px);
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  text-align: left;
  color: white;
`

export const Background = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
`

export const WeatherBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 710px;
  margin-top: 200px;
`
export const BtnSearch = styled.button`
  width: 146px;
  height: 48px;
  border: none;
  border-radius: 50px;
  background: #3678b4;
  color: white;
  cursor: pointer;
`
export const InputBox = styled.input`
  width: 550px;
  height: 48px;
  border: 1px solid #fff;
  border-radius: 40px;
  background-color: rgb(255, 255, 255, 0.1);
  padding-left: 12px;
  color: #fff;
  &::placeholder {
    padding-left: 12px;
    color: #fff;
  }
  &:focus {
    border-color: #fff;
    outline: none;
  }
`
export const WeatherInfoBox = styled.div`
  display: flex;
  align-items: center;
  width: 710px;
  height: 130px;
  background: linear-gradient(
    133.66deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  border-radius: 20px;
  margin-top: 60px;
`
export const ContentBox = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  gap: 6px;
  padding-left: 36px;
`

export const Temperatur = styled.div`
  font-size: 57px;
`

export const CityName = styled.div`
  font-size: 18px;
`

export const IconBox = styled.img`
  height: 74px;
  padding-left: 20%;
`
export const ErrooBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 710px;
  height: 130px;
  gap: 6px;
  background: linear-gradient(
    133.66deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  border-radius: 20px;
  margin-top: 60px;
  font-family: Arial, Helvetica, sans-serif;
`

export const TitleError = styled.h3`
  font-size: 57px;
  color: #f35e5e;
`

export const ErrorMessage = styled.span`
  color: #fff;
  font-size: 18px;
`
