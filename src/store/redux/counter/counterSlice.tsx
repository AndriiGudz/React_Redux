// 1. Импортируем функцию с помощью которой создадим Slice
import { createAppSlice } from "store/createAppSlice";
import {CounterStateSlice} from './types'

// 4.1 Создаем объект в первоначальном состоянии, который потом передаем в initialState:
const counterInitialState: CounterStateSlice = {
    count: 0
}

// 2. Создаем слайс для каунтера
export const counterSlice = createAppSlice({
    // 3. Задаем имя для нашего объекта, в котором хранится объект со значением кантейнера в глобальном стейте
    name: 'COUNTER',
    // 4. Задаем объект, в котором хранится начальное состояние
    initialState: counterInitialState,
    // 5. Создаем объект, внутри которого будут храниться все редьюсеры
    reducers: create => ({
        plus: create.reducer((state: CounterStateSlice) => {state.count = state.count + 1}),
        minus: create.reducer((state: CounterStateSlice) => {state.count = state.count - 1})
    }),
    // 6. Создаем селекторы, которые позволяют забрать данные из хранилища в компонент
    selectors: {
        count: (state: CounterStateSlice) => state.count
    }
})

// 7. Export экшенов (plus, minus) и селекторов для того, чтобы можно было воспользоваться ими в компонентах приложения
export const counterSliceAction = counterSlice.actions
export const counterSliceSelectors = counterSlice.selectors