import { lazy, Suspense } from "react"

import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from "../components/personal/ErrorFallback"

// const Home = lazy(() =>
//   new Promise(resolve => {
//     setTimeout(() => resolve(import('../components/public/Home.jsx')), 3000)
//   })
// )
const Home = lazy(() => import('../components/public/Home.jsx'))
const Services = lazy(() => import('../components/public/Services.jsx'))
const About = lazy(() => import('../components/public/About.jsx'))
const Gallery = lazy(() => import('../components/public/Gallery.jsx'))
const Functionalities = lazy(() => import('../components/public/Functionalities.jsx'))
const InternalServices = lazy(() => import('../components/public/InternalServices.jsx'))

const withBoundary = (Component) => (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Component />
    </ErrorBoundary>
);

export const publicRoutes = [
  { path: "/", element: withBoundary(Home) },
  { path: "/about", element: withBoundary(About) },
  { path: "/services", element: withBoundary(Services) },
  { path: "/gallery", element: withBoundary(Gallery) },
  { path: "/functionalities", element: withBoundary(Functionalities) },
  { path: "/internalServices", element: withBoundary(InternalServices) },
]