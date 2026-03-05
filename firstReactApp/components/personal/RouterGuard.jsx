import { Navigate } from "react-router-dom"

function RouterGuard({ children, type}) {

  const token = localStorage.getItem("token")

    if (type=="private" && !token) {
    return <Navigate to="/" />
    }
    if (type === "public" && token) {
    return <Navigate to="/dashboard" />;
    }

  return children
}

export default RouterGuard