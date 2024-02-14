import "./elements/nma-elements-row.js";
import "./elements/nma-burger.js";
import "./elements/nma-lightbox.js";

window.addEventListener(
  "togglenav",
  () => {
    alert("A web component has dispatched a 'togglenav' event");
  },
  false
);
