import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Counter from "./Counter"
import Effect from "./Effect"
import Reducer from "./Reducer"
import Callback from "./Callback"

export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="Counter" element={<Counter/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
    <Effect/>
    <Reducer/>
    <Callback/>
    </>
  )
}
