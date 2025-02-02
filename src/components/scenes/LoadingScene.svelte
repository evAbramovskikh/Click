<!-- src/components/scenes/LoadingScene.svelte -->
<script lang="ts">
	import { currentScene } from '$lib/stores/sceneStore';

	// Имитация загрузки: через 2 секунды переключаем сцену на 'game'
	setTimeout(() => {
		currentScene.set({ key: 'game', params: { level: 1, message: 'Начинаем игру!' } });
	}, 2000);
</script>

<main>
	<h1>Загрузка...</h1>
	<p>Пожалуйста, подождите, идет загрузка ресурсов.</p>
</main>
