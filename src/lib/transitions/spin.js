import { transform } from "svelte-preprocess/dist/autoProcess";
import { cubicInOut } from "svelte/easing";

export default function spin(node, {delay=0, duration=400, easing=cubicInOut, spin=1}) {
    const originalTransform = getComputedStyle(node).transform.replace("none", "");
    return {
        delay,
        duration, 
        easing,
        css: (t) => {
            return `
            transform: ${originalTransform} scale(${t}) rotate(${spin * 360 * t}deg)
            `
        }
    }
}