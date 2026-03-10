import { lazy, Suspense } from "react"

const Dashboard = lazy(() => import('../components/personal/Dashboard.jsx'))
const Payslips = lazy(() => import ('../components/personal/Payslips.jsx'))
const Profile = lazy(() => import ('../components/personal/Profile.jsx'))
const IncomeTax = lazy(() => import ('../components/personal/IncomeTax.jsx'))
const Consents = lazy(() => import ('../components/personal/Consents.jsx'))
const ProvidentFund = lazy(() => import ('../components/personal/ProvidentFund.jsx'))
const Claims = lazy(() => import ('../components/personal/Claims.jsx'))
const Applications = lazy(() => import ('../components/personal/Applications.jsx'))
const MisPersonal = lazy(() => import ('../components/personal/MisPersonal.jsx'))
const QueryManagement = lazy(() => import ('../components/personal/QueryManagement.jsx'))

const TravelClaims = lazy(() => 
  new Promise(resolve => {
    setTimeout(()=> resolve(import ('../components/personal/forms/TravelClaims.jsx')), 13000)
  }))
// const TravelClaims = lazy(() => import ('../components/personal/forms/TravelClaims.jsx'))
const TravelAdvances = lazy(() => import ('../components/personal/forms/TravelAdvances.jsx'))
const IncomeTaxForm = lazy(() => import ('../components/personal/forms/IncomeTaxForm.jsx'))
const PFVariation = lazy(() => import ('../components/personal/forms/PFVariation.jsx'))


export const privateRoutes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/profile", element: <Profile /> },
  { path: "/payslips", element: <Payslips /> },
  { path: "/incomeTax", element: <IncomeTax /> },
  { path: "/consents", element: <Consents /> },
  { path: "/providentFund", element: <ProvidentFund /> },
  { path: "/claims", element: <Claims /> },
  { path: "/forms/travel-claims", element: <TravelClaims /> },
  { path: "/forms/travel-advances", element: <TravelAdvances /> },
  { path: "/forms/pf-variation", element: <PFVariation /> },
  { path: "/forms/income-tax", element: <IncomeTaxForm /> },
  { path: "/forms/applications", element: <Applications /> },
  { path: "/forms/misPersonal", element: <MisPersonal /> },
  { path: "/forms/queryManagement", element: <QueryManagement /> },
]
