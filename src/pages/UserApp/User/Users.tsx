import { UsersPageWrapper, UserCard, Paragraph } from "./styles"

import { useAppSelector } from "store/hooks"
import { userSliceSelector } from "store/redux/userSlice/userSlice"
import { v4 } from "uuid"

function Users() {
    const users = useAppSelector(userSliceSelector.users)
    
    const userCards = users.map((user) => {
        return (
            <UserCard key={user.id}>
                <Paragraph>{user.fullName}</Paragraph>
                <Paragraph>{user.age}</Paragraph>
                <Paragraph>{user.jobTitle}</Paragraph>
            </UserCard>
        )
    })

  return (
    <UsersPageWrapper>
   {userCards}
    </UsersPageWrapper>
  )
}

export default Users