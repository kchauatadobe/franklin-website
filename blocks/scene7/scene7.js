export function jsx(html, ...args) {
    return html.slice(1).reduce((str, elem, i) => str + args[i] + elem, html[0]);
  }

export default function decorate(block) {
    const link = block.querySelector('a');

    block.innerHTML = jsx`
        <img loading="lazy" class="s7" src="
        ${link}?$rfk_medium$
        " type="image/webp">
    `;
  }
  