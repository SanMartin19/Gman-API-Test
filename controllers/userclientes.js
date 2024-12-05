const { UserClientes } = require('../models/userclientes'); // Importa o modelo UserClientes

// Função auxiliar para capturar erros e enviar uma resposta padronizada
const handleErrorResponse = (res, message, error) => {
  console.error(error); // Log de erro para facilitar a depuração
  return res.status(500).json({ message, error });
};

const ControllerUserClientes = {
  // Controller para listar todos os clientes
  listarUserClientes: async (req, res) => {
    try {
      const clientes = await UserClientes.FindAll(); // Alterado para evitar conflito com o modelo
      return res.status(200).json(clientes); // Retorna os clientes encontrados
    } catch (error) {
      return handleErrorResponse(res, "Erro ao listar clientes", error );
    }
  },

  // Controller para criar um novo cliente
  criaUserClientes: async (req, res) => {
    const { id_cliente, nome_cliente, endereco_cliente, telefone_cliente, login_cliente, email_cliente, cartao_cliente } = req.body;

    try {
      // Criação do novo cliente
      const novoCliente = await UserClientes.create({
        id_cliente,
        nome_cliente,
        endereco_cliente,
        telefone_cliente,
        login_cliente,
        email_cliente,
        cartao_cliente
      });

      // Responde com o cliente criado
      return res.status(201).json(novoCliente); // Alterado para variável mais descritiva
    } catch (error) {
      return handleErrorResponse(res, "Erro ao criar cliente", error);
    }
  },

  // Controller para editar um cliente
  editarUserClientes: async (req, res) => {
    const { id_cliente } = req.params;
    const { nome_cliente, endereco_cliente, telefone_cliente, login_cliente, email_cliente, cartao_cliente } = req.body;

    try {
      // Buscando o cliente pelo ID
      const cliente = await UserClientes.findByPk(id_cliente); // Alterado para variável mais descritiva

      // Verificando se o cliente foi encontrado
      if (!cliente) {
        return res.status(404).json({ message: "Cliente não encontrado!" });
      }

      // Atualizando os dados do cliente
      await UserClientes.update(
        { nome_cliente, endereco_cliente, telefone_cliente, login_cliente, email_cliente, cartao_cliente },
        { where: { id_cliente } }
      );

      return res.status(200).json({ message: "Cliente atualizado com sucesso!" });
    } catch (error) {
      return handleErrorResponse(res, "Erro ao editar cliente", error);
    }
  },

  // Controller para deletar um cliente
  deletarUserClientes: async (req, res) => {
    const { id_cliente } = req.params;

    try {
      // Buscando o cliente pelo ID
      const cliente = await UserClientes.findByPk(id_cliente); // Alterado para variável mais descritiva

      // Verificando se o cliente foi encontrado
      if (!cliente) {
        return res.status(404).json({ message: "Cliente não encontrado!" });
      }

      // Deletando o cliente
      const result = await UserClientes.destroy({
        where: { id_cliente }
      });

      if (result > 0) {
        return res.status(200).json({ message: "Cliente excluído com sucesso!" });
      } else {
        return res.status(404).json({ message: "Erro ao excluir cliente" });
      }
    } catch (error) {
      return handleErrorResponse(res, "Erro ao deletar cliente", error);
    }
  },

  // Controller para buscar um cliente pelo ID
  getUserClientesById: async (req, res) => {
    const { id_cliente } = req.params;

    try {
      const cliente = await UserClientes.findByPk(id_cliente); // Alterado para variável mais descritiva

      // Verificando se o cliente foi encontrado
      if (!cliente) {
        return res.status(404).json({ message: "Cliente não encontrado!" });
      }

      return res.status(200).json(cliente); // Retorna o cliente encontrado
    } catch (error) {
      return handleErrorResponse(res, "Erro ao buscar cliente", error);
    }
  }
};

module.exports = ControllerUserClientes;

