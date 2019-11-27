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
    <div class="card section-talent__card mx-2 my-2" style="width: 16rem;">
      <img src="${doc.data().foto}" class="card-img-top section-talent__img" alt="Foto de perfil">
      <div class="card-body section-talent__cont-icons">
        <h5 class="card-title text-center">${doc.data().name}</h5>
        <h6 class="card-subtitle mb-3 text-center">${doc.data().area}</h6>
        <h6 class="card-text my-2">Experiencia: ${doc.data().experiencia}.</h6>
        <h6 class="card-text mb-4">Último proyecto: <a href="${doc.data().proyecto}" target="_blank">Click aquí <i class="fas fa-mouse-pointer"></i></a></h6>
        <div class="text-center">
          <div class="section-talent__icons mx-2"><a href="${doc.data().red_social_1}" target="_blank" class="section-talent__link"><i class="fab fa-linkedin-in"></i></a></div>
          <div class="section-talent__icons mx-2"><a href="${doc.data().red_social_2}" target="_blank" class="section-talent__link"><i class="fab fa-github"></i></a></div>
          <div class="section-talent__icons mx-2"><a href="mailto:${doc.data().mail}" target="_blank" class="section-talent__link"><i class="fas fa-envelope"></i></a></div>
          <div class="section-talent__icons mx-2"><a href="https://api.whatsapp.com/send?phone=${doc.data().number}&text=Hola,%20te%20vi%20en%20la%20página%20de%20Talent%20On%20Board%20y%20me%20gustaría%20hablar%20contigo.&source=&data=" target="_blank" class="section-talent__link"><i class="fab fa-whatsapp"></i></a></div>
        </div>
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
