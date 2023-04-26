const { Country, Activity } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");


const getAllCountries = async (req, res) => {
    
    const { name } = req.query;
    const countryDBB = await Country.count();

    try {
       
        if (!countryDBB) {
            const countriesApiGet = await axios.get("https://restcountries.com/v3.1/all")
            const apiCountries =  countriesApiGet.data.map(pais => {
                return {
                     id: pais.cca3,
                     name: pais.name.common,
                     flags: pais.flags.png,
                     continents: pais.continents,
                     capital: pais.capital ? pais.capital : "Sin Datos",
                     subregion: pais.subregion,
                     area: pais.area,
                     population: pais.population,
                }
            })
            await Country.bulkCreate(apiCountries); 
        } else if (name) {
            const countryName = await Country.findAll({
                where: {
                     name:  { [Op.iLike]: `%${name}%` }
                }
            })
            countryName ?
                res.status(200).json(countryName) :
                res.status(404).json(`El pais con el nombre:${name} no se encontro`);
        } else {
            const allCountrys = await Country.findAll()
            res.status(200).json(allCountrys);
        };
           
    } catch (error) {
        return res.status(404).json(error)
    }  
}


const getCountriesById = async (req, res) => {
    const { id } = req.params;
    const idUpper = id.toUpperCase();
    const countryId = await Country.findOne({where: {id: idUpper}, include: Activity })
    countryId ?
        res.status(200).json(countryId) :
        res.status(404).json(`El pais con el id:${id} no se encontro`);
}





module.exports = { getAllCountries, getCountriesById,};


