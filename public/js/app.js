var uno = {
    apiKey: "AIzaSyCtFvs4lJ8mht9jxkvGXnnf-YffETHd2Q0",
    authDomain: "tobhs-1879e.firebaseapp.com",
    projectId: "tobhs-1879e",
};

firebase.initializeApp(uno); 
var db = firebase.firestore();

var nombre=document.getElementById("nombre");
var cargo=document.getElementById("cargo");
var link=document.getElementById("link");



var contenido=document.getElementById("contenido");

function filtrar(){
    //En valor se almacena la referencia de el ID indicado en este caso aldeas
    let valor=document.getElementById("aldeas");
    let item=valor.options[valor.selectedIndex].value;

    db.collection("users").onSnapshot(
        function(llamada){
        contenido.innerHTML="";
        llamada.forEach(
            function(doc){
                let area2=doc.data().area;
            if(item==area2){
                contenido.innerHTML+=  `<p>${area2}</p><img src="${doc.data().foto}" >`;
            }else{
                console.log("sdv");
            }
        });
    });
}










function guardar() {
    //var user = db.doc("alumnos/container");
    var datos = {
        nombre: nombre.value,
        cargo:  cargo.value,
        link:   link.value
    };
    db.collection("Alumnos").add(datos)
        .then(function (docRef) {
            console.log("Satisfactorio" + docRef.id);
            limpiar();
            }
        )
        .catch(
            function (error) {
                console.log("the error is: " + error);
            }
    );
};
function limpiar(){
    nombre.value=" ";
    cargo.value=" ";
    link.value=" ";
}


ScrollReveal().reveal(".uno",{scale:2,delay:1000,duration:10000});