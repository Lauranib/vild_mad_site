// henter oh identificerer ID for det produkt der klikkes på og definerer to konstanter
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

//henter data for det korrekte id
fetch("https://wkvrpgxhbgrztjimigfp.supabase.co/rest/v1/Svampedata",{
    method:"GET",
    headers:{
        apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrdnJwZ3hoYmdyenRqaW1pZ2ZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNzQwMjUsImV4cCI6MjAyMzg1MDAyNX0.geECteCf-DjNUNftn-g6ltFF63AugdIYWMg3Jc-pgHM"
    },
})

.then((res) => res.json())
.then(showProducts);


function showProduct(items){
    console.log(items);
}

//gør så dataen ikke kommer som et array
const singleProduct = items[0];

//Udfyld indhold med den rigtige data
document.querySelector(".overskrift_svamp").textContent=singleProduct.Svampenavn;