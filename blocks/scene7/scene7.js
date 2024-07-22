export function jsx(html, ...args) {
    return html.slice(1).reduce((str, elem, i) => str + args[i] + elem, html[0]);
  }

export default function decorate(block) {
    const link = block.querySelector('a');
    console.debug(link)
    block.innerHTML = jsx`
        <img class="s7" src="
        ${link}
        " itemprop="image">
    `;
  }
  