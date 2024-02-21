// henter oh identificerer ID for det produkt der klikkes på og definerer to konstanter
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

//henter data for det korrekte id
fetch(`https://wkvrpgxhbgrztjimigfp.supabase.co/rest/v1/Svampedata?id=eq.${id}`,{
    method:"GET",
    headers:{
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrdnJwZ3hoYmdyenRqaW1pZ2ZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNzQwMjUsImV4cCI6MjAyMzg1MDAyNX0.geECteCf-DjNUNftn-g6ltFF63AugdIYWMg3Jc-pgHM"
    },
})

.then((res) => res.json())
.then(showProduct);


function showProduct(items){
    console.log(items[0]);
    // document.querySelector(".overskrift_svamp").textContent = items[0].Svampenavn
    document.querySelector("#overskrift_svamp").textContent = items[0].Svampenavn;
    document.querySelector("#specifik_svamp").src = items[0].Billede;
    document.querySelector("#info_svamp_about").textContent = items[0].Beskrivelse;
    document.querySelector("#info_svamp_seasons").textContent = items[0].Sæson;
    document.querySelector("#info_svamp_sankested").textContent = items[0].Sankelandskab;
    document.querySelector("#cirkel_tekst_taste").textContent = items[0].Smag;
    document.querySelector("#cirkel_tekst_smell").textContent = items[0].Duft;
    document.querySelector("#cirkel_tekst_risk").textContent = items[0].Risiko;
}
