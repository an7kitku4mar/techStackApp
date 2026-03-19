import { lazy, Suspense } from "react"

import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from "../components/personal/ErrorFallback"

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

const withBoundary = (Component) => (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Component />
    </ErrorBoundary>
);

export const privateRoutes = [
  { path: "/dashboard", element: withBoundary(Dashboard) },
  { path: "/profile", element: withBoundary(Profile) },
  { path: "/payslips", element: withBoundary(Payslips) },
  { path: "/incomeTax", element: withBoundary(IncomeTax) },
  { path: "/consents", element: withBoundary(Consents) },
  { path: "/providentFund", element: withBoundary(ProvidentFund) },
  { path: "/claims", element: withBoundary(Claims) },
  { path: "/forms/travel-claims", element: withBoundary(TravelClaims) },
  { path: "/forms/travel-advances", element: withBoundary(TravelAdvances) },
  { path: "/forms/pf-variation", element: withBoundary(PFVariation) },
  { path: "/forms/income-tax", element: withBoundary(IncomeTaxForm) },
  { path: "/forms/applications", element: withBoundary(Applications) },
  { path: "/forms/misPersonal", element: withBoundary(MisPersonal) },
  { path: "/forms/queryManagement", element: withBoundary(QueryManagement) },
]
