// models/informacionAcademicaModel.ts
import mongoose from 'mongoose';

const informacionAcademicaSchema = new mongoose.Schema({
    numeroId: { type: String, required: true },
    tipoEstudio: { type: String, required: true },
    titulo: { type: String, required: true }
});

const InformacionAcademica = mongoose.model('InformacionAcademica', informacionAcademicaSchema);

export default InformacionAcademica;

