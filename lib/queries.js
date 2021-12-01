const connectDB = require('./db')
const errorHandler = require('./errorHandler')

module.exports = {
    Usuarios: async() => {
        let db
        let Usuarios = []
        try {
            db = await connectDB()
            Usuarios = await db.collection('Usuarios').find().toArray()
        } catch (error) {
            errorHandler(error)
        }
        return Usuarios

    },

    Proyectos: async() => {
        let db
        let Proyectos = []
        try {
            db = await connectDB()
            Proyectos = await db.collection('Proyectos').find().toArray()
        } catch (error) {
            errorHandler(error)
        }
        return Proyectos

    },
    Inscripciones: async() => {
        let db
        let Inscripciones = []
        try {
            db = await connectDB()
            Inscripciones = await db.collection('Inscripciones').find().toArray()
        } catch (error) {
            errorHandler(error)
        }
        return Inscripciones

    },
    Avances: async() => {
        let db
        let Avances = []
        try {
            db = await connectDB()
            Avances = await db.collection('Avances').find().toArray()
        } catch (error) {
            errorHandler(error)
        }
        return Avances

    },

}