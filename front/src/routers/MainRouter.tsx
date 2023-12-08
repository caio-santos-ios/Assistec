import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/Home"
import RegisterOrderPage from "../pages/RegisterOrder"
import HistoricPage from "../pages/Historic"
export const MainRouter = () => {
    return(
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/entrada" element={ <RegisterOrderPage /> } />
            <Route path="/historico" element={ <HistoricPage /> } />
        </Routes>
    )    
}