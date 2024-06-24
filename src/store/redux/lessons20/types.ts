interface UsersData {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
}

export interface AppUsersSliceState {
  dataUsers: UsersData[]
  status: "default" | "loading" | "success" | "error"
  error: any
}
