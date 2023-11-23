function apostar(){
    var a=Math.round(Math.random()*10);
    document.getElementById("resultado").value=a;
    var b=document.getElementById("apostado").value;
    if (a==b){
        document.getElementById("salida").value="¡GANÓ!";
    } else{
        document.getElementById("salida").value="Sigue intentando la próxima";
    }
}

function cancel(){
    document.getElementById("apostado").value=" ";
    document.getElementById("resultado").value=" ";
    document.getElementById("salida").value=" ";
}