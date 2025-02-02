<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { onDestroy } from 'svelte';
	import { currentScene, type SceneState } from '$lib/stores/sceneStore';
	import '$lib/di/setupDI';

	// Импортируем компоненты-сцены
	import LoadingScene from '$components/scenes/LoadingScene.svelte';
	import GameScene from '$components/scenes/GameScene.svelte';
	// При необходимости можно добавить другие сцены, например, MenuScene и т.д.

	// Маппинг сцен: ключ -> соответствующий компонент
	const sceneMapping: Record<string, any> = {
		loading: LoadingScene,
		game: GameScene,
		// Добавьте новые сцены по мере необходимости
	};

	let scene: SceneState;

	// Подписываемся на store для получения текущей сцены
	const unsubscribe = currentScene.subscribe(value => {
		scene = value;
	});

	onDestroy(unsubscribe);
</script>

<!-- Используем динамический компонент -->
<svelte:component this={sceneMapping[scene.key] || LoadingScene} {scene} />