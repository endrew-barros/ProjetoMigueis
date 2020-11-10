const Reservas = require('../models/Hospedagem');
module.exports = {
    //     index (req, res){},
    // show(){},
    async store(req, res) {
        const { pid } = req.params;
        const { usuario_id } = req.headers;
        const { data } = req.body;
        const hospedagem = await Reservas.create({
            usuario: usuario_id,
            passeio: pid,
            data
        });
        
        await hospedagem.populate('usuario').populate('passeio').execPopulate();
        return res.json(hospedagem);
    }
}