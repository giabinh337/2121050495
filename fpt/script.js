
let listFilm = [
  {
    id: 1,
    name: "Mưa đỏ",
    banner: "640x396-muado.jpg",  
    trailer: "https://youtu.be/0Uuu_OMWG5Q?si=RQAmHXfcl8TxzJ8j",
    nation: "Việt Nam"
  },
  {
    id: 2,
    name: "Thiên địa kiếm tâm",
    banner: "banner tdkt.jfif",
    trailer: "https://youtu.be/0Uuu_OMWG5Q?si=RQAmHXfcl8TxzJ8j",
    nation: "Trung Quốc"
  },
  {
    id: 3,
    name: "Thiên địa kiếm tâm",
    banner: "banner tdkt.jfif",
    trailer: "https://youtu.be/0Uuu_OMWG5Q?si=RQAmHXfcl8TxzJ8jE",
    nation: "Trung Quốc"
  },
  {
    id: 4,
    name: "Thiên địa kiếm tâm",
    banner: "banner tdkt.jfif",
    trailer: "https://youtu.be/0Uuu_OMWG5Q?si=RQAmHXfcl8TxzJ8j",
    nation: "Trung Quốc"
  },{
    id: 5,
    name: "Thiên địa kiếm tâm",
    banner: "banner tdkt.jfif",
    trailer: "https://youtu.be/0Uuu_OMWG5Q?si=RQAmHXfcl8TxzJ8j",
    nation: "Trung Quốc"
  },
];

let bannerElement = document.getElementById('banner');
let bannerImg = document.getElementById('bannerImg');
let titleElement = document.getElementsByClassName('title')[0];
let nationElement = document.getElementsByClassName('nation')[0];
let trailerElement = document.getElementById('trailer');
let currentFilm = null;
function chooseFilm(filmId) {
  let selectedFilm = listFilm.find(film => film.id === filmId);
  if (!selectedFilm) return;

  currentFilm = selectedFilm;

  trailerElement.style.display = "none";
  bannerElement.style.display = "block";

  bannerImg.src = selectedFilm.banner;

  titleElement.textContent = selectedFilm.name;
  nationElement.textContent = " -"+ selectedFilm.nation;
}
function viewTrailer() {
  bannerElement.style.display = "none";
  trailerElement.style.display = "block";
}
