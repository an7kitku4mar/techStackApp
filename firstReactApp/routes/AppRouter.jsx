import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense } from "react"

import RouterGuard from "../components/personal/RouterGuard"
import PublicLayout from "../layouts/PublicLayout"
import PersonalLayout from "../layouts/PersonalLayout"

import { publicRoutes } from "./PublicRoutes"
import { privateRoutes } from "./PersonalRoutes"


function AppRouter() {

  return (
    <BrowserRouter>

        <Suspense fallback={
                            <div className="flex justify-center items-center h-screen">
                            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
                            </div>
                            }>
        <Routes>
        <Route element={
                        <RouterGuard type="public">
                        <PublicLayout/>
                        </RouterGuard>}>
            {publicRoutes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element}/>
            ))}
        </Route>

        <Route element={
                        <RouterGuard type="private">
                        <PersonalLayout/>
                        </RouterGuard>}>
            {privateRoutes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element}/>
            ))}
        </Route>
      </Routes>
      </Suspense>

    </BrowserRouter>
  )
}

export default AppRouter