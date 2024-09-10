import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./components/Layout"
import EasyRound from "./pages/EasyRound"
import HardRound from "./pages/HardRound"
import ResultRound from "./pages/ResultRound"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<EasyRound />} />
    <Route path="hard" element={<HardRound />} />
    <Route path="result" element={<ResultRound />}/>
  </Route>
))

export default function App() {
  return(
    <RouterProvider router={router} />
  )
}