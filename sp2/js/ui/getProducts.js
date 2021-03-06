//import { retriveCartFav } from "./utils/favouriteCartFunction.js";

export function getProducts(productsToGet) {
  const conteiner = document.querySelector(".products-conteiner");

  conteiner.innerHTML = "";

  //const favourites = retriveCartFav();

  productsToGet.forEach(function (product) {
    /*const ifObjectExist = favourites.find(function (fav) {
      console.log(fav);

      return parseInt(fav.id) === product.id;
    });*/

    let productLink = `<a href="details.html?id=${product.id}" class="cta-home">View</a>`;
    conteiner.innerHTML += `<div class="product">  
                              <img src="http://localhost:1337${product.image.url}" alt="${product.title}" class="product-details-image" />                                                
                                <h4>${product.title}<h4>
                                <p>$${product.price}<p>
                                <div class="home-link">${productLink}</div>
                             </div>`;
  });
}
