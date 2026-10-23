import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetail from "../Pages/ProductDetail";
import ProtectedRoute from "./ProtectedRoute";
import About from "../Pages/About";


const Approutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<ProtectedRoute>
             <About/>
        </ProtectedRoute>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/detail/:id" element={<ProductDetail/>}/>
      </Routes>
    </div>
  )
}

export default Approutes
