const express = require('express');
const router = express.Router();


const paiement = require('../../models/paiement');

const paiementList= [];

router.post('/', (req, res) => {
  const newPaiement =new paiement(
    req.body.idCommande,
    req.body.montant,
    req.body.numeroCarte

)
paiementList.push(newPaiement);
res.json(newPaiement)
if(newPaiement == null){
    console.log("Impossible de payer cette commande");
}
  });
  


module.exports = router ; 