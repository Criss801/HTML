function calcular(){
    let n1, n2, n3, definitiva, estado;
    n1=parseFloat(document.getElementById('n1').value);
    n2=parseFloat(document.getElementById('n2').value);
    n3=parseFloat(document.getElementById('n3').value);
    definitiva=(n1+n2+n3)/3;
    document.getElementById('c').value=definitiva;
    if (definitiva>=1.0 && definitiva<=2.5){
        estado="REPROBADO";
    } else if (definitiva>=2.6 && definitiva<=3.4){
        estado= "Habilitar";
    } else if (definitiva>=3.5 && definitiva<=4.0){
        estado="Aceptable";
    } else if (definitiva>=4.1){
        estado="Excelente";
    } else {
        estado="VALOR ERRONEO";
    }
    document.getElementById('c').value=estado;
    document.getElementById('d').value=definitiva;
}