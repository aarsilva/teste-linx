/**
 * Test Project - Linx
 * Base Functions File, with actions and handlers executed on the page load
 */

import Products from "./products";
import Newsletter from "./newsletter";

(function () {
  document.getElementById("moreProductsButton").addEventListener("click", Products.get);
  document.getElementById("newsletterForm").addEventListener("submit", Newsletter.formSubmit);

  Products.get();
})();
