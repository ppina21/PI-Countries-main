const { Router } = require("express");
const {Country, Activity} = require("../db")

const router = Router();

const {  createActivity, updateActivity } = require("../controllers/activityController");


router.get('/', async (req, res) => {
    try {
       const allActivities = await Activity.findAll({
          include: Country
       })
       res.status(200).json(allActivities)
    } catch (error) {
       res.status(400).json({ error: "No se encontraron actividades" })
    }
 
 });


router.post("/", async (req,res,next) => {
    try {
        const response = await createActivity(req.body);
        res.status(201).json({
            status: 'has been created succefully'
        })
    
    } catch (error) {
        
        res.status(400).json({error: error.message})
        next(error)
    }
})


module.exports = router;