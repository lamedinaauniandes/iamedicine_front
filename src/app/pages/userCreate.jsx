import React, { useState } from "react";
import { CCard, CCardBody, CCardHeader, CCardFooter } from "@coreui/react";
import {crearUser} from '../../api/admin_api';

export default function UserCreate() {
  const [form, setForm] = useState({ 
    nombre: "",
    username: "",
    password: "",
    apellido: "",
    direccion: "",
    telefono: "",
    correo: "",
    tipo: "",
    estado: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSend = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
        const res = await crearUser(form);
        console.log(res)
        setForm({
              nombre: "",
              username: "",
              password: "",
              apellido: "",
              direccion: "",
              telefono: "",
              correo: "",
              tipo: "",
              estado: false,
        })
    } catch(err) {
         console.log("Error:", err?.detail || err)
    }; 
 
  };

  const labelStyle = { width: 110 }; // ajusta si quieres más ancho

  return (
    <CCard>
      <CCardHeader className="mb-3 d-flex align-items-center" style={{ height: "8vh" }}>
        <strong>Crear Usuarios</strong>
      </CCardHeader>

      <CCardBody className="overflow-auto">
        <form onSubmit={onSend} className="d-grid gap-3">

          {/* Nombres */}
          <div className="row align-items-center g-2">
            <label htmlFor="nombre" className="col-auto col-form-label" style={labelStyle}>
              Nombres:
            </label>
            <div className="col">
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Nombres"
                className="form-control"
              />
            </div>
          </div>

          {/* Apellido */}
          <div className="row align-items-center g-2">
            <label htmlFor="apellido" className="col-auto col-form-label" style={labelStyle}>
              Apellido:
            </label>
            <div className="col">
              <input
                id="apellido"
                name="apellido"
                type="text"
                value={form.apellido}
                onChange={handleChange}
                placeholder="Apellidos"
                className="form-control"
              />
            </div>
          </div>

          {/* Usuario */}
          <div className="row align-items-center g-2">
            <label htmlFor="username" className="col-auto col-form-label" style={labelStyle}>
              Usuario:
            </label>
            <div className="col">
              <input
                id="username"
                name="username"
                type="text"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
                className="form-control"
              />
            </div>
          </div>

          {/* Password */}
          <div className="row align-items-center g-2">
            <label htmlFor="password" className="col-auto col-form-label" style={labelStyle}>
              Password:
            </label>
            <div className="col">
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="form-control"
              />
            </div>
          </div>

          {/* Teléfono */}
          <div className="row align-items-center g-2">
            <label htmlFor="telefono" className="col-auto col-form-label" style={labelStyle}>
              Teléfono:
            </label>
            <div className="col">
              <input
                id="telefono"
                name="telefono"
                type="text"
                value={form.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                className="form-control"
              />
            </div>
          </div>

          {/* Dirección */}
          <div className="row align-items-center g-2">
            <label htmlFor="direccion" className="col-auto col-form-label" style={labelStyle}>
              Dirección:
            </label>
            <div className="col">
              <input
                id="direccion"
                name="direccion"
                type="text"
                value={form.direccion}
                onChange={handleChange}
                placeholder="Dirección"
                className="form-control"
              />
            </div>
          </div>

          {/* Correo */}
          <div className="row align-items-center g-2">
            <label htmlFor="correo" className="col-auto col-form-label" style={labelStyle}>
              Correo:
            </label>
            <div className="col">
              <input
                id="correo"
                name="correo"
                type="email"
                value={form.correo}
                onChange={handleChange}
                placeholder="Correo"
                className="form-control"
              />
            </div>
          </div>

          {/* Tipo */}
          <div className="row align-items-center g-2">
            <label htmlFor="tipo" className="col-auto col-form-label" style={labelStyle}>
              Tipo:
            </label>
            <div className="col">
              <select
                id="tipo"
                name="tipo"
                value={form.tipo}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Seleccione...</option>
                <option value="1">Administrador</option>
                <option value="0">Usuario</option>
              </select>
            </div>
          </div>

          {/* Estado */}
          <div className="row align-items-center g-2">
            <label htmlFor="estado" className="col-auto col-form-label" style={labelStyle}>
              Estado:
            </label>
            <div className="col">
              <div className="form-check">
                <input
                  id="estado"
                  name="estado"
                  type="checkbox"
                  checked={form.estado}
                  onChange={handleChange}
                  className="form-check-input"
                />
              </div>
            </div>
          </div>

          {/* Botón */}
          <div className="d-flex justify-content-end pt-2">
            <button type="submit" className="btn btn-success">
              Guardar
            </button>
          </div>
        </form>
      </CCardBody>

      <CCardFooter />
    </CCard>
  );
}