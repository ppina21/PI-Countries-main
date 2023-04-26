const { Router } = require("express");


const { getAllCountries, getCountriesById } = require("../controllers/countryController");

const router = Router();

router.get('/', getAllCountries);
router.get('/:id', getCountriesById);




module.exports = router;
