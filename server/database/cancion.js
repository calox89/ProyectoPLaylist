var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cancionSchema = new Schema({
     nombre: { type: String, required: true },
    autor: { type: String, required: true },
    tag: { type: String, required: true },
    url: { type: String, required: true },
   
    playlist: { type: Schema.Types.ObjectId, ref: 'Playlist', required: true }
});

module.exports = mongoose.model('Cancion', cancionSchema);