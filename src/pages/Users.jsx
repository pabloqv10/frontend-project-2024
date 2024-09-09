import { useState } from "react";
import { Table, Button, ButtonGroup, Badge } from "react-bootstrap";
import { MainLayout } from "../layouts/MainLayout";

export const Users = () => {
  // Estado inicial de los usuarios
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Juan Pérez", email: "juan@example.com", rol: "usuario" },
    {
      id: 2,
      nombre: "María López",
      email: "maria@example.com",
      rol: "usuario",
    },
    {
      id: 3,
      nombre: "Carlos García",
      email: "carlos@example.com",
      rol: "admin",
    },
  ]);

  // Función para cambiar el rol del usuario
  const cambiarRol = (id) => {
    setUsuarios((usuariosPrevios) =>
      usuariosPrevios.map((usuario) =>
        usuario.id === id
          ? { ...usuario, rol: usuario.rol === "admin" ? "usuario" : "admin" }
          : usuario
      )
    );
  };

  return (
    <MainLayout>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Administrar Usuarios</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>
                  <Badge
                    bg={usuario.rol === "admin" ? "danger" : "secondary"}
                    text="white"
                  >
                    {usuario.rol.charAt(0).toUpperCase() + usuario.rol.slice(1)}
                  </Badge>
                </td>
                <td>
                  <ButtonGroup>
                    <Button
                      variant={
                        usuario.rol === "admin"
                          ? "outline-secondary"
                          : "outline-primary"
                      }
                      onClick={() => cambiarRol(usuario.id)}
                      className="btn-sm"
                    >
                      {usuario.rol === "admin"
                        ? "Convertir a Usuario"
                        : "Promover a Admin"}
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </MainLayout>
  );
};
