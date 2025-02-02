// src/lib/di/container.ts
import { container } from 'tsyringe';
import { LoggerService } from '$lib/services/LoggerService';
import { GameService } from '$lib/services/GameService';

// Регистрируем сервисы как singleton (один экземпляр на всё приложение)
container.registerSingleton(LoggerService);
container.registerSingleton(GameService);