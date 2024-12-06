import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./DefaultLayout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route index></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
