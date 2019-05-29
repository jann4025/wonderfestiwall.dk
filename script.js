 document.addEventListener("DOMContentLoaded", start);

 let sfilter;
 let filter = "alle";



 function start() {

     //     document.querySelectorAll(".filter_knap").forEach(elm => {
     //         elm.addEventListener("click", filtreing);
     //     });
     //
     //     function filtreing() {
     //         filter = this.getAttribute("data-kat");
     //         document.querySelectorAll(".filter_knap").forEach(elm => {
     //             elm.classList.remove("aktiv");
     //         });
     //         this.classList.add("aktiv");
     //         console.log(filter);
     //         Filter();
     //     }
     //
     //     function Filter() {
     //         document.querySelectorAll(".artist").forEach(artist => {
     //             artist.classList.add("hide");
     //         });
     //
     //         if (filter == "torsdag") {
     //             document.querySelectorAll(".torsdag").forEach(artist => {
     //                 artist.classList.remove("hide");
     //             });
     //
     //
     //         }
     //
     //         if (filter == "fredag") {
     //
     //
     //             document.querySelectorAll(".fredag").forEach(artist => {
     //                 artist.classList.toggle("hide");
     //             });
     //
     //         }
     //
     //         if (filter == "lørdag") {
     //
     //             document.querySelectorAll(".lørdag").forEach(artist => {
     //                 artist.classList.remove("hide");
     //             });
     //
     //         }
     //
     //         if (filter == "alle") {
     //
     //             document.querySelectorAll(".alle").forEach(artist => {
     //                 artist.classList.remove("hide");
     //             });
     //
     //         }
     //
     //     }


     document.querySelectorAll(".artist").forEach(elm => {
         elm.addEventListener("click", visArtist);
     });

     function visArtist() {
         sFilter = this.getAttribute("data");
         console.log("Virk", this, sFilter);
         location.href = "artist.html?id=" + sFilter;
     }

     document.querySelector(".menu-knap").addEventListener("click", visMenu);


     function visMenu() {
         console.log("Vis menu")
         document.querySelector(".menu-knap").removeEventListener("click", visMenu);
         document.querySelector(".nav-inner-mobile").style.display = "grid";
         document.querySelector(".menu-knap").addEventListener("click", fjernMenu);

     }

     function fjernMenu() {
         document.querySelector(".menu-knap").removeEventListener("click", fjernMenu);
         document.querySelector(".nav-inner-mobile").style.display = "none";
         document.querySelector(".menu-knap").addEventListener("click", visMenu);

     }







     var filter = "";


     async function getJson() {
         console.log("getJson");
         let jsonData = await fetch("https://mandalskeawebspace.dk/claude_php/clean_up_spreadsheet.php?id=1jozgkRzLfhLHMcW8MsYNIirhdz_cDl6nIX5pZH2LqrY");
         info = await jsonData.json();
         visInfo();
     }





     function visInfo() {
         info.forEach(info => {
             document.querySelector(".accordion-1").innerHTML +=


                 `  <details>
  <summary>${info.titel}</summary>
  <p> ${info.tekst}</p>
</details>`


             //                 ` <div class="card">
             //    <div class="card-header" id="heading${info.id}">
             //      <h2 class="mb-0">
             //        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${info.id}" aria-expanded="true" aria-controls="collapse${info.id}">
             //         ${info.titel}
             //        </button>
             //      </h2>
             //    </div>
             //
             //    <div id="collapse${info.id}" class="collapse" aria-labelledby="heading${info.id}" data-parent="#accordionExample">
             //      <div class="card-body">
             //        ${info.tekst}
             //      </div>
             //    </div>
             //  </div>`
         });

         document.querySelectorAll(".vis").forEach(elms => {
             elms.addEventListener("click", singleViewFilter);
         });
     }

     getJson();


     function singleViewFilter() {
         console.log("singel");
         filter = this.getAttribute("data-info");
         console.log(filter);
     }
 }
