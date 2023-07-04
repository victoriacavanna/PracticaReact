import { Routes, Route } from "react-router-dom";
import Inicio from "../Inicio";
import FormAddProductos from "../productos/FormAddProductos";
import CardProductos from "../productos/CardProductos";
import Administracion from "../../pages/Administracion";
import Catalogo from "../catalogo/Catalogo";

const Rutas = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/agregar" element={<FormAddProductos />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/administracion" element={<Administracion />} />
        </Routes>
    );
};
export default Rutas