import { createAppSlice } from "store/createAppSlice"
import { WeatherAppData, WeatherAppSliceState } from "./types"

const APP_ID = '9b010adeeda6ca00ec5e5e8f19a27c5d'

const initialState: WeatherAppSliceState = {
  data: null,
  status: "default",
  error: undefined,
}

export const weatherAppSlice = createAppSlice({
  name: "WEATHER_APP",
  initialState,
  reducers: create => ({

    getWeather: create.asyncThunk( async (citeName: string, thunkApi) => {
      
        const respons = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citeName}&appid=${APP_ID}`)
        const result = await respons.json()

        if (!respons.ok) {
          thunkApi.rejectWithValue(result)
        } else {
          return result
        }
      },
      {
        pending: (state: WeatherAppSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: WeatherAppSliceState, action: any) => {
            state.status = 'success'
            state.data = {
              temperature: action.payload.main.temp,
              names: action.payload.name
            }
        },
        rejected: (state: WeatherAppSliceState, action: any) => {
            state.status = 'error'
            state.error = action.payload
        },
      },
    ),
  }),
  selectors: {
    weatherAppData: (state: WeatherAppSliceState) => state
  }
})

export const weatherAppSliceAction = weatherAppSlice.actions
export const weatherAppSliceSelector = weatherAppSlice.selectors
