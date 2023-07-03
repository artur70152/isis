import moment from 'moment';
import { Model, DataTypes } from 'sequelize';

class Sign extends Model {
  static init(sequelize) {
    super.init(
      {
        datai: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        dataf: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        signo: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      { sequelize,  timestamps: false}
    );

    

    return this;
  }
}

export default Sign;