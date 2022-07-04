import { Request, Response } from 'express';
import { ShowRoomUseCase } from './ShowRoomUseCase';
import { Room } from '../../../../entities/Room'

class ShowRoomController{
    constructor(
        private showRoomUseCase: ShowRoomUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const instituteId = request.body.tokenInstitute;
        const userId = request.body.tokenId;
        const room : Room[] = await this.showRoomUseCase.execute(instituteId, userId);
        if (room !== null) return response.status(200).json(room);
        return response.status(404).send("Erro ao buscar salas");
    }
}

export { ShowRoomController };