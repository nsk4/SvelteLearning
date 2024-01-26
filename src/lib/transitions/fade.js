import { transform } from "svelte-preprocess/dist/autoProcess";
import { cubicInOut } from "svelte/easing";

export default function fade(node, {delay=0, duration=400, easing=cubicInOut}) {
    const originalOpacity = +getComputedStyle(node).opacity;
    const originalTransform = getComputedStyle(node).transform.replace("none", "");
    return {
        delay,
        duration, 
        easing,
        tick: (t) => {
            node.style.opacity = t * originalOpacity;
        }
    }
}