const Pet = require("../models/Pet");
const Client = require("../models/Client");

module.exports = {
  async createPet(req, res) {
    try {
      const { id } = req.params;

      const client = await Client.findById(id);
      if (!client) {
        return res.status(404).json({ msg: "Cliente não encontrado" });
      } else {
        try {
          const pet = new Pet({
            petPicture: req.body.petPicture,
            petName: req.body.petName,
            race: req.body.race,
            size: req.body.size,
            age: req.body.age,
            weight: req.body.weight,
            sex: req.body.sex,
            owner: id,
          });

          pet.save();
          res.json(pet);
        } catch (error) {
          console.log("====================================");
          console.log(error);
          console.log("====================================");
          res.status(500).json({ msg: "Erro ao criar o Pet" });
        }
      }
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Cliente não encontrado" });
    }
  },

  async petList(req, res) {
    try {
      const petList = await Pet.find();
      res.json(petList);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao buscas os Pets" });
    }
  },

  async deletePet(req, res) {
    try {
      const result = await Pet.findByIdAndDelete(req.params.id);
      res.json(result);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao deletar o Pet" });
    }
  },
};
