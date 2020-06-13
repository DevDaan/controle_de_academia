const fs = require('fs')
const data = require('../data.json')

const instructorController = {
    viewIndex: (req, res) =>{
        res.render('instructors/index')
    },

    viewFormInstructor: (req, res) =>{
        res.render('instructors/create')
    },

    createInstructor: (req, res) =>{
        
        //tansforma o req.body em um array com os names dos inputs
        const keys = Object.keys(req.body)

        for (let key of keys){
            //o comano abaixo é a mesma coisa que req.body.avatar_url
            if (req.body[key] ==""){
                res.send("Please, fill al fields")
            }
        }



        let {avatar_url, birth, name, services, gender} = req.body


        //transformando a string de data em date
        birth = Date.parse(req.body.birth)
        //criando a funcionalidade do desde, para inserir quando uma pessoa se cadastrou
        const created_at = Date.now()
        //CRIANDO UM CAMPO ID PARA IDENTIFICAR OS DADOS CADASTRADOS
        const id = Number(data.instructors.length + 1)
        

        //criando um array para armazenar as informações
        // [] 
        data.instructors.push({
            id,
            avatar_url,
            name,
            birth,
            gender,
            services,
            created_at
        }) //[...]


        //criando um arquivo para armazenar os dados obtidos do formulário
        fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err){
            if(err) return res.send("Write file error")

            return res.redirect('/instructors')
        })
    },

    viewInstructors: (req, res) =>{

        let {id} = req.params
        //validando se o ID passado no req.params existe no data.json como um instrutor cadastrado
        const foundInstructor = data.instructors.find((instructor) =>{
            return id == instructor.id  
        })
        //se eu não achar um instrutor
        if (!foundInstructor){
            return res.send("Instructor nof found!")
        }



        //criando a lógica para arrumar a idade
        function age(timestamp){
            const atualDate = new Date()
            const birthDate = new Date(timestamp)
            
            let age = atualDate.getFullYear() - birthDate.getFullYear()

            const month = atualDate.getMonth() - birthDate.getMonth()

            if (month < 0 || month == 0){}


        }


        //tratandos os dados que não estão aparecendo legal na view
        const instructor = {
            ...foundInstructor,
            age: age(foundInstructor.birth),
            services: foundInstructor.services.split(","),
            created_at: "",
        }


        return res.render("instructors/show", {instructor})
    },

    viewMembers: (req, res) =>{
        res.render('members')
    }

}



module.exports = instructorController