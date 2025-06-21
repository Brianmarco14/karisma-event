import {Route, Routes} from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import RedeemEvent from "./pages/RedeemEvent"
import Program from "./pages/Program"
import Learning from "./pages/Learning"
import GuestLayout from "./components/layouts/GuestLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import ForgotPassword from "@/pages/auth/ForgotPassword.jsx";
import ResetPassword from "@/pages/auth/ResetPassword.jsx";
import VerifyLogin from "@/pages/auth/VerifyLogin.jsx";
import ProtectedLayout from "@/components/layouts/ProtectedLayout.jsx";
import Profile from "./pages/Profile"

const App = () => {
    return (
        <>
            <Routes>
                <Route element={<GuestLayout/>}>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                    <Route path={'/forgot-password'} element={<ForgotPassword/>}/>
                    <Route path={'/reset-password'} element={<ResetPassword/>}/>
                    <Route path={'/verify-login'} element={<VerifyLogin/>}/>
                </Route>
                <Route element={<ProtectedLayout/>}>
                    <Route element={<RootLayout/>}>
                        <Route index element={<Program/>}/>
                    </Route>
                    <Route path="learning/:slug" element={<Learning/>}/>
                    <Route path="voucher-redeem" element={<RedeemEvent/>}/>
                    <Route path="profile" element={<Profile />}/>
                </Route>
                <Route path="*" element={<div>404 Not Found</div>}/>
            </Routes>
        </>
    )
}

export default App
