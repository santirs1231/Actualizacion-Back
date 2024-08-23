import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  tipoId: String,
  numeroId: { type: String, unique: true, required: true },
  primerNombre: String,
  segundoNombre: String,
  primerApellido: String,
  segundoApellido: String,
  fechaNacimiento: Date,
  paisNacimiento: String,
  departamentoNacimiento: String,
  ciudadNacimiento: String,
  fechaExpedicionId: Date,
  paisExpedicionId: String,
  departamentoExpedicionId: String,
  ciudadExpedicionId: String,
  grupoSanguineo: String,
  genero: String,
  estadoCivil: String,
  tenenciaVivienda: String,
  tipoVivienda: String,
  medioTransporte: String,
  telefono: String,
  celular: String,
  correo: String,
  redes: String,
  direccion: String,
  ciudadResidencia: String,
  paisResidencia: String,
  departamentoResidencia: String,
  barrio: String,
  estratoVivienda: String,
  ocupacion: String,
  paisTrabajo: String,
  ciudadTrabajo: String,
  departamentoTrabajo: String,
  compania: String,
  cargo: String,
  correoCorporativo: String,
  personasHogar: String,
  orientacionSexual: String,
  pertenenciaEtnica: String,
  condicionVulnerable: String,
  redesSociales: {
    facebook: String,
    instagram: String,
    twitter: String,
    linkedin: String
  }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;

