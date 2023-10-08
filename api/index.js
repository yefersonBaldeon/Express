const express = require('express');
const app = express();

const cors = require('cors');
const RouterApi = require('./router/index');

// Obtiene el puerto del entorno o utiliza el puerto 3000 como valor predeterminado.
const puerto = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


RouterApi(app);
app.get('/api/v1', (req, res) => {
  res.send('Hola, mundo!');
});

app.listen(puerto, () => {
  console.log(`Servidor en ejecución en http://localhost:${puerto}/`);
});


