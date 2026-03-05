import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from "react"
import RouterGuard from "../components/personal/RouterGuard"

const Home = lazy(() => import('../components/public/Home.jsx'))
const Services = lazy(() => import('../components/public/Services.jsx'))
const About = lazy(() => import('../components/public/About.jsx'))
const Gallery = lazy(() => import('../components/public/Gallery.jsx'))
const Functionalities = lazy(() => import('../components/public/Functionalities.jsx'))
const InternalServices = lazy(() => import('../components/public/InternalServices.jsx'))

const Dashboard = lazy(() => import('../components/personal/Dashboard.jsx'))

const PublicLayout = lazy(() => import('../layouts/PublicLayout.jsx'))
const PersonalLayout = lazy(() => import('../layouts/PersonalLayout.jsx'))

function App() {

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
              <PublicLayout />
            </RouterGuard>
          }>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/functionalities" element={<Functionalities />} />
            <Route path="/internal-services" element={<InternalServices />} />
          </Route>

          <Route element={
            <RouterGuard type="private">
              <PersonalLayout />
            </RouterGuard>
          }>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

        </Routes>

      </Suspense>

    </BrowserRouter>
  )
}

export default App