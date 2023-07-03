import Sequelize, { Model } from 'sequelize';

class Teste extends Model {
  static init(sequelize) {
    super.init(
      {
        datai: Sequelize.DATE,
        dataf: Sequelize.DATE,
        signo: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: 'Teste',
        tableName: 'teste',
        timestamps: false, // Desabilita a criação das colunas createdAt e updatedAt
      }
    );

    return this;
  }
}

export default Teste;