let artist = [];
let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
document.addEventListener("DOMContentLoaded", start);

function start() {
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



    async function getJson() {
        let url = "https://wonderfestiwall.dk/backend/wp-json/wp/v2/artist?per_page=100"
        let jsonData = await fetch(url);
        artist = await jsonData.json();
        visArtist();
    }



    function visArtist() {
        console.log(id);
        let dest = document.querySelector(".top");
        let temp = document.querySelector("template");
        let link = document.querySelector("a").getAttribute('href');


        artist.forEach(artist => {
            if (artist.slug == id) {


                let klon = temp.cloneNode(true).content;
                klon.querySelector(".billede").style.backgroundImage = `url(${artist.billede.guid})`;
                klon.querySelector("h1").innerHTML = artist.title.rendered;
                klon.querySelector(".presse_tekst").innerHTML = artist.content.rendered;
                klon.querySelector(".socials h4").innerHTML += artist.title.rendered;

                klon.querySelector(".facebook").href = artist.facebook_link;
                klon.querySelector(".instagram").href = artist.instagram_link;
                klon.querySelector(".spotify").href = artist.spotify_link;
                klon.querySelector(".soundcloud").href = artist.spotify_link;
                klon.querySelector(".youtube").href = artist.youtube_link;

                dest.appendChild(klon);
            }
        });

        fjernInstagram();


        function fjernInstagram() {
            document.querySelector(".fa-soundcloud").style.display = "none";
            if (id == "tv-2") {
                document.querySelector(".instagram").style.display = "none";
            }

            if (id == "mangera") {
                document.querySelector(".fa-spotify").style.display = "none";
                document.querySelector(".fa-youtube").style.display = "none";
                document.querySelector(".fa-soundcloud").style.display = "inline";
            }

            if (id == "emil-lange") {
                document.querySelector(".socials").style.display = "none";

            }

            if (id == "wonder-supreme-team") {
                document.querySelector(".socials").style.display = "none";

            }
        }





    }
    getJson();
}
