import { Request, Response } from 'express';
import { CreateRoomHasScheduleUseCase } from './CreateRoomHasScheduleUseCase';
import { IRoomHasScheduleDTO } from '../RoomHasScheduleDTO'
import { RoomHasSchedule } from '../../../../entities/RoomHasSchedule'

class CreateRoomHasScheduleController {
    constructor(
        private createRoomHasScheduleUseCase: CreateRoomHasScheduleUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const {
            fk_id_room,
            fk_id_schedule
        }: IRoomHasScheduleDTO = request.body;

        const room: RoomHasSchedule = await this.createRoomHasScheduleUseCase.execute({
            fk_id_room,
            fk_id_schedule
        });

        return response.status(201).json(room);
    }
}

export { CreateRoomHasScheduleController };