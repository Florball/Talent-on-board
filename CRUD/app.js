// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCtFvs4lJ8mht9jxkvGXnnf-YffETHd2Q0',
    authDomain: 'tobhs-1879e.firebaseapp.com',
    projectId: 'tobhs-1879e'
});

var db = firebase.firestore();

//Agregar documentos
function guardar() {
    var nombre = document.getElementById('nombre').value;
    var aldea = document.getElementById('aldea').value;

    db.collection("users").add({
        name: nombre,
        aldea: aldea,
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            //reiniciar los inputs
            document.getElementById('nombre').value = '';
            document.getElementById('aldea').value = ''
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}


//leer datos
var tabla = document.getElementById('tabla');

db.collection("users").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';  
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().name}`);
        tabla.innerHTML +=
        `
        <tr>
        <th scope="row">${doc.id}</th>
            <td>${doc.data().name}</td>
            <td>${doc.data().aldea}</td>
            <td><button class="btn btn-danger onclick="eliminar('${doc.id}')">Eliminar</button></td>
        </tr>
        `
    });
});

//borrar documentos
function eliminar(id){
    db.collection("users").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing documnent: ", error);
    });  
}
