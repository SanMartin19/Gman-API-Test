const { where } = require("sequelize");
const Funcionarios = require("../models/funcionarios"); // Importa o modelo Funcionarios
// Controller para criar um novo funcionário
const ControllerFuncionarios = {
  listarFuncionarios: async (req, res) => {
    try {
      const funcionarios = await Funcionarios.findAll();
      res.send(funcionarios);
    } catch (error) {}
  },

  criaFuncionario: async (req, res) => {
    try {
      const {
        nome_funcionario,
        funcao_funcionario,
        telefone_funcionario,
        email_funcionario,
        senha_funcionario,
      } = req.body;
      await Funcionarios.create({
        nome_funcionario,
        funcao_funcionario,
        telefone_funcionario,
        email_funcionario,
        senha_funcionario,
      });
      res.redirect("/funcionarios/list");
    } catch (error) {}
  },

  editarFuncionarios: async (req, res) => {
    try {
      const { id_funcionario } = req.params; // Desestruturação do parâmetro
      const {
        nome_funcionario,
        funcao_funcionario,
        telefone_funcionario,
        email_funcionario,
        senha_funcionario,
      } = req.body; // Desestruturação do corpo da requisição

      // Buscando o funcionário pelo ID
      const funcionario = await Funcionarios.findByPk(id_funcionario);

      // Verificando se o funcionário foi encontrado
      if (!funcionario) {
        return res.status(404).json({ message: "Funcionário não encontrado!" });
      }

      // Atualizando os dados do funcionário
      await Funcionarios.update(
        {
          nome_funcionario,
          funcao_funcionario,
          telefone_funcionario,
          email_funcionario,
          senha_funcionario,
        },
        { where: { id_funcionario } } // A cláusula where deve ser um objeto
      );

      // Respondendo com sucesso
      res.status(200).json({ message: "Equipe atualizada com sucesso!" });
    } catch (error) {
      // Respondendo com erro
      res.status(500).send("Erro ao acessar a página: " + error);
    }
  },

  deletarFuncionario: async (req, res) => {
    try {
      // Extrai o 'id_equipe' dos parâmetros da URL.
      const { id_funcionario } = req.params;

      // Busca a equipe correspondente ao 'id_equipe' fornecido.
      const equipe = await Funcionarios.findByPk(id_funcionario);

      // Se a equipe não for encontrada, retorna uma mensagem de erro 404 (não encontrado).
      if (!equipe) {
        return res.status(404).send("Equipe não encontrada!");
      }

      // O método 'destroy()' do Sequelize é usado para excluir a equipe do banco de dados.
      const result = await Funcionarios.destroy({
        where: { id_funcionario },
      });

      if (result > 0) {
        // Enviando um JSON como resposta para confirmar a exclusão
        return res
          .status(200)
          .json({ message: "Equipe excluída com sucesso!" });
      } else {
        // Se por algum motivo a equipe não for excluída, retorna uma mensagem de erro.
        return res.status(404).render("Erro ao excluir Equipe!");
      }
    } catch (error) {
      // Em caso de erro, a mensagem de erro é enviada ao cliente.
      res.send("Erro ao acessar a página:" + error);
    }
  }
}
module.exports = ControllerFuncionarios;
