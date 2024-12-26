import './nord.css'
import './App.css'

import { EditTemplate } from './layout/EditTemplate'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EditTemplate />} />
        <Route path="/key/:name" element={<EditTemplate /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
