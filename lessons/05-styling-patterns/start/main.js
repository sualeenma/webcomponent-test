/* Exercise 2
 * Any element that is slotted in a custom element can be
 * styled using the ::slotted() pseudo-element.
 *
 * Read more: https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted
 *
 * Steps:
* 1. Use the ::slotted() psuedo-element to style the <h3> in the css variable
 * 2. Use the ::slotted() psuedo-element to style the <p> in the css variable
 * 3. Use the ::slotted() psuedo-element to style the <a> in the css variable
 * */
class NMAText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const styles = this.createStyles();
    const slot = document.createElement("slot");
    this.shadowRoot.append(styles, slot);
  }

  createStyles() {
    const styleTag = document.createElement("style");
    const css = ``;

    styleTag.innerHTML = css;
    return styleTag;
  }
}

customElements.define("nma-text", NMAText);

/* --------- DON'T EDIT BELOW THIS LINE -------- */
class NMATwoColumn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const styles = this.createStyles();
    const slot = document.createElement("slot");
    this.shadowRoot.append(styles, slot);
  }

  createStyles() {
    const styleTag = document.createElement("style");

    const css = `
      :host {
        display: grid;
        grid-template-columns: var(--nma-two-column-ratio, 1fr 1fr);
        grid-gap: var(--nma-two-column-gap, 20px);
        align-items: center;
      }

      ::slotted(img){
          display: block;
          width: 100%;
          height: auto;
      }
      `;

    styleTag.innerHTML = css;

    return styleTag;
  }
}

customElements.define("nma-two-column", NMATwoColumn);

class NMANumberTiles extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.tilesCount = parseInt(this.getAttribute("count"));

    for (const tileIndex of Array.from(Array(this.tilesCount)).keys()) {
      const tileElement = document.createElement("div");
      tileElement.setAttribute("part", "tile");
      tileElement.innerHTML = tileIndex;
      this.shadowRoot.appendChild(tileElement);
    }
  }
}

customElements.define("nma-number-tiles", NMANumberTiles);
