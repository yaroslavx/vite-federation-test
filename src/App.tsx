import { lazy, Suspense } from 'react';
import './App.css'
import HostAppComponent from './components/hostAppComponent'

const SecondAppComponent = lazy(() => import('vite_federation_test_two/SecondAppComponent') as any);

function App() {
  return (
    <>
      <h1>Host app</h1>
      <HostAppComponent />
      <Suspense fallback={<div>Loading...</div>}>
        <SecondAppComponent/>
      </Suspense>
    </>
  )
}

export default App
