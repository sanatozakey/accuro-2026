import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { LoadingSpinner } from './components/LoadingSpinner'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })))
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })))
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })))

// Beamex pages
const BeamexSolutions = lazy(() => import('./pages/BeamexSolutions'))
const CalibrationManagement = lazy(() => import('./pages/CalibrationManagement'))
const FieldCalibration = lazy(() => import('./pages/FieldCalibration'))
const WorkshopCalibration = lazy(() => import('./pages/WorkshopCalibration'))
const BeamexServices = lazy(() => import('./pages/BeamexServices'))

interface AppRouterProps {
  showSplash: boolean;
}

export function AppRouter({ showSplash }: AppRouterProps) {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner size="lg" text="Loading..." />}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout showSplash={showSplash}>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/products"
            element={<Navigate to="/beamex" replace />}
          />
          <Route
            path="/about"
            element={
              <Layout showSplash={showSplash}>
                <About />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout showSplash={showSplash}>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/beamex"
            element={
              <Layout showSplash={showSplash}>
                <BeamexSolutions />
              </Layout>
            }
          />
          <Route
            path="/beamex/calibration-management"
            element={
              <Layout showSplash={showSplash}>
                <CalibrationManagement />
              </Layout>
            }
          />
          <Route
            path="/beamex/field-calibration"
            element={
              <Layout showSplash={showSplash}>
                <FieldCalibration />
              </Layout>
            }
          />
          <Route
            path="/beamex/workshop-calibration"
            element={
              <Layout showSplash={showSplash}>
                <WorkshopCalibration />
              </Layout>
            }
          />
          <Route
            path="/beamex/services"
            element={
              <Layout showSplash={showSplash}>
                <BeamexServices />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
