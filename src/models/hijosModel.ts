import mongoose from 'mongoose';

const hijoSchema = new mongoose.Schema({
  numeroId: { type: String, required: true }, // Referencia al usuario
  tieneHijos: { type: String, required: true },
  nombres: { type: String },
  apellidos: { type: String },
  fechaNacimiento: { type: String },
  numeroDocumento: { type: String },
  tipoDocumento: { type: String },
  sexo: { type: String },
  viveConEmpleado: { type: String }
});

const Hijo = mongoose.model('Hijo', hijoSchema);

export default Hijo;
