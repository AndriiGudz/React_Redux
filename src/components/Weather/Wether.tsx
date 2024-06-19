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
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import { useAppSelector } from 'store/hooks'
import { weatherSliceAction, weatherSliceSelector } from 'store/redux/weather/weatherSlice'
import {weatherSlice} from 'store/redux/weather/weatherSlice'

const apiKey = '9b010adeeda6ca00ec5e5e8f19a27c5d'

function Weather() {
  const dispatch = useDispatch()
  const {city, weatherData, loading, error} = useAppSelector(weatherSliceSelector.weatherData)

  // const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     dispatch(weatherSlice(city))      
  //   }
  // }

  const getWeather = () => {
    dispatch(weatherSliceAction.getWeather)
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
            // onChange={(e) => setCity(e.target.value)}
            // onKeyPress={handleKeyPress}
          />
          <BtnSearch onClick={getWeather}>Получить погоду</BtnSearch>
        </SearchBox>
        {loading && <Loader />}

        {error && <ErrooBox><TitleError>API Error</TitleError><ErrorMessage>{error}</ErrorMessage></ErrooBox>}

        {weatherData && (
          <WeatherInfoBox>
            <ContentBox>
              <Temperatur>{weatherData.temp}°C</Temperatur>
              <CityName>{weatherData.name}</CityName>
            </ContentBox>
            <IconBox
              src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
              alt="weather icon"
            />
          </WeatherInfoBox>
        )}
      </WeatherBox>
    </Background>
  )
}

export default Weather
