import { derived } from 'svelte/store';
import settings from './settings';
import location from './location';

const direction = derived(
    [settings, location],
    ([$settings, $location], set) => {
        const timer = setTimeout(() => {
            set($settings.language === 'ar' ? 'rtl' : 'lrt');
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    },
    'not decided'
);

export default direction;
