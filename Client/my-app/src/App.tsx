import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ListProduct from './pages/products/listProduct'
import AdminLayout from './pages/layouts/AdminLayout'
import SignIn from './pages/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <main>
        <Routes>
            <Route path='/' element={<Home/>}>
                <Route index element={<ListProduct/>}/>
            </Route>

            <Route path='admin' element={<AdminLayout/>}>
              <Route index element={<Navigate to="product"/>}/>
                <Route path="product" >
                  <Route index element={<ListProduct />}/>
              </Route>
            </Route>

            <Route path='/login' element={<SignIn/>}>
            </Route>
        </Routes>
        
            
      </main>
    </div>
  )
}

export default App
