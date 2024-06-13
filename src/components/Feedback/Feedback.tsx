import {FeedbackComponent, FeedbackBtn, Result} from './styles'
import Button from 'components/Button/Button'

import {useAppDispatch, useAppSelector} from 'store/hooks'
import {feedbackSliceAction, feedbackSliceSelectors} from 'store/redux/feedback/feedbackSlice'

function Feedback() {

  const countLike = useAppSelector(feedbackSliceSelectors.resultLike)
  const dispatch = useAppDispatch()

  const like = () => {
    dispatch(feedbackSliceAction.like())
  }

  return (
    <FeedbackComponent>
      <FeedbackBtn>
        <Button name="Like 👍" onClick={like} />
        <Result>{countLike}</Result>
      </FeedbackBtn>
      <FeedbackBtn>
        <Button name="Dislike 👎" onClick={() => {}} />
        <Result>{1}</Result>
      </FeedbackBtn>
      <Button name="Reset Results" onClick={() => {}} />
    </FeedbackComponent>
  )
}

export default Feedback
