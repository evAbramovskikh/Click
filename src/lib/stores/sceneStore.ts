import { writable } from 'svelte/store';

export interface SceneState {
	key: 'loading' | 'game' | string;
	params?: Record<string, any>;
}

export const currentScene = writable<SceneState>({ key: 'loading', params: {} });