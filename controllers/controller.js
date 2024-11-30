const {Cliente , EquipesDeManutencao ,Funcionarios} = require("../models/sync");
const path = require("path");


const userController = {
    index: (req, res) => {
        try {
            res.sendFile(path.join(__dirname, "index.html"));
        } catch (error) {
            res.status(500).send("Erro ao acessar a página: " + error);
        }
    },
};

const teamController = {
    listarEquipesDeManutencao: async (req, res) => {
        try {
            const equipes = await EquipesDeManutencao.findAll();
            res.status(200).send(equipes);
        } catch (error) {
            res.status(500).send("Erro ao acessar a página: " + error);
        }
    },

    criarEquipeManutencao: async (req, res) => {
        try {
            const { regiao_equipe, supervisor_equipe, status, num_membros_equipe } = req.body;
            await EquipesDeManutencao.create({ regiao_equipe, supervisor_equipe, status, num_membros_equipe });
            res.redirect("/listarEquipes");
        } catch (error) {
            res.status(500).send("Erro ao acessar a página: " + error);
        }
    },

    editarEquipeManutencao: async (req, res) => {
        try {
            const { id_equipesDeManutencao } = req.body;
            const { regiao_equipe, supervisor_equipe, status, num_membros_equipe } = req.body;

            const equipe = await EquipesDeManutencao.findByPk(id_equipesDeManutencao);
            if (!equipe) {
                return res.status(404).send("Equipe não encontrada!");
            }

            await EquipesDeManutencao.update(
                { regiao_equipe, supervisor_equipe, status, num_membros_equipe },
                { where: { id_equipesDeManutencao } }
            );
            res.status(200).json({ message: "Equipe atualizada com sucesso!" });
        } catch (error) {
            res.status(500).send("Erro ao acessar a página: " + error);
        }
    },

    deletarEquipeManutencao: async (req, res) => {
        try {
            const { id_equipesDeManutencao } = req.body;

            const equipe = await EquipesDeManutencao.findByPk(id_equipesDeManutencao);
            if (!equipe) {
                return res.status(404).send("Equipe não encontrada!");
            }

            const result = await EquipesDeManutencao.destroy({ where: { id_equipesDeManutencao } });
            if (result > 0) {
                res.status(200).json({ message: "Equipe excluída com sucesso!" });
            } else {
                res.status(400).send("Erro ao excluir equipe!");
            }
        } catch (error) {
            res.status(500).send("Erro ao acessar a página: " + error);
        }
    },
};
// 



const funcionarioController = {
    listarFuncionario: async (req, res) => {
        try {
            const funcionarios = await Funcionarios.findAll();
            res.status(200).send(funcionarios);
        } catch (error) {
            res.status(500).send("Erro ao acessar a página: " + error);
        }
    },

    criarFuncionario: async (req, res) => {
        try {
            const { id, nome, cargo, funcionario_email, funcionario_senha, funcionario_telefone, data_admissao } = req.body;
            await Funcionarios.create({ id, nome, cargo, funcionario_email, funcionario_senha, funcionario_telefone, data_admissao });
            res.redirect("/listarFuncionarios");
        } catch (error) {
            res.status(500).send("Erro ao acessar a página: " + error);
        }
    },

    editarFuncionarios: async (req, res) => {
        try {
            const { id } = req.body;
            const { nome, cargo, funcionario_email, funcionario_senha, funcionario_telefone, data_admissao } = req.body;

            const funcionario = await Funcionarios.findByPk(id);
            if (!funcionario) {
                return res.status(404).send("Funcionário não encontrado!");
            }

            await Funcionarios.update(
                { nome, cargo, funcionario_email, funcionario_senha, funcionario_telefone, data_admissao },
                { where: { id } }
            );
            res.status(200).json({ message: "Funcionário atualizado com sucesso!" });
        } catch (error) {
            res.status(500).send("Erro ao acessar a página: " + error);
        }
    },

    deletarFuncionario: async (req, res) => {
        try {
            const { id } = req.body;
            const funcionario = await Funcionarios.findByPk(id);

            if (!funcionario) {
                return res.status(404).send("Funcionário não encontrado!");
            }

            const result = await Funcionarios.destroy({ where: { id } });
            if (result > 0) {
                res.status(200).json({ message: "Funcionário excluído com sucesso!" });
            } else {
                res.status(400).send("Erro ao excluir funcionário!");
            }
        } catch (error) {
            res.status(500).send("Erro ao acessar a página: " + error);
        }
    },
};

const clienteController = {
    listarCliente: async (req, res) => {
        try {
            const clientes = await Cliente.findAll();
            res.status(200).send(clientes);
        } catch (error) {
            res.status(500).send("Erro ao acessar a página: " + error);
        }
    },

    criarCliente: async (req, res) => {
        try {
            const { username, email, cliente_senha, cliente_telefone, cliente_endereco, cliente_cartao } = req.body;
            await Cliente.create({ username, email, cliente_senha, cliente_telefone, cliente_endereco, cliente_cartao });
            res.redirect("/listarClientes");
        } catch (error) {
            res.status(500).send("Erro ao acessar a página: " + error);
        }
    },

    editarCliente: async (req, res) => {
        try {
            const { username } = req.body;
            const { email, cliente_senha, cliente_telefone, cliente_endereco, cliente_cartao } = req.body;

            const cliente = await Cliente.findByPk(username);
            if (!cliente) {
                return res.status(404).send("Cliente não encontrado!");
            }

            await Cliente.update(
                { email, cliente_senha, cliente_telefone, cliente_endereco, cliente_cartao },
                { where: { username } }
            );
            res.status(200).json({ message: "Cliente atualizado com sucesso!" });
        } catch (error) {
            res.status(500).send("Erro ao acessar a página: " + error);
        }
    },

    deletarCliente: async (req, res) => {
        try {
            const { username } = req.body;
            const cliente = await Cliente.findByPk(username);

            if (!cliente) {
                return res.status(404).send("Cliente não encontrado!");
            }

            const result = await Cliente.destroy({ where: { username } });
            if (result > 0) {
                res.status(200).json({ message: "Cliente excluído com sucesso!" });
            } else {
                res.status(400).send("Erro ao excluir cliente!");
            }
        } catch (error) {
            res.status(500).send("Erro ao acessar a página: " + error);
        }
    },
};

module.exports = { funcionarioController, teamController, clienteController };
