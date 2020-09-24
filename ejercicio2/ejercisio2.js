const $ingresar = document.querySelector("#ingresar");
const $nombreUsuario = document.querySelector("#nombre-usuario");
console.log($nombreUsuario.value)
console.log($ingresar);



$ingresar.onclick = function() {
    let $h1 = document.querySelector("#resultado");
    let $edadUsuario = document.querySelector("#edad-usuario");
    //$h1.textContent = $h1.textContent + " " + $nombreUsuario.value + " " + "tenes "+ $edadUsuario.value+" años"
    $h1.textContent=`${$h1.textContent} ${$nombreUsuario.value} tenes ${$edadUsuario.value} años `
    console.log($h1.textContent)

  
}