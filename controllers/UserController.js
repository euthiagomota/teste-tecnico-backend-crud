require('dotenv').config()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


class UserController {
    static async register(req, res) {
        const { name, email, password, confirmpassword, birthdate } = req.body

        if (!name) {
            return res.status(422).json({ msg: "O nome é obrigatório!" });
        }

        if (!email) {
            return res.status(422).json({ msg: "O email é obrigatório!" });
        }

        if (!password) {
            return res.status(422).json({ msg: "A senha é obrigatória!" });
        }

        if (password != confirmpassword) {
            return res.status(422).json({ msg: "A senha e a confirmação precisam ser iguais!" });
        }

        if (!birthdate) {
            return res.status(422).json({ msg: "A data de nascimento é obrigatória!" });
        }


        const userExists = await User.findOne({ email: email })

        if (userExists) {
            return res.status(422).json({ msg: "Por favor, utilize outro e-mail!" })
        }


        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)


        const user = new User({
            name,
            email,
            password: passwordHash,
            birthdate
        })
        try {
            await user.save()
            res.status(201).json({ msg: "Usuário criado com sucesso!" })
        } catch (error) {

            return res.status(500).json({ msg: "Acoceu um erro no servidor, tente novamente mais tarde" })

        }
    }


    static async findAllUsers(req, res) {
        const { limit, offset } = req.query
        const accounts = await User.find().limit(limit).skip(offset)

        return res.json(accounts)
    }


    static async delete(req, res) {
        const { id } = req.params
        try {
            await User.findByIdAndDelete(id)
            res.json({ msg: "Usuário deletado com sucesso!" })
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao excluir o usuário.' })
        }
    }


    static async update(req, res) {
        const { id } = req.params
        const { name, email, password, birthdate, confirmpassword, oldpassword } = req.body

        if (password != confirmpassword) {
            return res.status(422).json({ msg: "A senha e a confirmação precisam ser iguais!" });
        }

        const useralrearyexists = await User.findById(id)

        const fps = await bcrypt.compare(oldpassword, useralrearyexists.password)
        console.log(useralrearyexists)
        if (!fps) {
            return res.status(404).json({ msg: "A senha antiga não é igual a atual." })
        }

        const passwordHash = await bcrypt.hash(password, 10)

        try {
            await User.findByIdAndUpdate(id, {
                name,
                email,
                password: passwordHash,
                birthdate

            })
            return res.status(200).json({ msg: "Usuário atualizado com sucesso!" })
        }
        catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Erro ao atualizar o usuário." })
        }
    }


    static async login(req, res) {

        const { email, password } = req.body;

        if (!email) {
            return res.status(422).json({ msg: "O email é obrigatório!" });
        }

        if (!password) {
            return res.status(422).json({ msg: "A senha é obrigatória!" });
        }


        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ msg: "Usuário não encontrado!" });
        }


        const pass = await bcrypt.compare(password, user.password);

        if (!pass) return res.status(422).json({ msg: "Senha inválida!" });


        try {
            const token = jwt.sign({userId:user.id},process.env.JWT_SECRET )
            res.status(201).json({ msg: "Usuário autenticado com sucesso!", token:token})
        } catch (error) {

            return res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde" });

        }
    }


}



module.exports = UserController