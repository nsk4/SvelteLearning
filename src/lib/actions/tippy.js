import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

// Anonimous function name to prevent collision with tippy import.
export default function (node, options) {
    const instance = tippy(node, options);
    return {
        update(newOptions) {
            instance.setProps(newOptions)
        },
        destroy() {
            instance.destroy();
        }
    }
}

    