import { FeedbackComponent, FeedbackBtn, Result, Icon } from "./styles"
import Button from "components/Button/Button"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackSliceAction,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlice"

import Like from "assets/Like.png"
import Dislike from "assets/Dislike.png"

function Feedback() {
  const countLike = useAppSelector(feedbackSliceSelectors.resultLike)
  const countDisLike = useAppSelector(feedbackSliceSelectors.resultDislike)
  const dispatch = useAppDispatch()

  const like = () => {
    dispatch(feedbackSliceAction.like())
  }

  const disLike = () => {
    dispatch(feedbackSliceAction.disLike())
  }

  const resetResult = () => {
    dispatch(feedbackSliceAction.reset())
  }

  return (
    <FeedbackComponent>
      <FeedbackBtn>
        <Icon src={Like} alt="Like" onClick={like} />
        {/* <Button name="Like 👍" onClick={like} /> */}
        <Result>{countLike}</Result>
      </FeedbackBtn>
      <FeedbackBtn>
        <Icon src={Dislike} alt="Like" onClick={disLike} />
        {/* <Button name="Dislike 👎" onClick={disLike} /> */}
        <Result>{countDisLike}</Result>
      </FeedbackBtn>
      <Button name="Reset Results" onClick={resetResult} />
    </FeedbackComponent>
  )
}

export default Feedback
