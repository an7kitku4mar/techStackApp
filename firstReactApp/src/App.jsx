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

const Payslips = lazy(() => import ('../components/personal/Payslips.jsx'))
const Profile = lazy(() => import ('../components/personal/Profile.jsx'))
const IncomeTax = lazy(() => import ('../components/personal/IncomeTax.jsx'))
const Consents = lazy(() => import ('../components/personal/Consents.jsx'))
const ProvidentFund = lazy(() => import ('../components/personal/ProvidentFund.jsx'))
const Claims = lazy(() => import ('../components/personal/Claims.jsx'))
const Applications = lazy(() => import ('../components/personal/Applications.jsx'))
const MisPersonal = lazy(() => import ('../components/personal/MisPersonal.jsx'))
const QueryManagement = lazy(() => import ('../components/personal/QueryManagement.jsx'))

const TravelClaims = lazy(() => import ('../components/personal/forms/TravelClaims.jsx'))
const TravelAdvances = lazy(() => import ('../components/personal/forms/TravelAdvances.jsx'))
const IncomeTaxForm = lazy(() => import ('../components/personal/forms/IncomeTaxForm.jsx'))
const PFVariation = lazy(() => import ('../components/personal/forms/PFVariation.jsx'))

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
            <Route path="/internalServices" element={<InternalServices />} />
          </Route>

          <Route element={
            <RouterGuard type="private">
              <PersonalLayout />
            </RouterGuard>
          }>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/payslips" element={<Payslips />} />
            <Route path="/incomeTax" element={<IncomeTax/>} />
            <Route path="/consents" element={<Consents />} />
            <Route path="/providentFund" element={<ProvidentFund />} />
            <Route path="/claims" element={<Claims />} />

            <Route path="/forms/travel-claims" element={<TravelClaims />} />
            <Route path="/forms/travel-advances" element={<TravelAdvances />} />
            <Route path="/forms/pf-variation" element={<PFVariation />} />
            <Route path="/forms/income-tax" element={<IncomeTaxForm />} />

            <Route path="/applications" element={<Applications />} />
            <Route path="/misPersonal" element={<MisPersonal />} />
            <Route path="/queryManagement" element={<QueryManagement />} />
          </Route>

        </Routes>

      </Suspense>

    </BrowserRouter>
  )
}

export default App