import Button from "components/Button/Button"
import { RandomJokesWrapper, JokeCard, JokerText } from "./styles"
import { UseDispatch } from "react-redux"
import { RandomJokesSliceState } from "store/redux/randomJokes/types"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  randomJokessliceAction,
  randomJokessliseSelector,
} from "store/redux/randomJokes/randomJokesSlice"
import Loader from "components/Loader/Loader"

function RandomJokes() {
  const dispatch = useAppDispatch()
  const { data, status, error } = useAppSelector(
    randomJokessliseSelector.jokeData,
  )

  const jokes = data.map(joke => {
    return (
      <JokerText key={joke.id}>
        {joke.question}: {joke.answer}
      </JokerText>
    )
  })

  const getJoke = () => {
    dispatch(randomJokessliceAction.getJoke())
  }

  return (
    <RandomJokesWrapper>
      <JokeCard>
        {status === "loading" && <Loader />}
        <Button name="Get Joke" onClick={getJoke} />
        {jokes}
      </JokeCard>
    </RandomJokesWrapper>
  )
}

export default RandomJokes
