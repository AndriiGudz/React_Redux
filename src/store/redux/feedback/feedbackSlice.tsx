import { createAppSlice } from "store/createAppSlice";
import {FeedbackStateSlice} from './types'

const feedbackInitialState: FeedbackStateSlice = {
    resultLike: 0
}

export const feedbackSlice = createAppSlice({
    name: 'FEEDBACK',
    initialState: feedbackInitialState,
    reducers: create => ({
        like: create.reducer((state: FeedbackStateSlice) => {state.resultLike = state.resultLike + 1})
    }),
    selectors: {
        resultLike: (state: FeedbackStateSlice) => state.resultLike
    }
})

export const feedbackSliceAction = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors