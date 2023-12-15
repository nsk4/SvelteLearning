import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

/*
export default {
    preprocess: vitePreprocess({
        preprocess: sveltePreprocess({
            scss: {}
        })
    })
};
*/
/*
export default {
  preprocess: vitePreprocess()
};
*/
export default {
    preprocess: sveltePreprocess({
        scss: {}
    })
};
