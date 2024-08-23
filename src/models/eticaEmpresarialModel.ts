import mongoose from 'mongoose';

const eticaEmpresarialSchema = new mongoose.Schema({
  numeroId: { type: String, required: true },
  empleados: { type: String, required: true },
  proveedores: { type: String, required: true },
  clientesMayoristas: { type: String, required: true },
  autorizacion: { type: Boolean, required: true }
});

const EticaEmpresarial = mongoose.model('EticaEmpresarial', eticaEmpresarialSchema);

export default EticaEmpresarial;
