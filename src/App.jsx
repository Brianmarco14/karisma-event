import { Route, Routes } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import RedeemEvent from "./pages/RedeemEvent"
import Program from "./pages/Program"

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Program />} />
        </Route>
        <Route path="voucher-reedem" element={<RedeemEvent />} />
      </Routes>
    </>
  )
}

export default App