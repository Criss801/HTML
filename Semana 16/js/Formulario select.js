total=0;
function liquidar(){
    let n1=document.getElementById("n1").value;
    let n2=document.getElementById("n2").value;
    let op=document.getElementById("op").value;
    if (op=="suma"){
        total=parseFloat(n1)+parseFloat(n2);
    } else if (op=="resta"){
        total=parseFloat(n1)-parseFloat(n2);
    } else if (op=="multiplicar"){
        total=parseFloat(n1)*parseFloat(n2);
    } else if (op=="dividir"){
        total=parseFloat(n1)/parseFloat(n2);
    }
    document.getElementById('resp').value=total;
}
