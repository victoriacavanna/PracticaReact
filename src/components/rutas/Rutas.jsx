import { Routes, Route } from "react-router-dom";
import Inicio from "../Inicio";
import FormAddProductos from "../productos/FormAddProductos";
import CardProductos from "../productos/CardProductos";
import Administracion from "../../pages/Administracion";

const Rutas = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/agregar" element={<FormAddProductos />} />
            <Route path="/catalogo" element={<CardProductos />} />
            <Route path="/administracion" element={<Administracion />} />
        </Routes>
    );
};
export default Rutas