const gmanModel = require("./mysql.models");
const equipesManutencao = gmanModel.equipesManutencao;
const funcionarioModel = gmanModel.funcionario;
const clienteModel = gmanModel.cliente;

const userController = {
    index: (req, res) => {
        try {
            res.sendFile(path.join(__dirname, "index.html"));
        } catch (error) {
            res.send("Erro ao acessar a pagina:" + error);
        }
    }
};

const teamController = {

    listarEquipesManutencao: async (req, res) => {
        try {
            const equipes = await equipeModel.findAll();

            res.send(equipes);
        } catch (error) {
            res.send("Erro ao acessar a pagina:" + error);
        }
    },

    criarEquipeManutencao: async (req, res) => {
        try {
            const { regiao_equipe, supervisor_equipe, status, num_membros_equipe } = req.body;

            await equipesManutencao.create({ regiao_equipe, supervisor_equipe, status, num_membros_equipe });

            res.redirect("")//criar rota e adicionar ela
        } catch (error) {
            res.send("Erro ao acessar a pagina:" + error);
        }
    },

    editarEquipeManutencao: async (req, res) => {
        try {
            const { id_equipesDeManutencao } = req.params;
            const { regiao_equipe, supervisor_equipe, status, num_membros_equipe } = req.body;

            const equipe = await equipesManutencao.findByPk(id_equipesDeManutencao);

            if (!equipesManutencao) {
                return res.status(404).send("Equipe não encontrada!");
            }

            await equipesManutencao.update(
                { regiao_equipe, supervisor_equipe, status, num_membros_equipe },
                { where: { id_equipesDeManutencao } }
            );
            res.status(200).json({ message: "Equipe atualizada com sucesso!" });
        } catch (error) {
            res.send("Erro ao acessar pagina:" + error);
        }
    },

    deletearEquipeManutencao: async (req, res) => {
    tru {
            const { id_equipesDeManutencao } = req.params;

            const equipe = await equipesManutencao.findByPk(id_equipesDeManutencao);

            if (!equipesManutencao) {
                return res.status(400).send("Equipe nao encontrada!");
            }
            const result = await equipesManutencao.destroy({
                where: { id_equipesDeManutencao },
            });
            if (result > 0) {
                return res
                    .status(200)
                    .json({ message: "Equipe excluida com sucesso!" });
            }
        }catch (error) {
            res.send("Erro ao acessar pagina:" + error);
        }
    }
};

const funcionarioController = {
listarFuncionario: async (req, res) => {
    try {
        const funcionario = await funcionarioModel.findAll();

        res.send(funcionario);
    } catch (erro){

        res.send("Erro ao acessar a pagina:" + error);
    }
},

criarFuncionario: async (req, res) => {
    try {

        const { }
    }
}

}