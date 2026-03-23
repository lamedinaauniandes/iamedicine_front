import React, { useEffect, useRef, useState, useCallback } from "react";
import { getUsers } from "../../api/admin_api";

import DataTable from "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import Button from 'react-bootstrap/Button'


import { 
  CCard, 
  CCardBody,
  CCardHeader,
  CCardFooter,
  CButton } from "@coreui/react";

export default function Users() {
  const tableRef = useRef(null);
  const dtRef = useRef(null); // instancia DataTables (persistente entre renders)

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const destroyDataTable = useCallback(() => {
    if (dtRef.current) {
      dtRef.current.destroy();
      dtRef.current = null;
    }
  }, []);

  const initDataTable = useCallback(
    (rows) => {
      const tableEl = tableRef.current;
      if (!tableEl) return;

      // por seguridad: destruye antes de crear
      destroyDataTable();

      dtRef.current = new DataTable(tableEl, {
        data: rows,
        columns: [
          { title: "#", data: "id", defaultContent: "" },
          { title: "nombre", data: "nombre", defaultContent: "" },
          { title: "username", data: "username", defaultContent: "" },
          { title: "password", data: "password", defaultContent: "" },
          { title: "apellido", data: "apellido", defaultContent: "" },
          { title: "direccion", data: "direccion", defaultContent: "" },
          { title: "telefono", data: "telefono", defaultContent: "" },
          { title: "correo", data: "correo", defaultContent: "" },
          { title: "tipo", data: "tipo", defaultContent: "" },
          { title: "creacion", data: "creacion", defaultContent: "" },
          { title: "estado", data: "estado", defaultContent: "" },
        ],
        pageLength: 10,
      });
    },
    [destroyDataTable]
  );

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await getUsers();
        const rows = Array.isArray(res) ? res : res?.data ?? [];

        if (cancelled) return;

        setUsers(rows);
        setLoading(false);
      } catch (err) {
        if (cancelled) return;
        console.error(err);
        setError(err);
        setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);


  useEffect(() => {
    if (loading || error) return;
    initDataTable(users);
    return () => {
      destroyDataTable();
    };
  }, [users, loading, error, initDataTable, destroyDataTable]);

  return (
    <CCard>
          <CCardHeader className="mb-4 d-flex align-items-center" style={{ height: "8vh" }}>
              <strong>Usuarios</strong>
              <Button type="button" className="btn btn-primary ms-auto" href="/app/users/create">Crear Usuario</Button>
          </CCardHeader>

      <CCardBody className="d-flex flex-column overflow-auto">
        {loading && <div>Cargando...</div>}
        {error && (
          <div style={{ color: "red" }}>
            Error: {String(error?.message ?? error)}
          </div>
        )}

        {/* DataTables 2 construye thead/tbody a partir de columns */}
        <table ref={tableRef} className="display" style={{ width: "100%" }} />
      </CCardBody>
      

      <CCardFooter>
     
      </CCardFooter>
    </CCard>
  );
}
