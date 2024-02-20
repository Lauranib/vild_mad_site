const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get ("id");

function getProdcut() {
fetch("https://kea-alt-del.dk/t7/api/products/"+id)
    .then((response) => response.json())
    .then ((data) => showProduct(data));
}


function showProduct(product){
    let productClone;
    
    console.log(product);
    document.querySelector(".product_name").textContent = product.productdisplayname;
    document.querySelector(".sold_out_box").textContent = product.soldout;
    document.querySelector(".product_image2").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    document.querySelector(".product_image2").alt = `Picture of a ${product.productdisplayname} product`;
    document.querySelector(".product_tagline").textContent = product.tagline;
    document.querySelector(".badge").textContent = product.brandname;
    document.querySelector(".price").textContent = `Prev. ${product.price} DKK ,-`;
    document.querySelector(".offer2").textContent = `-${product.discount} % `;

    // Ændre indhold i breadcrumbs
  document.querySelector(".breadcrumbs li:nth-child(3) a").textContent = product.category;
  document.querySelector(".breadcrumbs li:nth-child(3) a").href = `productlist.html?category=${product.category}`
  document.querySelector(".breadcrumbs li:nth-child(4)").textContent = product.brandname;
  document.querySelector(".breadcrumbs li:nth-child(5)").textContent = product.productdisplayname;

    if(product.soldout) {
        document.querySelector(".sold_out_box").textContent = 'Udsolgt';
      }
      else {document.querySelector(".sold_out_box").classList.add("hide")}
      
      document.querySelector(".product_image2").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
      document.querySelector(".product_image2").alt = `Picture of a ${product.productdisplayname} product`;
      
      if (product.discount){
        document.querySelector(".offer2").textContent = `-${product.discount} % `;
      }
      else {document.querySelector(".offer2").classList.add("hide")}
}

getProdcut();