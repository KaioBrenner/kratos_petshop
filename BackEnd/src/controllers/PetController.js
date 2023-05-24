const Pet = require('../models/Pet')

module.exports = {

    async createPet(req, res){
        try {
            const pet = new Pet({
                petPicture: req.body.petPicture,
                name: req.body.name,
                race: req.body.race,
                size: req.body.size,
                age: req.body.age,
                weight: req.body.weight,
                sex: req.body.sex,
                owner: req.body.owner
            });
            
            pet.save();
            res.json(pet);
    
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            res.status(500).json({msg: 'Erro ao criar o Pet'})
        }
        

    },

    async petList(req, res){

        try {
            const petList = await Pet.find();
            res.json(petList);
           
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            res.status(500).json({msg:'Erro ao buscas os Pets'})
        }

        
    },

    async deletPet(req, res){
        try {
            const result = await Pet.findByIdAndDelete(req.params.id);
            res.json(result);
        
        } catch (error) {
          console.log('====================================');
          console.log(error);
          console.log('====================================');
          res.status(500).json({msg:"Erro ao deletar o Pet"})
        }
    }

}