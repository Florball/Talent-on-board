// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyC5lsAh_b6_Z1LW4lE3qLciWFMIibHZbwg",
  authDomain: "talentonboard.firebaseapp.com",
  projectId: "talentonboard"
});
const db = firebase.firestore();

const searcher = document.getElementById("searcher");
const btnSearch = document.getElementById("btn-search");
const card = document.getElementById("hackspacers");

//lee los datos y los pinta
const filter = () => {
  db.collection("push()").onSnapshot(querySnapshot => {
    card.innerHTML = '';
    querySnapshot.forEach(doc => {
      const txtSearch = searcher.value.toUpperCase();
      const track = doc.data().area.toUpperCase();
      if (track.indexOf(txtSearch) !== -1) {
        card.innerHTML += `
        <div class="card section-talent__card mx-2 my-2" style="width: 16rem;">
          <img src="${doc.data().foto}" class="card-img-top section-talent__img" alt="Foto de perfil">
          <div class="card-body section-talent__cont-icons">
            <h5 class="card-title text-center">${doc.data().nombre}</h5>
            <h6 class="card-subtitle mb-3 text-center">${doc.data().area}</h6>
            <h6 class="card-text my-2">Experiencia: <span>${doc.data().experiencia}.</span></h6>
            <h6 class="card-text mt-2 mb-4">Disponibilidad: <span>${doc.data().tiempo}.</span></h6>
            <div class="text-center">
              <div class="section-talent__icons mx-1"><a href="${doc.data().linkedin}" target="_blank"><img src="assets/icons/linkedin.svg" alt="Linkedin"></a></div>
              <div class="section-talent__icons mx-1"><a href="${doc.data().github}" target="_blank"><img src="assets/icons/github.svg" alt="Github"></a></div>
              <div class="section-talent__icons mx-1"><a href="https://api.whatsapp.com/send?phone=${doc.data().contacto}&text=Hola%20${doc.data().nombre},%20te%20vi%20en%20la%20página%20de%20Talent%20On%20Board%20y%20me%20gustaría%20hablar%20contigo.&source=&data=" target="_blank"><img src="assets/icons/whatsapp.svg" alt="Whatsapp"></a></div>
            </div>
          </div> 
        </div>`;
      } else {
      console.log(doc.data().area)
        }
    });
  });
}
searcher.addEventListener("keyup", filter);
filter();


//<h6 class="card-text mb-4">Último proyecto: <a href="${doc.data().proyecto}" target="_blank">Click aquí  <i class="fas fa-mouse-pointer"></i></a></h6>
//<div class="section-talent__icons mx-2"><a href="mailto:${doc.data().mail}" target="_blank"><i class="fas fa-envelope"></i></a></div>
