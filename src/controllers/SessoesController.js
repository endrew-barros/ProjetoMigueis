const Usuario = require('../models/Usuarios')
module.exports = {
    //     index (){},
    // show(){},
    async store(req, res) {
        const { email } = req.body;
        let usuario = await Usuario.findOne({ email });
        if (!usuario) {
            const usuario = await Usuario.create({ email });
        }
        return res.json(usuario)
    },
    //     update(){},
    //     destroy(){},
}