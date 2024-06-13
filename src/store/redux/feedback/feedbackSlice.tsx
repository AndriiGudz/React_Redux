import { createAppSlice } from "store/createAppSlice";
import {FeedbackStateSlice} from './types'

const feedbackInitialState: FeedbackStateSlice = {
    resultLike: 0,
    resultDislike: 0
}

export const feedbackSlice = createAppSlice({
    name: 'FEEDBACK',
    initialState: feedbackInitialState,
    reducers: create => ({
        like: create.reducer((state: FeedbackStateSlice) => {state.resultLike = state.resultLike + 1}),
        disLike: create.reducer((state: FeedbackStateSlice) => {state.resultDislike = state.resultDislike + 1}),
        reset: create.reducer((state: FeedbackStateSlice) => {
            state.resultLike = 0
            state.resultDislike = 0
        })
    }),
    selectors: {
        resultLike: (state: FeedbackStateSlice) => state.resultLike,
        resultDislike: (state: FeedbackStateSlice) => state.resultDislike
    }
})

export const feedbackSliceAction = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors