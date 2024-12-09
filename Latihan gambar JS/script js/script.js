
const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");

container.addEventListener("click", function (e) {
  //cek apakah yang di klik tumb

  if ( e.target.className == "tumb" ) {
    jumbo.src = e.target.src;


  }
});
