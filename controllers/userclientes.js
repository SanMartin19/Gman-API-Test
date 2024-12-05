const { Funcionario } = require('../models'); // Importa o modelo Funcionario

// Função auxiliar para capturar erros e enviar uma resposta padronizada
const handleErrorResponse = (res, message, error) => {
  console.error(error); // Log de erro para facilitar a depuração
  return res.status(500).json({ message, error });
};

const ControllerFuncionarios = {
  // Controller para listar todos os funcionários
  listarFuncionarios: async (req, res) => {
    try {
      const funcionarios = await Funcionario.findAll();
      return res.status(200).json(funcionarios); // Retorna os funcionários encontrados
    } catch (error) {
      return handleErrorResponse(res, "Erro ao listar funcionários", error);
    }
  },

  // Controller para criar um novo funcionário
  criaFuncionario: async (req, res) => {
    const { nome_funcionario, cargo_funcionario, salario_funcionario, data_contratacao, telefone_funcionario, email_funcionario, endereco_funcionario, status_funcionario = 'ativo' } = req.body;

    try {
      // Criação do novo funcionário
      const funcionario = await Funcionario.create({
        nome_funcionario,
        cargo_funcionario,
        salario_funcionario,
        data_contratacao,
        telefone_funcionario,
        email_funcionario,
        endereco_funcionario,
        status_funcionario
      });

      // Responde com o funcionário criado
      return res.status(201).json(funcionario);
    } catch (error) {
      return handleErrorResponse(res, "Erro ao criar funcionário", error);
    }
  },

  // Controller para editar um funcionário
  editarFuncionario: async (req, res) => {
    const { id_funcionario } = req.params;
    const { nome_funcionario, cargo_funcionario, salario_funcionario, data_contratacao, telefone_funcionario, email_funcionario, endereco_funcionario, status_funcionario } = req.body;

    try {
      // Buscando o funcionário pelo ID
      const funcionario = await Funcionario.findByPk(id_funcionario);

      // Verificando se o funcionário foi encontrado
      if (!funcionario) {
        return res.status(404).json({ message: "Funcionário não encontrado!" });
      }

      // Atualizando os dados do funcionário
      await Funcionario.update(
        { nome_funcionario, cargo_funcionario, salario_funcionario, data_contratacao, telefone_funcionario, email_funcionario, endereco_funcionario, status_funcionario },
        { where: { id_funcionario } }
      );

      return res.status(200).json({ message: "Funcionário atualizado com sucesso!" });
    } catch (error) {
      return handleErrorResponse(res, "Erro ao editar funcionário", error);
    }
  },

  // Controller para deletar um funcionário
  deletarFuncionario: async (req, res) => {
    const { id_funcionario } = req.params;

    try {
      // Buscando o funcionário pelo ID
      const funcionario = await Funcionario.findByPk(id_funcionario);

      // Verificando se o funcionário foi encontrado
      if (!funcionario) {
        return res.status(404).json({ message: "Funcionário não encontrado!" });
      }

      // Deletando o funcionário
      const result = await Funcionario.destroy({
        where: { id_funcionario }
      });

      if (result > 0) {
        return res.status(200).json({ message: "Funcionário excluído com sucesso!" });
      } else {
        return res.status(404).json({ message: "Erro ao excluir funcionário" });
      }
    } catch (error) {
      return handleErrorResponse(res, "Erro ao deletar funcionário", error);
    }
  },

  // Controller para buscar um funcionário pelo ID
  getFuncionarioById: async (req, res) => {
    const { id_funcionario } = req.params;

    try {
      const funcionario = await Funcionario.findByPk(id_funcionario);

      // Verificando se o funcionário foi encontrado
      if (!funcionario) {
        return res.status(404).json({ message: "Funcionário não encontrado!" });
      }

      return res.status(200).json(funcionario);
    } catch (error) {
      return handleErrorResponse(res, "Erro ao buscar funcionário", error);
    }
  }
};

module.exports = ControllerFuncionarios;

