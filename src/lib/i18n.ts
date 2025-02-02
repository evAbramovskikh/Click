// src/lib/i18n.ts
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

// Регистрируем локали с ленивой загрузкой переводов
register('en', () => import('./locales/en.json'));
register('ru', () => import('./locales/ru.json'));

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator()
});
