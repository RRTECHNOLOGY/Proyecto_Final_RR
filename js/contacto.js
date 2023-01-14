function crearComentario() {
    let user= document.getElementById('usuario');
    let coment=document.getElementById('comentario');
    let imprimir=document.getElementById('salida'); //accedemos al párafo con el id=salida
    imprimir.innerHTML="<h1>"+user.value+ "<h1>";
    imprimir.innerHTML+="<p>"+coment.value+"</p>";

}