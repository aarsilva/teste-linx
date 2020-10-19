/**
 * Test Project - Linx
 * Product Functions File, for get, control, handle and mount them on screen
 */

import http from '../services/http';

/**
 * Basic State values used in the local functions
 */
const BASIC_STATE = {
  nextPage: 1,
};

/**
 * Card Generator Function
 * @param data Data object with product information
 * @returns Card strings
 */
function createCard(data) {
  const CARD_FIELD = `
    <div class="column size-lg-25 product">
      <div class="card">
        <div class="card-image">
          <img src="${data.image}" alt="${data.name}">
        </div>
        <div class="card-text">
          <p class="card-text-title">
            ${data.name}
          </p>
          <p class="card-text-desc">
            ${data.description}
          </p>
        </div>
        <div class="card-price">
          <p class="card-price-old">
            De: R$${data.oldPrice.toFixed(2)}
          </p>
          <p class="card-price-new">
            Por: R$${data.price.toFixed(2)}
          </p>
          <p class="card-price-installments">
            ou ${data.installments.count}x de R$${data.installments.value.toFixed(2)}
          </p>
        </div>
        <div class="card-button">
          <button type="button">
            Comprar
          </button>
        </div>
      </div>
    </div>
  `;

  return CARD_FIELD;
}

/**
 * Product Get Function
 * This function will make the request and get the list of products
 */
function get() {
  http.get(`products?page=${BASIC_STATE.nextPage}`).then((result) => {
    const nextPage = result.nextPage.split("=")[1];
    const products = result.products;

    for(let product of products) {
      const card = createCard(product);
      document.getElementById("productList").insertAdjacentHTML('beforeend', card);
    }

    BASIC_STATE.nextPage = nextPage;
  });
};

export default {get};
