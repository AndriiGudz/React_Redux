import { useState } from 'react'
import {CounterComponent, CounterResult} from './styles'
import Button from 'components/Button/Button'

// 8. Импортируем хуки для диспача и селекта
import {useAppDispatch, useAppSelector} from 'store/hooks'
// 9. Импортируем экшен и селекторы, которые мы экспортировали в слайсе
import {counterSliceAction, counterSliceSelectors} from 'store/redux/counter/counterSlice'

function Counter() {
  // 10. Забираем значение count из store
  const count = useAppSelector(counterSliceSelectors.count)
  // 11. Сохранить функцию dispatch, которую возращает вызов хука useDispatch
  const dispatch = useAppDispatch()

  const onPlus = () => {
    // 12. Диспатчим экшен plus, который вызовет reducer - plus
    dispatch(counterSliceAction.plus())
    }
    
    const onMinus = () => {
    // 12. Диспатчим экшен minus, который вызовет reducer - minus
    dispatch(counterSliceAction.minus())
  }


  return (
    <CounterComponent>
      <Button name="-" onClick={onMinus} />
      <CounterResult>{count}</CounterResult>
      <Button name="+" onClick={onPlus} />
    </CounterComponent>
  )
}

export default Counter
