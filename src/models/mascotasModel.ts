import mongoose from 'mongoose';

const mascotaSchema = new mongoose.Schema({
    numeroId: { type: String, required: true },
    tipoMascota: { type: String, required: true },
    nombreMascota: { type: String },
    especificarMascota: { type: String }
});

const Mascota = mongoose.model('Mascota', mascotaSchema);

export default Mascota;
