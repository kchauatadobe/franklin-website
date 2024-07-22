export function jsx(html, ...args) {
    return html.slice(1).reduce((str, elem, i) => str + args[i] + elem, html[0]);
  }

export default function decorate(block) {
    const link = block.querySelector('a');
    block.innerHTML = jsx`
        <picture>
            <source sizes="352.25px" 
                srcset="${link}=/w/150?typ=webp 150w,${link}/w/300?typ=webp 300w,${link}/w/450?typ=webp 450w,${link}/w/600?typ=webp 600w" type="image/webp">
            <img alt="..." 
                src="https://edge.curalate.com/sites/anntaylor-wcpeme/experiences/custom-carousel-1597850128186/assets/imagePlaceholder.png">
        </picture>
    `;
  }
  