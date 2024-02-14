class NMALightbox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const imagesContainer = document.createElement("div");
    imagesContainer.classList.add("images");
    const slotElement = document.createElement("slot");
    imagesContainer.append(slotElement);

    this.imageWidth = this.getAttribute("imageWidth") ?? "200px";

    this.expandedContainer = document.createElement("div");
    this.expandedContainer.classList.add("expanded");

    this.expandedImage = document.createElement("img");
    this.expandedImage.classList.add("expanded-image");
    this.expandedContainer.append(this.expandedImage);

    const styles = this.createStyles();

    this.isImageClickable = true;

    this.images.forEach((image) => {
      image.addEventListener("click", () => {
        if (this.isImageClickable) {
          this.handleImageClick(image);
        }
      });
    });

    this.expandedContainer.addEventListener("click", () => {
      this.isImageClickable = true;
      this.expandedContainer.classList.remove("active");
    });

    this.shadowRoot.append(styles, imagesContainer, this.expandedContainer);
  }

  createStyles() {
    const styleElement = document.createElement("style");

    const css = `
 .images {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 40px;
}

::slotted(img) {
  display: block;
  height: auto;
  width: ${this.imageWidth};
}

.expanded {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transition: opacity 0.3s;
}

.expanded.active {
  opacity: 1;
  pointer-events: initial;
  background: rgba(0,0,0,0.7);
  transition: opacity 0.3s;
  z-index: 100;
}

.expanded-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 70%;
  max-height: 80%;
  object-fit: contain;
  height: auto;
}
`;

    styleElement.innerHTML = css;

    return styleElement;
  }

  handleImageClick(image) {
    const src = image.getAttribute("src");
    this.expandedImage.setAttribute("src", src);
    this.expandedContainer.classList.add("active");
    this.isImageClickable = false;
  }

  get images() {
    const images = this.querySelectorAll("img");

    return images;
  }
}

customElements.define("nma-lightbox", NMALightbox);
