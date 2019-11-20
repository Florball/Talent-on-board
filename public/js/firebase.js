// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyCtFvs4lJ8mht9jxkvGXnnf-YffETHd2Q0',
  authDomain: 'tobhs-1879e.firebaseapp.com',
  projectId: 'tobhs-1879e'
});

var db = firebase.firestore();

//Agregar documentos
function guardar() {
  db.collection("users")({
    // name: nombre,
    // area: area
  })
}

//leer datos
var card = document.getElementById('hackspacers');

db.collection("users").onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    card.innerHTML +=
      `
      <div class="card mx-2 my-2" style="width: 18rem;">
      <!--  <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
          <h5 class="card-title"></h5>
          <h6 class="card-subtitle mb-2 text-muted">${doc.data().name}</h6>
          <p class="card-text">${doc.data().area}</p>
          <a href="${doc.data().red_social_1}" target="_blank" class="card-link"><i class="fab fa-linkedin-in"></i></a>
          <a href="${doc.data().red_social_2}" target="_blank" class="card-link"><i class="fab fa-github"></i></a>
        </div>
      </div>
      `
  });
});
