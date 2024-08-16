'use strict';
module.exports = (sequelize, DataTypes) => {
  const AutenticacaoLogin = sequelize.define('AutenticacaoLogins', {
    login: DataTypes.STRING,
    senha: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
  }, {});
  // AutenticacaoLogin.associate = function(models) {
  //   AutenticacaoLogin.hasMany(models.Pessoas, {
  //     foreignKey: 'pessoa_id'
  //   }) 
  // };
  return AutenticacaoLogin;
};