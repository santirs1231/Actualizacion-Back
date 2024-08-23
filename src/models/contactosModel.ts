import mongoose, { Schema } from 'mongoose';

// Define el esquema para contactos de emergencia
const ContactoSchema: Schema = new Schema({
  numeroId: { type: String, required: true },
  nombreContacto1: { type: String, required: true },
  numeroContacto1: { type: String, required: true },
  parentesco1: { type: String, required: true },
  nombreContacto2: { type: String, required: true },
  numeroContacto2: { type: String, required: true },
  parentesco2: { type: String, required: true }
});

// Exporta el modelo Contacto
export default mongoose.model('Contacto', ContactoSchema);

