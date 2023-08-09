const { DataTypes} = require('sequelize')
module.exports = (sequelize) => {
	sequelize.define(
		'Pokemon',
		{
			ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			Nombre: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: false,
			},
			Imagen: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Vida: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			Ataque: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			Defensa: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			Velocidad: {
				type: DataTypes.STRING,
			},
			Altura: {
				type: DataTypes.STRING,
			},
			Peso: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	)
}