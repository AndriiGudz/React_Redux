import { useState } from 'react'
import {
  WeatherBox,
  Background,
  Header,
  Title,
  SearchBox,
  BtnSearch,
  InputBox,
  WeatherInfoBox,
  Temperatur,
  CityName,
  ContentBox,
  IconBox,
  ErrooBox,
  TitleError,
  ErrorMessage
} from './styled'
import bgFote from 'assets/weather.jpg'
import Loader from 'components/Loader/Loader'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { weatherAppSliceAction, weatherAppSliceSelector } from 'store/redux/weather/weatherAppSlice'

function WeatherApp() {
  const {data, status, error} = useAppSelector(weatherAppSliceSelector.weatherAppData)
  
  const [cityName, setCityName] = useState('')
  const [city, setCity] = useState('')
  
  const dispatch = useAppDispatch()
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(weatherAppSliceAction.getWeather(cityName))      
    }
  }

  const getWeathers = () => {
    dispatch(weatherAppSliceAction.getWeather(cityName))
  }

  return (
    <Background image={bgFote}>
      <Header>
        <Title>Weather App</Title>
      </Header>
      <WeatherBox>
        <SearchBox>
          <InputBox
            type="text"
            placeholder="Введите название города"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <BtnSearch onClick={getWeathers}>Получить погоду</BtnSearch>
        </SearchBox>
        {status === 'loading' && <Loader />}

        {status === 'error' && <ErrooBox><TitleError>API Error</TitleError><ErrorMessage>{error}</ErrorMessage></ErrooBox>}

        {data && (
          <WeatherInfoBox>
            <ContentBox>
              <Temperatur>{data?.temperature}°C</Temperatur>
              <CityName>{data.names}</CityName>
            </ContentBox>
            {/* <IconBox
              // src={`http://openweathermap.org/img/w/${data.}.png`}
              alt="weather icon"
            /> */}
          </WeatherInfoBox>
        )}
      </WeatherBox>
    </Background>
  )
}

export default WeatherApp
