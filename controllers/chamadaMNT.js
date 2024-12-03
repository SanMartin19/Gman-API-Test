const { ChamadaDeManutencao } = require('../models/equipesMNT'); // Importa o modelo ChamadaDeManutencao

// Controller para criar uma nova chamada de manutenção
exports.createChamadaDeManutencao = async (req, res) => {
  try {
    const chamada = await ChamadaDeManutencao.create({
      tipoDeManutencao: req.body.tipoDeManutencao,
      regiaoCliente: req.body.regiaoCliente,
      dataManutencao: req.body.dataManutencao,
      reagendamentoManutencao: req.body.reagendamentoManutencao,
      pagamentoManutencao: req.body.pagamentoManutencao,
      id_Cliente: req.body.id_Cliente,
      id_equipeManu: req.body.id_equipeManu
    });

    return res.status(201).json(chamada); // Retorna a chamada criada
  } catch (error) {
    return res.status(500).json({ message: "Erro ao criar chamada de manutenção", error });
  }
};

// Controller para buscar todas as chamadas de manutenção
exports.getAllChamadas = async (req, res) => {
  try {
    const chamadas = await ChamadaDeManutencao.findAll();
    return res.status(200).json(chamadas);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao buscar chamadas de manutenção", error });
  }
};

// Controller para buscar uma chamada de manutenção por id
exports.getChamadaById = async (req, res) => {
  try {
    const chamada = await ChamadaDeManutencao.findByPk(req.params.id);
    if (!chamada) {
      return res.status(404).json({ message: "Chamada de manutenção não encontrada" });
    }
    return res.status(200).json(chamada);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao buscar chamada de manutenção", error });
  }
};

// Controller para atualizar uma chamada de manutenção
exports.updateChamadaDeManutencao = async (req, res) => {
  try {
    const chamada = await ChamadaDeManutencao.update(req.body, {
      where: { id_manutencao: req.params.id }
    });

    if (chamada[0] === 0) {
      return res.status(404).json({ message: "Chamada de manutenção não encontrada" });
    }

    return res.status(200).json({ message: "Chamada de manutenção atualizada com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao atualizar chamada de manutenção", error });
  }
};

// Controller para deletar uma chamada de manutenção
exports.deleteChamadaDeManutencao = async (req, res) => {
  try {
    const chamada = await ChamadaDeManutencao.destroy({
      where: { id_manutencao: req.params.id }
    });

    if (chamada === 0) {
      return res.status(404).json({ message: "Chamada de manutenção não encontrada" });
    }

    return res.status(200).json({ message: "Chamada de manutenção deletada com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao deletar chamada de manutenção", error });
  }
};
