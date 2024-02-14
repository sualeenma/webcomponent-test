/*  Web Components othewise known as Custom Elements are a
 *  web standard meaning that they are given to you by default
 *  without the use of any other library or framework.
 *
 *  Read More Here: https://developer.mozilla.org/en-US/docs/Web/API/Web_components
 *  */

/*--------------CREATE YOUR FIRST WEB COMPONENT-----------*/
/* NOTE ON NAMING: For best practice name the class a title-cased version
 * of what the tag name would be in HTML. When using a custom element
 * the tag needs a '-', so usually the namespace and the component name
 * are used together. In this example we are creating a button so we
 * will name the tag `nma-button` and the class `NMAButton`. */

/*
 * Steps:
 *
 * 1. Create a class name 'NMAButton' that extends the 'HTMLElement' class
 * 2. Add the constructor and call 'super'
 * 3. Set the 'attachShadow' property to `{mode: "open"}`
 * 4. Build the `a` tag using 'document.createElement' and name it 'buttonElement'
 * 5. Set the 'href' of the buttonElement to the 'href' attribute from the custom element
 * 6. Set the 'innerHTML' of the buttonElement to the 'innerHTML' of the custom element
 * 7. Check for the 'variant' attribute and update the classList of the `buttonElement`
 * if there is one
 * 8. Create a method called 'getStyles'
 * 9. In that method create a `style` tag and set the content to a css string called 'styles'. Then
 * return the `style` element
 * 10.In the constructor create a variable called 'styleTag' and set it to the return value
 * of the `getStyles` method
 * 11. Append the 'styleTag' and 'buttonElement' to the shadowRoot
 * 12. At the bottom of the file use `customElements.define` allow the custom element
 * to be used in the HTML
 * */
