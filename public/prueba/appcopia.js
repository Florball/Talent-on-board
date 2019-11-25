// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCtFvs4lJ8mht9jxkvGXnnf-YffETHd2Q0",
  authDomain: "tobhs-1879e.firebaseapp.com",
  projectId: "tobhs-1879e"
});

const db = firebase.firestore();

const searcher = document.getElementById("searcher");
const btnSearch = document.getElementById("btn-search");
const card = document.getElementById("hackspacers");

//lee los datos y los pinta
const filter = () => {
  db.collection("users").onSnapshot(querySnapshot => {
    card.innerHTML = '';
  querySnapshot.forEach(doc => {
    const txtSearch = searcher.value.toUpperCase();
    const track = doc.data().area.toUpperCase();
    if (track.indexOf(txtSearch) !== -1) {
      card.innerHTML += `
    <div class="card mx-2 my-2" style="width: 16rem;">
      <img src="${doc.data().foto}" class="card-img-top img-fluid" alt="Foto de perfil">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <h6 class="card-subtitle mb-2 text-muted">${doc.data().name}</h6>
        <p class="card-text">${doc.data().area}</p>
        <a href="${doc.data().red_social_1}" target="_blank" class="card-link"><i class="fab fa-linkedin-in"></i></a>
        <a href="${doc.data().red_social_2}" target="_blank" class="card-link"><i class="fab fa-github"></i></a>
      </div>
    </div>
    `;
    } else {
      console.log(doc.data().area)
    }
  });
});
}
searcher.addEventListener("keyup", filter);
filter();
