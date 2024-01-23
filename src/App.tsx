import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import ListaCategorias from "./components/categorias/listarcategorias/ListarCategorias"
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria"
import FormCategoria from "./components/categorias/formcategoria/FormCategoria"

function App() {
  return (
    <>
      
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh] bg-slate-300">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      
    </>
  )
}

export default App