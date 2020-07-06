const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let RootsSchema = new Schema ({
    rootId: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    altNames: {
        Type: Array
    },

    desc: {
        type: String,
        required: true
    },

    price: {
        type: String
    },

    family: {
        type: String
    },

    harvesting: {
        type: String
    },

    partsUsed: {
        type: String
    },

    planting: {
        type: String
    },

    references: {
        type: String
    },

    demand: {
        type: Number
    },
    
    imageLink: {
        type: String
    }
  
});

let Roots = mongoose.model("Roots", RootsSchema, "Roots");

module.exports = Roots;