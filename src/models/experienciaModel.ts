import mongoose from 'mongoose';

const experienciaSchema = new mongoose.Schema({
  numeroId: { type: String, required: true }, // Referencia al usuario
  tieneExperiencia: { type: String, required: true },
  empresa: { type: String },
  cargo: { type: String },
  fechaInicio: { type: Date, default: null },
  fechaFin: { type: Date, default: null }
});

const Experiencia = mongoose.model('Experiencia', experienciaSchema);

export default Experiencia;
