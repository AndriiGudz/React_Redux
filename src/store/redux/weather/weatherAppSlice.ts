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

    fetchWeather: create.asyncThunk( async (citeName: string, thunkApi) => {
      try {
        const respons = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citeName}&appid=${APP_ID}&units=metric`)
        const result = await respons.json()
        console.log(result);
        

        if (!respons.ok) {
          thunkApi.rejectWithValue(result.message)
        } 
        return result
      } catch (err) {
        if (err instanceof Error) {
          thunkApi.rejectWithValue(err.message)
        } else {
          thunkApi.rejectWithValue('Неизвестная ошибка')
        }
      
      }
        
      },
      {
        pending: (state: WeatherAppSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: WeatherAppSliceState, action: any) => {
            state.status = 'success'
            const {main: {temp}, weather: [{icon, description}]} = action.payload // деструктаризация для удобства вытаскивания данных
            state.data = {
              temperature: action.payload.main.temp.toFixed(0), // погода сейчас, параметр .toFixed(0) - округляет значение до целого числа
              temperatureFeels: action.payload.main.feels_like, // как ощущается погода
              names: action.payload.name,
              // icon: action.payload.weather[0].icon,
              // description: action.payload.weather[0].description // описание погоды
              icon,
              description
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

export const {fetchWeather} = weatherAppSlice.actions // возможность экспортировать только конкретное действие (функцию). Это упращает синтаксис в основном компаненте.
export const weatherAppSliceAction = weatherAppSlice.actions // экспортируем все Action
export const weatherAppSliceSelector = weatherAppSlice.selectors
