import { useFormik } from "formik"
import { userSliceActions } from "store/redux/userSlice/userSlice"

import Input from "components/Input/Input"
import Button from "components/Button/Button"

import { HomePageWrapper, UserForm, UserFormName } from "./styles"
import { useAppDispatch } from "store/hooks"
import { v4 } from "uuid"

function Home() {
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            fullName: '',
            age: '',
            jobTitle: ''
        },
        onSubmit: (values) => {dispatch(userSliceActions.addUser({...values, id: v4()}))}
    })

  return (
    <HomePageWrapper>
      <UserForm onSubmit={formik.handleSubmit}>
        <UserFormName>Create User</UserFormName>
        <Input
          name="fullName"
          placeholder="Enter fullname"
          value={formik.values.fullName}
          label="First/Last name"
          onChange={formik.handleChange}
        />
        <Input
          name="age"
          placeholder="Enter age"
          value={formik.values.age}
          label="Age"
          onChange={formik.handleChange}
        />
        <Input
          name="jobTitle"
          placeholder="Enter job"
          value={formik.values.jobTitle}
          label="Job title"
          onChange={formik.handleChange}
        />
        <Button name="Create" type="submit" />
      </UserForm>
    </HomePageWrapper>
  )
}

export default Home