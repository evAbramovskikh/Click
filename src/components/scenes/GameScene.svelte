<!-- src/components/scenes/GameScene.svelte -->
<script lang="ts">
	import { container } from 'tsyringe';
	import { GameService } from '$lib/services/GameService';

	// Разрешаем зависимость из контейнера
	const gameService = container.resolve(GameService);

	// Запускаем игру (например, при инициализации компонента)
	gameService.startGame();
</script>

<main>
	<h1>Игровая сцена</h1>
	<p>Здесь будет ваша игровая логика...</p>
</main>
