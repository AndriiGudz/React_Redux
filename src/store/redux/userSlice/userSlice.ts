import { createAppSlice } from "store/createAppSlice";
import { UsersSliceState, UserData } from "./types";
import { create } from "domain";
import { PayloadAction } from "@reduxjs/toolkit";

const usersInitialState: UsersSliceState = {
    users: []
}

export const userSlice = createAppSlice({
    name: 'USERS',
    initialState: usersInitialState,
    reducers: create => ({
      addUser: create.reducer((state: UsersSliceState, action: PayloadAction<UserData>) => {state.users = [...state.users, action.payload]})  
    }),
    selectors: {
        users: (state: UsersSliceState) => state.users
    }
})

export const userSliceActions = userSlice.actions
export const userSliceSelector = userSlice.selectors