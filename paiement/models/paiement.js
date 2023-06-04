
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
  }
function Paiement(idCommande, montant, numeroCarte) {
    if (typeof idCommande !== 'string' || idCommande.trim() === '') {
      throw new Error('L\'identifiant de la commande doit être une chaîne de caractères non vide.');
    }
    if (typeof montant !== 'number' || montant <= 0) {
      throw new Error('Le montant du paiement doit être un nombre positif.');
    }
    if (typeof numeroCarte !== 'number' || isNaN(numeroCarte) || numeroCarte <= 0) {
      throw new Error('Le numéro de carte doit être un nombre positif valide.');
    }
    this.id = generateUniqueId();
    this.idCommande = idCommande;
    this.montant = montant;
    this.numeroCarte = numeroCarte;
  }

module.exports = Paiement ;