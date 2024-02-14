
    const toggleNavEvent = new Event("togglenav", { bubbles: true });

class NMABurger extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // 'simple' or 'squish'
    this.animation = this.getAttribute("animation") ?? "simple";
    this.height = this.getAttribute("height") ?? 4;
    this.gap = this.getAttribute("gap") ?? 4;
    this.width = this.getAttribute("width") ?? 30;

    this.styles = this.createStyles();
    this.burger = this.createBurger();

    this.shadowRoot.append(this.styles, this.burger);
    this.handleClick();
  }

  handleClick() {

    this.burger.addEventListener("click", (e) => {
      this.burger.classList.toggle("active");
      this.dispatchEvent(toggleNavEvent);
    });
  }

  createStyles() {
    const styleElement = document.createElement("style");
    const css = `
.nma-navicon-top {
  transform-origin: center;
  transition: all .3s ease-out;
}

.simple.active .icon-index__1{
  opacity: 0;
}

.simple.active .icon-index__0 {
  transform: translate(-25%, 30%) rotate(45deg);
}

.simple.active .icon-index__2 {
  transform: translate(-25%, -30%) rotate(-45deg);
}

.squish .icon-index__0 {
  animation: nma-squish-top-close 1s forwards;
}

.squish .icon-index__1{
  opacity: 1;
  transition: opacity .2s forwards;  
}

.squish .icon-index__2 {
  animation: nma-squish-bottom-close 1s forwards;  
}

.squish.active .icon-index__0 {
  animation: nma-squish-top-open 1s forwards;  
}

.squish.active .icon-index__1 {
  opacity: 0;
  transition: opacity .2s forwards;  
}

.squish.active .icon-index__2 {
  animation: nma-squish-bottom-open 1s forwards;  
}

/* NAVICON ANIMATIONS FOR THE SQUISH TO X ANIMATION */
@keyframes nma-squish-top-open {
  0% { transform: translate(0, 0); }
  50% { transform: translate(0, 41.5%); }
  75% { transform: translate(0, 41.5%); }
  100% { transform: translate(-25%, 30%) rotate(45deg); }
}
@keyframes nma-squish-bottom-open {
  0% { transform: translate(0, 0); }
  50% { transform: translate(0, -41.5%); }
  75% { transform: translate(0, -41.5%); }
  100% { transform: translate(-25%, -30%) rotate(-45deg); }
}
@keyframes nma-squish-top-close {
  0% { transform: translate(-25%, 30%) rotate(45deg); }
  25% { transform: translate(0, 41.5%) rotate(0deg); }
  50% { transform: translate(0, 41.5%); }
  100% { transform: translate(0, 0); }
}

@keyframes nma-squish-bottom-close {
  0% { transform: translate(0, 0) rotate(-45deg); }
  25% { transform: translate(0, -41.5%) rotate(0deg); }
  50% { transform: translate(0, -41.5%); }
  100% { transform: translate(0, 0); }
}
   `;

    styleElement.innerHTML = css;

    return styleElement;
  }

  createBurger() {
    const numberOfRects = 3;
    const totalBurgerHeight =
      this.height * numberOfRects + this.gap * (numberOfRects - 1);
    const svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );

    svgElement.setAttribute("height", totalBurgerHeight);
    svgElement.setAttribute("width", this.width);
    svgElement.classList.add(this.animation);

    for (const index in Array.from(Array(numberOfRects).keys())) {
      const rectIndex = parseInt(index);

      const rectElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      rectElement.setAttribute("x", 0);
      rectElement.setAttribute("y", (this.height + this.gap) * rectIndex);
      rectElement.setAttribute("height", this.height);
      rectElement.setAttribute("width", this.width);

      rectElement.classList.add("nma-navicon-top");
      rectElement.classList.add(`icon-index__${rectIndex}`);

      svgElement.appendChild(rectElement);
    }

    return svgElement;
  }
}

customElements.define("nma-burger", NMABurger);
