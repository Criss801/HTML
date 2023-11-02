function info(){
    let num=1;
    let res=true;
    while (num<=99 && res==true){
        nomuser=prompt("Ingresa nombre de usuario");
        if (nomuser!=null){
            var n=num.toString().padStart(2,'0');
            var letra="F";
            var letra=letra.concat(n);
            res=confirm("Estimado usuario:"+" "+" "+nomuser+"\n"+"Su turno es:"+" "+letra+"\n"+"Espere su llamado");
            num++;
        } else{
            alert("Error en turno");
            break;
        }
    }
}
function pago(){
    let num=1;
    let res=true;
    while (num<=99 && res==true){
        nomuser=prompt("Ingresa nombre de usuario");
        if (nomuser!=null){
            var n=num.toString().padStart(2,'0');
            var letra="P";
            var letra=letra.concat(n);
            res=confirm("Estimado usuario:"+" "+" "+nomuser+"\n"+"Su turno es:"+" "+letra+"\n"+"Espere su llamado");
            num++;
        } else{
            alert("Error en turno");
            break;
        }
    }
}
function pqr(){
    let num=1;
    let res=true;
    while (num<=99 && res==true){
        nomuser=prompt("Ingresa nombre de usuario");
        if (nomuser!=null){
            var n=num.toString().padStart(2,'0');
            var letra="Q";
            var letra=letra.concat(n);
            res=confirm("Estimado usuario:"+" "+" "+nomuser+"\n"+"Su turno es:"+" "+letra+"\n"+"Espere su llamado");
            num++;
        } else{
            alert("Error en turno");
            break;
        }
    }
}
function matri(){
    let num=1;
    let res=true;
    while (num<=99 && res==true){
        nomuser=prompt("Ingresa nombre de usuario");
        if (nomuser!=null){
            var n=num.toString().padStart(2,'0');
            var letra="M";
            var letra=letra.concat(n);
            res=confirm("Estimado usuario:"+" "+" "+nomuser+"\n"+"Su turno es:"+" "+letra+"\n"+"Espere su llamado");
            num++;
        } else{
            alert("Error en turno");
            break;
        }
    }
}