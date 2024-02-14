class NMAElementsRow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const rowElement = document.createElement("div");
    rowElement.classList.add("row");

    const heading = document.createElement("h2");
    heading.classList.add("heading");
    heading.innerHTML = this.getAttribute("heading");

    const slotElement = document.createElement("slot");
    const styles = this.createStyles();

    rowElement.appendChild(slotElement);

    this.shadowRoot.append(styles, heading, rowElement);
  }

  createStyles() {
    const styleElement = document.createElement("style");

    const css = `
      .row {
          display: flex;
          flex-wrap: wrap;
          gap: 50px;
          align-items: flex-start;
      }
      `;

    styleElement.innerHTML = css;

    return styleElement;
  }
}

customElements.define("nma-elements-row", NMAElementsRow);
