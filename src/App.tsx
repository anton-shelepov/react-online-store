import { Route, Routes } from "react-router-dom";
import Catalog from "./Components/Catalog/Catalog";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import s from "./App.module.scss"
import ProfilePage from "./Pages/ProfilePage/ProfilePage";


function App() {
    return (
        <div className={s.app}> 
        
            <Header /> 

            <div className={s.container}>
                <Catalog />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/profile' element={<ProfilePage />} /> 
                </Routes>
            </div>
        </div>
    );
}

export default App; 
