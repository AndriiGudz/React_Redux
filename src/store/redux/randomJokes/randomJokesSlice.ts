import { createAppSlice } from "store/createAppSlice"
import { RandomJokesSliceState } from "./types"
import { create } from "domain"
import { v4 } from "uuid"

const randomJokesInitialState: RandomJokesSliceState = {
  data: [],
  status: "default",
  error: undefined,
}

export const randomJokesSlice = createAppSlice({
  name: "RANDOM_JOKES",
  initialState: randomJokesInitialState,
  reducers: create => ({
    // Создаем middleware с помощью метода createThunk
    // метода createThunk принимает два аргумента
    // 1-й аргумент - асинхронная функция
    // 2-й аргумент - объект с 3 методами, которые обрабатывают результат результат выполнения асинхронной функции
    getJoke: create.asyncThunk(
      async (arg, thunkApi) => {
        const respons = await fetch(
          "https://official-joke-api.appspot.com/random_joke",
        )
        const result = await respons.json()
        console.log(result)

        if (!respons.ok) {
          // выполняем переход к мини редьюсеру (к обработчику) rejected
          thunkApi.rejectWithValue
        } else {
          // выполняем переход к мини редьюсеру (к обработчику) fulfilled
          return result
        }
      },
      {
        // Обрабатываем событие ожидания ответа от сервера
        pending: (state: RandomJokesSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        // Обработка данных (успешное завершение)
        // action - данные, которые возвращает middleware
        fulfilled: (state: RandomJokesSliceState, action: any) => {
          state.status = "success"
          state.data = [
            ...state.data,
            {
              id: v4(),
              question: action.payload.setup,
              answer: action.payload.punchline,
            },
          ]
        },
        // Обработка ошибки (запрос завершился с ошибкой)
        rejected: (state: RandomJokesSliceState, action: any) => {
          state.status = "error"
          state.error = action.payload
        },
      },
    ),
  }),
  selectors: {
    jokeData: (state: RandomJokesSliceState) => state,
  },
})

export const randomJokessliceAction = randomJokesSlice.actions
export const randomJokessliseSelector = randomJokesSlice.selectors