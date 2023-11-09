import { Model } from 'sequelize';
import db from '.';
import { INTEGER, STRING, DOUBLE } from 'sequelize';

class ProductModel extends Model {
	declare readonly id: number;
	declare name: string;
	declare price: number;
	declare quantity: number;
}

ProductModel.init(
	{
		id: {
			type: INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: STRING,
			allowNull: false,
		},
		price: {
			type: DOUBLE,
		},
		quantity: {
			type: INTEGER,
			allowNull: false,
		}
	},
	{
		underscored: true,
		sequelize: db,
		timestamps: false,
		modelName: 'Product',
		tableName: 'products'
	}
);

export default ProductModel;
