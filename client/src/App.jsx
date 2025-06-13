import { Button } from "@/components/ui/button"
import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/auth"
function App() {
  return (
      <Routes>
        <Route path='/auth' element={<AuthPage></AuthPage>}></Route>
      </Routes>
  )
}

export default App