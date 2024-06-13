import Homeworks15 from "homeworks/Homewroks15/Homeworks15"
import Lessons15 from "lessons/Lessons15/Lessons15"
import { BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Lessons15 /> */}
      <Homeworks15 />
    </BrowserRouter>
  )
}

export default App
