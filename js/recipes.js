//Project URL:
//https://wkvrpgxhbgrztjimigfp.supabase.co

//API nøgle:
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrdnJwZ3hoYmdyenRqaW1pZ2ZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNzQwMjUsImV4cCI6MjAyMzg1MDAyNX0.geECteCf-DjNUNftn-g6ltFF63AugdIYWMg3Jc-pgHM

fetch("https://wkvrpgxhbgrztjimigfp.supabase.co/rest/v1/Svampedata", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrdnJwZ3hoYmdyenRqaW1pZ2ZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNzQwMjUsImV4cCI6MjAyMzg1MDAyNX0.geECteCf-DjNUNftn-g6ltFF63AugdIYWMg3Jc-pgHM",
  },
})
  .then((res) => res.json())
  .then(showProducts);

function showProducts(items) {
  //looper og kalder showProduct
  items.forEach(showProduct);
}

function showProduct(items) {
  const template = document.querySelector("#svampeTemplate").content;
  //lav kopi
  const copy = template.cloneNode(true);
  //ændre indholds
  copy.querySelector(".svampe").src = items.Billede;
  copy.querySelector(".p_svampenavn").textContent = items.Svampenavn;
  copy.querySelector(".p_svampe").textContent = items.Beskrivelse;

  document.querySelector(".row2").appendChild(copy);
}
