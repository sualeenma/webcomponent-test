/*
 * Slots allow you to create a placeholder
 * that you can fill with your own markup.
 *
 * Read more: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot
 * */

/*------ Exercise 1 -------*/

/*
 * Create slots within the `NMACard` that allows
 * you to create placeholder for the heading and
 * main content of the card.
 *
 *
 * Steps:
 * 1. Create a method called 'createSlot' that accepts a 'name'
 * parameter
 * 2. Within the 'createSlot' method, create a variable called 'slotElement'
 * and use 'document.createElement' to create a 'slot' tag
 * 3. Use 'setAttribute' to set the 'name' attribute to the 'name' parameter
 * passed to the method
 * 4. Return the 'slotElement' variable from the 'createSlot' method.
 * 5. In the constructor create a variable named 'headingSlot'.
 * Use the 'createSlot' method  and pass it the value 'heading'
 * 6. Below the 'headingSlot' variable create another called 'contentSlot'.
 * Repeat the same step but pass the `createSlot` method the value 'content'
 * 7. Append the 'headingSlot' and 'contentSlot' to the shadowRoot
 * 8. Go the `index.html` file and follow the instruction above the 'nma-card'
 * element
 */

class NMACard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

customElements.define("nma-card", NMACard);

/* ------ Exercise 2 ------ */

/*
 * You can also slot web components and have them
 * react to changes to the parent component. This
 * Exercise creates muliple different 'nma-color'
 * elements which are pretty much just tiles
 * with a specific background color. There is a parent
 * 'nma-color-group' element that can toggle
 * the backgrounds of all the 'nma-color' elements.
 *
 * Steps:
 *
 * 1. In the 'NMAColorGroup' constructor create
 * a 'slot' element
 * 2. Create a 'button' element and assign it to
 * 'this.toggleButton'.
 * 3. Get the 'toggleColor' attribute and assign it to
 * 'this.toggleColor'
 * 4. Set the 'innerHTML' of the toggleButton
 * to be a string literal including 'this.toggleColor'
 * 5. Append 'this.toggleButton' and the 'slot' to
 * 'this.shadowRoot'
 * 6. Add a method using the 'get' syntax called 'get colorElements'
 * that returns all the 'nma-color' elements that are slotted
 * 7. Create a method called 'handleToggle'
 * 8. In the 'handleToggle' method add an event listener
 * for a 'click' event for 'this.toggleButton'
 * 9. In the 'click' event listener callback, loop through
 * all the 'this.colorElements' and set the 'color' attribute
 * to 'this.toggleColor'
 * */

class NMAColorGroup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

customElements.define("nma-color-group", NMAColorGroup);

/* --------- DON'T EDIT BELOW THIS LINE -------- */
// This creates a 'nma-color' element and sets the
// background to the 'color' attribute. It also uses
// the 'attributeChangedCallback' method to update
// the background if the 'color' attribute changes
class NMAColor extends HTMLElement {
  static get observedAttributes() {
    return ["color"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.div = document.createElement("div");
    this.div.style.height = "50px";
    this.div.style.width = "50px";
    this.setColor(this.getAttribute("color"));

    this.shadowRoot.append(this.div);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "color":
        this.setColor(newValue);
    }
  }

  setColor(color) {
    this.div.style.background = color;
  }
}

customElements.define("nma-color", NMAColor);
