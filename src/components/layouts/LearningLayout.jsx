import {Outlet} from "react-router-dom";
import {LearningProvider} from "@/context/LearningContext.jsx";

const ProtectedLayout = () => {
    return (
        <LearningProvider>
            <Outlet/>;
        </LearningProvider>
    )
};

export default ProtectedLayout;
