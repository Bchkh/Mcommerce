const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produitSchema = new Schema ({

    
    titre: {
        type:String,
        required:true
    },
    
    description: {
        type:String,
        required:true
    },
    img: {
        type:String,
        required:true
    },
    prix: {
        type:Number,
        required:true
    },
    

});

module.exports = produit = mongoose.model('produit',produitSchema);