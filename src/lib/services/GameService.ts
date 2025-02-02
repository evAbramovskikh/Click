// src/lib/services/GameService.ts
import { injectable, inject } from 'tsyringe';
import { LoggerService } from './LoggerService';

@injectable()
export class GameService {
	constructor(@inject(LoggerService) private logger: LoggerService) {}

	startGame(): void {
		this.logger.log('Игра запущена!');
		// Здесь можно добавить дополнительную логику запуска игры
	}
}
