import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import actualizarRoutes from './routes/actualizarRoutes';
import experienciaRoutes from './routes/experienciaRoutes';
import hijosRoutes from './routes/hijosRoutes';
import contactosRoutes from './routes/contactosRoutes';
import nucleoFamiliarRoutes from './routes/nucleoFamiliarRoutes'; 
import informacionAcademicaRoutes from './routes/informacionAcademicaRoutes';
import eticaEmpresarialRoutes from './routes/eticaEmpresarialRoutes';
import otrosDocumentosRoutes from './routes/otrosDocumentosRoutes';
import mascotasRoutes from './routes/mascotasRoutes';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/actualizar', actualizarRoutes);
app.use('/experiencia', experienciaRoutes);
app.use('/hijos', hijosRoutes);
app.use('/contactos', contactosRoutes);
app.use('/nucleo-familiar', nucleoFamiliarRoutes);
app.use('/informacion-academica', informacionAcademicaRoutes);
app.use('/etica-empresarial', eticaEmpresarialRoutes); 
app.use('/mascotas', mascotasRoutes);
app.use('/otros-documentos', otrosDocumentosRoutes); 

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/DatosBD')
  .then(() => {
    console.log('Conexión a MongoDB exitosa');
  })
  .catch(err => {
    console.error('Error al conectar a MongoDB:', err);
  });

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

