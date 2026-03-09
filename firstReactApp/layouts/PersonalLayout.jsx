import Header from "../components/personal/Header.jsx"
import Footer from "../components/personal/Footer.jsx"
import Menu from "../components/personal/Menu.jsx"
import { Outlet } from "react-router-dom"

const PersonalLayout = () => {

  

    return (
        <>
            <Header />
            <div className="flex">
            <Menu />
            <Outlet />
            </div>
            <Footer />
        </>
    )

    
}

export default PersonalLayout