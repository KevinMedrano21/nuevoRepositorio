const express = require('express');
const router = express.Router();
const model = require('../models/datos.js')();
const Cliente = require('../models/datos.js')

router.get('/', async (req, res)=>{
    const datos = await Cliente.find();
    console.log(datos);
    res.render('index.ejs', {
        datos
    });
}); //el get obtiene datos


router.post('/add', async(req, res) => {
    const valor = new Cliente(req.body);
    console.log(req.body);
    await valor.save();
    res.redirect('/');
})

router.get('/del/:id', async(req,res) => {
    const {id} = req.params;
    await Cliente.findByIdAndRemove(id);
    res.redirect('/')
})


router.post('/upd/:id', async(req, res)=>{
    const{id} = req.params;
    const{nombre, apellido, telefono} = req.body;
    await Cliente.findByIdAndUpdate(id, {nombre, apellido, telefono});
    res.redirect('/')
})


module.exports = router;

