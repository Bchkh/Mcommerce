
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
  }
function Commande(idProduit, quantite, commandePayee) {

    if (typeof idProduit !== 'string' || idProduit.trim() === '') {
      throw new Error('L\'identifiant du produit doit être une chaîne de caractères non vide.');
    }
    if (typeof quantite !== 'number' || quantite <= 0) {
      throw new Error('La quantité de la commande doit être un nombre positif.');
    }
    if (typeof commandePayee !== 'boolean') {
      throw new Error('Le statut de paiement de la commande doit être un booléen.');
    }
    this.id = generateUniqueId();
    this.idProduit = idProduit;
    this.dateCommande = new Date();
    this.quantite = quantite;
    this.commandePayee = commandePayee;
  }

module.exports = Commande ;