const express = require('express');
const router = express.Router();

const produit= require('../../models/produit');

router.get('/',(req, res)=>{
    produit.find()
           .then(produit=>res.json(produit))
    if(produit == null){
        console.log("Aucun produit n'est disponible à la vente");
    }
});
router.get('/:id',(req, res)=>{
    produit.findById(req.params.id)
           .then(produit=>res.json(produit))
    if(produit == null){
        console.log("Le produit correspondant à l'id " + id + " n'existe pas");
    }
});



module.exports = router ; 