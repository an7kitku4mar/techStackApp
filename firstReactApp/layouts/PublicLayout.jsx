import Header from "../components/public/Header"
import Footer from "../components/public/Footer"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import LoginModal from "../components/public/Login.jsx"



const PublicLayout = () => {

  const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <>
            <Header openLogin={() => setIsLoginOpen(true)}/>
            <Outlet />
            <Footer />
            <LoginModal
            isOpen={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
            />
        </>
    )

    
}

export default PublicLayout