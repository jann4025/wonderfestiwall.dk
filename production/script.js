 document.addEventListener("DOMContentLoaded", start);


 function start() {

     visArtister();
     async function getJson() {
         let url = "https://wonderfestiwall.dk/backend/wp-json/wp/v2/pages/6"
         let jsonData = await fetch(url);
         indhold = await jsonData.json();
         visIndhold();
     }


     function visIndhold() {
         document.querySelector(".content").innerHTML = indhold.content.rendered;
     }

     getJson();





 }
