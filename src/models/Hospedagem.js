const mongoose = require('mongoose');
const HospedagemSchema = new mongoose.Schema({
    data: String,
    confirmacao: Boolean,
    usuario : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    passeio : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Passeio'
    }
});
module.exports = mongoose.model('Hospedagem', HospedagemSchema);