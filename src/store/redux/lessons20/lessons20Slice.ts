import { createAppSlice } from 'store/createAppSlice'
import {AppUsersSliceState} from './types'

const initialState: AppUsersSliceState = {
    dataUsers: [],
    status: 'default',
    error: undefined
}

export const usersList = createAppSlice({
    name: 'USERS_LIST',
    initialState,
    reducers: create => ({
        fetchUsersList: create.asyncThunk(
            async (arg, thunkApi) => {
                const respons = await fetch('https://jsonplaceholder.typicode.com/users')
                const result = await respons.json()
                console.log(result);
                
                if (!respons.ok) {
                    // выполняем переход к мини редьюсеру (к обработчику) rejected
                    thunkApi.rejectWithValue
                  } else {
                    // выполняем переход к мини редьюсеру (к обработчику) fulfilled
                    return result
                  }
            }
        )
    })
})