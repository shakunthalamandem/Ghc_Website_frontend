import { Routes, Route, } from "react-router-dom";
import LLMModelsMain from '../components/Main/LLMModelsMain';
const AppRoutes = () => {
    return (


        <>
                <Routes>
                    <Route path="/section" element={<LLMModelsMain />} />
                    {/* <Route path="/section" element={<SectionMain />} /> */}
                </Routes>
        </>

    )
}

export default AppRoutes
