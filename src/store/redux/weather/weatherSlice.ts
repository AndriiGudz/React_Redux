import { createAppSlice } from "store/createAppSlice"
import { create } from "domain"
import { WeatherState } from "./types"

const weatherInitialState: WeatherState = {
  city: "",
  weatherData: null,
  loading: false,
  status: "default",
  error: undefined,
}

export const weatherSlice = createAppSlice({
  name: "WEATHER",
  initialState: weatherInitialState,
  reducers: create => ({
    getWeather: create.asyncThunk(
      async (arg, thunkapi) => {
        const respons = await fetch(``)
        const data = await respons.json()

        if (!respons.ok) {
          thunkapi.rejectWithValue
        } else {
          return {
            temp: (data.main.temp - 273.15).toFixed(0),
            name: data.name,
            icon: data.weather[0].icon,
          }
        }
      },
      {
        pending: (state: WeatherState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: WeatherState, action: any) => {
            state.status = 'success'
            state.city = action.payload
            state.weatherData = action.payload
        },
        rejected: (state: WeatherState, action: any) => {
            state.status = 'error'
            state.error = action.payload
        },
      },
    ),
  }),
  selectors: {
    weatherData: (state: WeatherState) => state
  }
})

export const weatherSliceAction = weatherSlice.actions
export const weatherSliceSelector = weatherSlice.selectors
