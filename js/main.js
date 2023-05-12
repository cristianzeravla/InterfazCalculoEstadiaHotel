function Operaciones(){
    let nro1 = parseInt(document.getElementById("numero1").value);
    let nro2 = parseInt(document.getElementById("numero2").value);
    let nro3 = parseInt(document.getElementById("numero3").value);
    let resultado = 0;
    resultado = nro1 * nro2 * nro3;
    
    document.getElementById("resultado").value = resultado;

}