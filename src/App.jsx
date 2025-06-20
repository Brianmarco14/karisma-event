import {Route, Routes} from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import RedeemEvent from "./pages/RedeemEvent"
import Program from "./pages/Program"
import Learning from "./pages/Learning"
import GuestLayout from "./components/layouts/GuestLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";

const App = () => {
    return (
        <>
            <Routes>
                <Route element={<RootLayout/>}>
                    <Route index element={<Program/>}/>
                </Route>
                <Route element={<GuestLayout/>}>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                </Route>
                <Route path={'/register'} element={<></>}/>
                <Route path="learning/:slug" element={<Learning/>}/>
                <Route path="voucher-reedem" element={<RedeemEvent/>}/>
            </Routes>
        </>
    )
}

export default App
