const { where } = require("sequelize");
const ChamadaDeManutencao = require("../models/equipesMNT"); // Importa o modelo ChamadaDeManutencao

// Controller para criar uma nova chamada de manutenção
const ControllerEuqipeMNT = {
  listarEquipeMNT: async (req, res) => {
    try {
      const equipe = await ChamadaDeManutencao.findAll();
      res.send(equipe);
    } catch (error) {
      res.send("Erro : ", error);
    }
  },
  criarEquipeMNT: async (req, res) => {
    const { regiaoEquipe, supervisorEquipe, statusEquipe, numMembrosEquipe } =
      req.body;
    await ChamadaDeManutencao.create({
      regiaoEquipe,
      supervisorEquipe,
      statusEquipe,
      numMembrosEquipe,
    });
    res.redirect("/chamadas/list");
  },
  editarEquipeMNT: async (req, res) => {
    const { id_equipesDeManutencao } = req.params;
    const {
      regiaoEquipe,
      supervisorEquipe,
      statusEquipe,
      numMembrosEquipe} =req.body;
      const equipe = await ChamadaDeManutencao.findByPk(id_equipesDeManutencao);
      if(!equipe){
        return res.status(404).send("Equipe não encontrada!");
      }
      await ChamadaDeManutencao.update({
        regiaoEquipe,
        supervisorEquipe,
        statusEquipe,
        numMembrosEquipe}, {where: {id_equipesDeManutencao}});
        res.status(200).json({ message: "Equipe atualizada com sucesso!" });
  },
  deletarEquipeMNT: async (req,res) =>{
    const {id_equipesDeManutencao} = req.params
    const equipe = await ChamadaDeManutencao.findByPk(id_equipesDeManutencao);
    if (!equipe) {
    return res.status(404).send("Equipe não encontrada!");
  }
  const result = await ChamadaDeManutencao.destroy({
    where: { id_equipesDeManutencao },
  });
  if (result > 0) {
    return res
    .status(200)
    .json({ message: "Equipe excluída com sucesso!" });
  } else {
    return res.status(404).render("Erro ao excluir Equipe!");
  }
}
};
module.exports = ControllerEuqipeMNT;
