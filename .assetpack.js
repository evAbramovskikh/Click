// .assetpack.js
import { pixiPipes } from '@assetpack/core/pixi';

/**
 * @typedef {import('@assetpack/core').AssetPackOptions} AssetPackOptions
 * @typedef {import('@assetpack/core/pixi').PixiAssetPack} PixiAssetPack
 */

/**
 * Создаём объект настроек для pixiPipes.
 * Если аудио не используется, можно его опустить или задать как undefined.
 * @type {PixiAssetPack}
 */
const pixiConfig = {
	cacheBust: true,
	resolutions: { default: 1, low: 0.5 },
	compression: { jpg: true, png: true, webp: true },
	manifest: { createShortcuts: true },
};

/**
 * @type {AssetPackOptions}
 */
const config = {
	entry: './raw-assets',
	output: './public/assets',
	pipes: [
		...pixiPipes(pixiConfig)
	],
};

module.exports = config;
