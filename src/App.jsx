import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route path="/" index element={<HomePage />} />
          <Route path="/chi siamo" element={<AboutUs />} />
          <Route path="/blog">
            <Route index element={<Blog />} />
            <Route path=":key" />

          </Route>

        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
