const express = require('express');
const router = express.Router();


const commande = require('../../models/commande');

const commnadeList= [];

router.get('/:id',(req, res)=>{
    const commande = commnadeList.find((commande) => commande.id === req.params.id);
    res.json(commande)
});


  
router.post('/',(req, res)=>{
    const newCommande =new commande(
        req.body.idProduit,
        req.body.quantite,
        req.body.commandePayee

    )
    commnadeList.push(newCommande)
    res.json(newCommande);
    if(newCommande == null){
        console.log("Impossible d'ajouter cette commande");
    }
})
  


module.exports = router ; 