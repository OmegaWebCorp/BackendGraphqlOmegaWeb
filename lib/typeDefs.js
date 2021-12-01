const { gql } = require('apollo-server');

module.exports = gql `
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
enum Rol{
  ADMINISTRADOR
  LIDER
  ESTUDIANTE
}

enum EstadoUsuario{
  PENDIENTE
  AUTORIZADO
  NO_AUTORIZADO
}

enum EstadoProyecto{
  ACTIVO
  INACTIVO
}

enum EstadoIncripcion{
    ACEPTADO
    RECHAZADO
}

enum Fase{
    INICIADO
    EN_DESARROLLO
    TERMINADO
}


type Usuario{
  _id: ID!
  correo: String!
  identificacion: String!
  nombre: String
  apellido: String
  rol: Rol
  estado: EstadoUsuario
  password: String
}

type Proyecto{
    _id: ID!
    nombre: String
    objetivogeneral: String
    objetivosespecificos: String
    presupuesto: Float
    fechainicio: String
    fechafin: String
    lider: ID
    fase: Fase
    estado: EstadoProyecto

}

type Inscripcion{
    _id: ID!
    project_id: ID
    user_id: ID
    estado: EstadoIncripcion
    fechaingreso: String
    fechaegreso: String
}

type Avance{
    _id: ID
    project_id: ID
    fecha: String
    description: String
    observations: String
    creadopor: ID
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
  Usuarios: [Usuario],
  Proyectos: [Proyecto],
  Inscripciones: [Inscripcion]
  Avances: [Avance]
}
`;