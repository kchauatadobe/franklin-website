export function jsx(html, ...args) {
    return html.slice(1).reduce((str, elem, i) => str + args[i] + elem, html[0]);
  }

export default function decorate(block) {
    const link = block.querySelector('a');

    block.innerHTML = jsx`
        <picture>
          <source type="image/webp" srcset="${link}?$rfk_medium$">
          <img class="s7" loading="lazy" alt="..." src="${link}?$rfk_medium$">
        </picture>
    `;
  }
  