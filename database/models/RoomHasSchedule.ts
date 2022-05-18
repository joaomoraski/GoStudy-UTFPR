import { connection } from '../../src/connectDB';
import { DataTypes } from 'sequelize';

const RoomHasSchedule = connection.define('roomHasSchedule', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fk_id_room: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fk_id_schedule: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

export { RoomHasSchedule };