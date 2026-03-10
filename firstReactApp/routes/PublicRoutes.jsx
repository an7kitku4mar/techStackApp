import { lazy, Suspense } from "react"

const Home = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => resolve(import('../components/public/Home.jsx')), 3000)
  })
)
// const Home = lazy(() => import('../components/public/Home.jsx'))
const Services = lazy(() => import('../components/public/Services.jsx'))
const About = lazy(() => import('../components/public/About.jsx'))
const Gallery = lazy(() => import('../components/public/Gallery.jsx'))
const Functionalities = lazy(() => import('../components/public/Functionalities.jsx'))
const InternalServices = lazy(() => import('../components/public/InternalServices.jsx'))


export const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/functionalities", element: <Functionalities /> },
  { path: "/internalServices", element: <InternalServices /> },
]