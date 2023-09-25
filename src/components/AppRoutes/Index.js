import React, { Suspense, lazy } from 'react'
import{ Routes, Route} from 'react-router-dom'
import Dashboard from '../../Pages/Dashboard'
/*import Inventory from '../../Pages/Inventory'*/
/*import Orders from '../../Pages/Orders'*/
/*import Customers from '../../Pages/Customers'*/
const Customer = lazy(()=>import('../../Pages/Customers'))
const Inventory = lazy(()=>import('../../Pages/Inventory'))
const Orders = lazy(()=>import('../../Pages/Orders'))

function AppRoutes() {
  return (
    <>
    <Routes>
        <Route path="/dashboard" element ={<Dashboard/>}></Route>
        <Route path="/inventory" element ={<Suspense><Inventory/></Suspense>}></Route>
        <Route path="/orders" element ={<Suspense><Orders/></Suspense>}></Route>
        <Route path="/customers" element ={<Suspense><Customer/></Suspense>}>
          <Route path='add' element={<Orders/>}/>
          <Route path='sub' element={<Inventory/>}/>
        </Route>
    </Routes>
   </>
  )
}

export default AppRoutes
