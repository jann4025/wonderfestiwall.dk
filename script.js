 document.addEventListener("DOMContentLoaded", start);


 function scrollFunction() {
     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
         document.querySelector(".navbar").style.padding = "1px 1px";
         document.querySelector(".navbar-brand").style.fontSize = "1px";
     } else {
         document.querySelector(".navbar").style.padding = "1px 0px";
         document.querySelector(".navbar-brand").style.fontSize = "1px";
     }
 }

 function start() {

     window.onscroll = function () {
         scrollFunction()
     };

     $(function () {
         $('[data-toggle="popover"]').popover()
     })

     var filter = "";


     async function getJson() {
         console.log("getJson");
         let jsonData = await fetch("https://mandalskeawebspace.dk/claude_php/clean_up_spreadsheet.php?id=1jozgkRzLfhLHMcW8MsYNIirhdz_cDl6nIX5pZH2LqrY");
         info = await jsonData.json();
         visInfo();
     }


     function visInfo() {
         info.forEach(info => {
             document.querySelector(".accordion").innerHTML +=


                 ` <div class="card">
    <div class="card-header" id="heading${info.id}">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${info.id}" aria-expanded="true" aria-controls="collapse${info.id}">
         ${info.titel}
        </button>
      </h2>
    </div>

    <div id="collapse${info.id}" class="collapse" aria-labelledby="heading${info.id}" data-parent="#accordionExample">
      <div class="card-body">
        ${info.tekst}
      </div>
    </div>
  </div>`
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
