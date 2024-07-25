
function calcular() {
    let strB = (document.getElementById("valorB").value)
    let strH = (document.getElementById("valorH").value)
    
    if (strB===""){
        warning("Valor b en blanco");
    } else if(strH===""){
        warning("Valor h en blanco");
    }else {
        
    if (strB <=0) {
        warning("Valor ingresado en b debe ser mayor que 0")
    } else if(strH <= 0){
        warning("Valor ingresado en h debe ser mayor que 0")
    }else{
        let vResultado = strB * strH;      

            document.getElementById("valorResultado").value = vResultado     
            check("Cáculo realizado con éxito")   
    }     
}

}

function limpiar(){
    document.getElementById("valorB").value=""
    document.getElementById("valorH").value=""
    document.getElementById("valorResultado").value=""
    check("Se han limpiado los campos")
}

function warning(mensaje){
    Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: mensaje,
      });
}

function check(mensaje2){
Swal.fire({
    position: "top-end",
    icon: "success",
    title: mensaje2,
    showConfirmButton: false,
    timer: 1500
  });
}