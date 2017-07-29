var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var etablissementSchema = new Schema({

  name: {
    type: String,
    required: true
  },

  type: {
    type: Number,
    required: true,
    default: 1
  }
}, { collection: 'etablissement' });

module.exports = mongoose.model('Etablissement', etablissementSchema);
