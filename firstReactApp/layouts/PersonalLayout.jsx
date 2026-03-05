import Header from "../components/personal/Header.jsx"
import Footer from "../components/personal/Footer.jsx"
import { Outlet } from "react-router-dom"

const PersonalLayout = () => {

  

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )

    
}

export default PersonalLayout