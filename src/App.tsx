import { Route, Routes } from "react-router-dom";
import Catalog from "./Components/Catalog/Catalog";
import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import s from "./App.module.scss"


function App() {
    return (
        <div className={s.app}> 
        
            <Header /> 

            <div className={s.container}>
                <Catalog />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App; 
