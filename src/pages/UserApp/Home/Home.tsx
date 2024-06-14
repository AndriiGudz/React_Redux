import { useFormik } from "formik"
import { userSliceActions } from "store/redux/userSlice/userSlice"
import * as Yup from "yup"

import Input from "components/Input/Input"
import Button from "components/Button/Button"

import { HomePageWrapper, UserForm, UserFormName } from "./styles"
import { useAppDispatch } from "store/hooks"
import { v4 } from "uuid"
import { UsersFormValues, USERS_FORM_NAMES } from "./types"

function Home() {
  const dispatch = useAppDispatch()

  const schema = Yup.object().shape({
    [USERS_FORM_NAMES.FULL_NAME]: Yup.string().required(
      "Поле имя обязательно для заполнения.",
    ),
    [USERS_FORM_NAMES.AGE]: Yup.number().required(
      "Поле возраст обязательно для заполнения.",
    ),
    [USERS_FORM_NAMES.JOB_TITLE]: Yup.string().required(
      "Поле работа обязательно для заполнения.",
    ),
  })

  const formik = useFormik({
    initialValues: {
      [USERS_FORM_NAMES.FULL_NAME]: "",
      [USERS_FORM_NAMES.AGE]: "",
      [USERS_FORM_NAMES.JOB_TITLE]: "",
    } as UsersFormValues,
    validationSchema: schema,
    onSubmit: values => {
      dispatch(userSliceActions.addUser({ ...values, id: v4() }))
    },
  })

  return (
    <HomePageWrapper>
      <UserForm onSubmit={formik.handleSubmit}>
        <UserFormName>Create User</UserFormName>
        <Input
          name={USERS_FORM_NAMES.FULL_NAME}
          placeholder="Enter fullname"
          value={formik.values[USERS_FORM_NAMES.FULL_NAME]}
          label="First/Last name"
          onChange={formik.handleChange}
          error={formik.errors[USERS_FORM_NAMES.FULL_NAME]}
        />
        <Input
          name={USERS_FORM_NAMES.AGE}
          placeholder="Enter age"
          value={formik.values[USERS_FORM_NAMES.AGE]}
          label="Age"
          onChange={formik.handleChange}
          error={formik.errors[USERS_FORM_NAMES.AGE]}
        />
        <Input
          name={USERS_FORM_NAMES.JOB_TITLE}
          placeholder="Enter job"
          value={formik.values[USERS_FORM_NAMES.JOB_TITLE]}
          label="Job title"
          onChange={formik.handleChange}
          error={formik.errors[USERS_FORM_NAMES.JOB_TITLE]}
        />
        <Button name="Create" type="submit" />
      </UserForm>
    </HomePageWrapper>
  )
}

export default Home
