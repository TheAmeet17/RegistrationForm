import Homepage from "../page/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginPage } from "../page/LoginPage";

import { RegistrationPage } from "../page/RegistrationPage";
import NotFoundPage from "../page/NotFoundPage";

const AppRoutes=()=>{
    return(
        
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/register" element={<RegistrationPage/>}/>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>
        
    );
}
export default AppRoutes;