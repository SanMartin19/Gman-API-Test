const { Funcionario } = require('../models'); // Importa o modelo Funcionario

// Controller para criar um novo funcionário
exports.createFuncionario = async (req, res) => {
  try {
    const funcionario = await Funcionario.create({
      nome_funcionario: req.body.nome_funcionario,
      cargo_funcionario: req.body.cargo_funcionario,
      salario_funcionario: req.body.salario_funcionario,
      data_contratacao: req.body.data_contratacao,
      telefone_funcionario: req.body.telefone_funcionario,
      email_funcionario: req.body.email_funcionario,
      endereco_funcionario: req.body.endereco_funcionario,
      status_funcionario: req.body.status_funcionario || 'ativo', // Default para 'ativo' se não informado
    });

    return res.status(201).json(funcionario); // Retorna o funcionário criado
  } catch (error) {
    return res.status(500).json({ message: "Erro ao criar funcionário", error });
  }
};

// Controller para buscar todos os funcionários
exports.getAllFuncionarios = async (req, res) => {
  try {
    const funcionarios = await Funcionario.findAll();
    return res.status(200).json(funcionarios);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao buscar funcionários", error });
  }
};

// Controller para buscar um funcionário por ID
exports.getFuncionarioById = async (req, res) => {
  try {
    const funcionario = await Funcionario.findByPk(req.params.id);
    if (!funcionario) {
      return res.status(404).json({ message: "Funcionário não encontrado" });
    }
    return res.status(200).json(funcionario);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao buscar funcionário", error });
  }
};

// Controller para atualizar um funcionário
exports.updateFuncionario = async (req, res) => {
  try {
    const funcionario = await Funcionario.update(req.body, {
      where: { id_funcionario: req.params.id }
    });

    if (funcionario[0] === 0) {
      return res.status(404).json({ message: "Funcionário não encontrado" });
    }

    return res.status(200).json({ message: "Funcionário atualizado com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao atualizar funcionário", error });
  }
};

// Controller para deletar um funcionário
exports.deleteFuncionario = async (req, res) => {
  try {
    const funcionario = await Funcionario.destroy({
      where: { id_funcionario: req.params.id }
    });

    if (funcionario === 0) {
      return res.status(404).json({ message: "Funcionário não encontrado" });
    }

    return res.status(200).json({ message: "Funcionário deletado com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao deletar funcionário", error });
  }
};
