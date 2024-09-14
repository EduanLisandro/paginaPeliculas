const { Schema, model } = require ('mongoose')


// Definición del esquema para el Módulo de Media
const mediaSchema = new Schema({
    serial: { type: String, unique: true, required: true },
    titulo: { type: String, required: true },
    sinopsis: { type: String },
    url: { type: String, unique: true, required: true },
    imagenPortada: { type: String },
    fechaCreacion: { type: Date, required: true },
    fechaActualizacion: { type: Date, required: true },
    añoEstreno: { type: Number, required: true },
    generoPrincipal: { 
        type: Schema.Types.ObjectId, 
        ref: 'Genero', 
        required: true 
    },
    directorPrincipal: { 
        type: Schema.Types.ObjectId, 
        ref: 'Director', 
        required: true 
    },
    productora: { 
        type: Schema.Types.ObjectId, 
        ref: 'Productora', 
        required: true 
    },
    tipo: { 
        type: Schema.Types.ObjectId, 
        ref: 'Tipo', 
        required: true 
    }
});

// Exportar el modelo para usarlo en otras partes de la aplicación
module.exports = model('Media', mediaSchema);