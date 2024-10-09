import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import HomePage from './pages/home'
import CustomerLayout from './layouts/CustomerLayout'
import DetailProject from './components/projects/components/DetailProject'
import AboutPage from './components/about'
import ContactPage from './components/contact'
import ProjectsPage from './components/projects'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<CustomerLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/duan' element={<ProjectsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/duan/:id" element={<DetailProject />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
