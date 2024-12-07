// controllers/clienteController.js
const clienteModel = require('../models/cliente.js'); // Importando o modelo Cliente

const clienteController = {
    // Listar todos os clientes
    listarClientes: async (req, res) => {
        try {
            const clientes = await clienteModel.findAll(); // Retorna todos os clientes
            res.status(200).json(clientes); // Retorna os clientes em formato JSON
        } catch (error) {
            res.status(500).send("Erro ao listar clientes: " + error); // Caso ocorra algum erro
        }
    },

    // Criar um novo cliente
    criarCliente: async (req, res) => {
        try {
            const { nome_cliente, endereco_cliente, telefone_cliente, email_cliente, login_cliente, cartao_cliente  } = req.body; // Extrai os dados do corpo da requisição

            // Cria um novo cliente
            const cliente = await clienteModel.create({
                nome_cliente,
                endereco_cliente,
                telefone_cliente,
                email_cliente,
                login_cliente,
                cartao_cliente
                
                
            });

            res.status(201).json(cliente); // Retorna o cliente criado
        } catch (error) {
            res.status(500).send("Erro ao criar cliente: " + error); // Caso ocorra algum erro
        }
    },
 
    // Editar um cliente existente
    editarCliente: async (req, res) => {
        try {
            const { id_cliente } = req.params; // ID do cliente passado na URL
            const { nome_cliente, endereco_cliente, telefone_cliente, email_cliente, login_cliente, cartao_cliente  } = req.body; // Dados atualizados do corpo da requisição

            // Busca o cliente pelo ID
            const cliente = await clienteModel.findByPk(id_cliente);

            if (!cliente) {
                return res.status(404).send("Cliente não encontrado!"); // Caso o cliente não exista
            }

            // Atualiza os dados do cliente
            await clienteModel.update({ nome_cliente, endereco_cliente,  telefone_cliente, email_cliente, login_cliente, cartao_cliente  }, { where: { id_cliente } });

            res.status(200).json({ message: "Cliente atualizado com sucesso!" }); // Retorna a mensagem de sucesso
        } catch (error) {
            res.status(500).send("Erro ao atualizar cliente: " + error); // Caso ocorra algum erro
        }
    },

    // Deletar um cliente
    deletarCliente: async (req, res) => {
        try {
            const { id_cliente } = req.params; // ID do cliente passado na URL

            // Busca o cliente pelo ID
            const cliente = await clienteModel.findByPk(id_cliente);

            if (!cliente) {
                return res.status(404).send("Cliente não encontrado!"); // Caso o cliente não exista
            }

            // Deleta o cliente
            await clienteModel.destroy({ where: { id_cliente } });

            res.status(200).json({ message: "Cliente excluído com sucesso!" }); // Retorna a mensagem de sucesso
        } catch (error) {
            res.status(500).send("Erro ao excluir cliente: " + error); // Caso ocorra algum erro
        }
    }
};

module.exports = clienteController;
