import mongoose from 'mongoose';

// Define el esquema para el núcleo familiar
const nucleoFamiliarSchema = new mongoose.Schema({
    numeroId: { type: String, required: true },
    viveSolo: { type: String, enum: ['SI', 'NO'], required: true },
    parentesco: { type: String, required: true },
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    edad: { type: String, required: true }
  }, { collection: 'nucleoFamiliar' });// Especifica el nombre de la colección

const NucleoFamiliar = mongoose.model('NucleoFamiliar', nucleoFamiliarSchema);

export default NucleoFamiliar;




