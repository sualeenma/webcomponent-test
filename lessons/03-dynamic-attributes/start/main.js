/*
 * Web components do not automatically track and update when
 * attributes are changed. You have to explicitly tell the
 * custom elements what atrributes to track and what to
 * do when they are updated.
 *
 * Read More: https://dev.to/jwp/web-components-color-span-3dai
 * */

/*
 * Steps:
 * 1. Create a static 'get' method called 'observedAttributes'
 * 2. Return an array of the attributes on the `nma-details`
 * 3. Add an 'attributeChangedCallback' method that updates
 * the content of the 'summaryElement' and 'answerElement'
 * */

class NMADetails extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.detailsElement = document.createElement("details");
    this.summaryElement = document.createElement("summary");
    this.answerElement = document.createElement("div");

    this.summaryElement.innerHTML = this.getAttribute("question");
    this.answerElement.innerHTML = this.getAttribute("answer");
    this.detailsElement.append(this.summaryElement, this.answerElement);
    this.shadowRoot.appendChild(this.detailsElement);
  }
}

customElements.define("nma-details", NMADetails);

/*---- DON'T EDIT BELOW THIS LINE ----*/
// This is custom logic that toggles the 'question' and 'answer'
// attributes on the 'nma-details' element
const toggleButton = document.querySelector(".content-toggle");
const detailsCustomElement = document.querySelector("nma-details");

toggleButton.addEventListener("click", (e) => {
  const question = e.target.getAttribute("data-question");
  const answer = e.target.getAttribute("data-answer");

  const currentQuestion = detailsCustomElement.getAttribute("question");
  const currentAnswer = detailsCustomElement.getAttribute("answer");

  e.target.setAttribute("data-question", currentQuestion);
  e.target.setAttribute("data-answer", currentAnswer);

  detailsCustomElement.setAttribute("question", question);
  detailsCustomElement.setAttribute("answer", answer);
});
