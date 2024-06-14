import Button from "components/Button/Button"
import { UsersPageWrapper, UserCard, Paragraph } from "./styles"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  userSliceSelector,
  userSliceActions,
} from "store/redux/userSlice/userSlice"
import { v4 } from "uuid"

function Users() {
  const users = useAppSelector(userSliceSelector.users)
  const dispatch = useAppDispatch()

  const handleDelete = (id: string) => {
    dispatch(userSliceActions.deleteUser(id))
  }

  const handleDeleteAll = () => {
    dispatch(userSliceActions.deleteAllUsers())
  }

  const userCards = users.map(user => {
    return (
      <UserCard key={user.id}>
        <Paragraph>{user.fullName}</Paragraph>
        <Paragraph>{user.age}</Paragraph>
        <Paragraph>{user.jobTitle}</Paragraph>
        <Button name="Удалить" onClick={() => handleDelete(user.id)} />
      </UserCard>
    )
  })

  return (
    <UsersPageWrapper>
      {userCards}
      {users.length > 0 && (
         <Button name="Удалить всех пользователей" onClick={handleDeleteAll} />
      )}
    </UsersPageWrapper>
  )
}

export default Users
