const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouter = require('./countryRuta');
const activityRouter = require('./activityRuta');

//  const bodyParser = require('body-parser');

const router = Router();

 // router.use(bodyParser.json());
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 router.use('/countries', countryRouter);
 router.use('/activities', activityRouter);


module.exports = router;
