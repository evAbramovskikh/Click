// src/lib/services/LoggerService.ts
import { injectable } from 'tsyringe';

@injectable()
export class LoggerService {
	log(message: string): void {
		console.log('[LoggerService]:', message);
	}
}