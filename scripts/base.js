/**
 * Test Project - Linx
 * Base Functions File, with actions and handlers executed on the page load
 */

import Products from "./products";

(function () {
  document.getElementById("moreProductsButton").addEventListener("click", Products.get);

  Products.get();
})();
