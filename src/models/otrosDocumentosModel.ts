 import mongoose, { Schema } from 'mongoose';

 const OtroDocumentoSchema: Schema = new Schema({
  numeroId: { type: String, required: true },
  libreta: { type: Boolean, required: true },
  numeroLibreta: { type: String },
  fechaExpedicion: { type: String },
  categoriaLicencia: { type: String },
  numeroLicencia: { type: String },
  fechaVencimiento: { type: String }
});

export default mongoose.model('OtroDocumento', OtroDocumentoSchema); 
