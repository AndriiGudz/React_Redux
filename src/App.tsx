import Layout from "pages/UserApp/Layout/Layout"
import Home from "pages/UserApp/Home/Home"
import Users from "pages/UserApp/User/Users"
import Homeworks15 from "homeworks/Homewroks15/Homeworks15"
import Lessons15 from "lessons/Lessons15/Lessons15"
import Lessons17 from "lessons/Lessons17/Lessons17"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Layout>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='*' element={'Page not found'} />
        </Routes>
      </Layout> */}

      {/* <Lessons15 /> */}
      {/* <Homeworks15 /> */}
      <Lessons17 />
    </BrowserRouter>
  )
}

export default App
