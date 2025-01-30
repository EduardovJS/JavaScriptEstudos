// Eventos onclick
// onclick - Disparado quando recebe um clique. 
// ondblclick - Disparado quando tem clique duplo.
// onmouseover - Disparado quando o mouse está sobre. 
// onmouseout - Disparado quando o mouse é movido para fora do elemento.
// onmousemove - Disparado quando o mouse é movido no elemento.
// onmouseup - Disparado no momento em que o botão do mouse é solto
// onmousedown - Disparado no momento em que o botão do mouse é pressionado

//onclick
function EventoClick(){
    alert("evento de click");
    document.body.style.backgroundColor = "yellow";
}

//dblclick
function EventoDblClick(){
    alert("evento de click duplo");
}

// Eventos onfocus - Elementos com base em inputs 
// onfocus - Disparado quando o elemento é focado.
// onchanger - Disparado quando existe uma mudança no conteudo. "Ao mudar".
// onblur - Disparado quando o elemento perde o foco. 
// onkeydown - Disparado quando uma tecla é pressionada. 
// onkeypress - Disparado quando uma tecla é pressionada e solta. 
// onkeyup - Disparada quando uma tecla é solta sobre um elemento.
// onload - Disparada quando a página terminou de ser carrega no body.
// onresize - Disparada quando há um redimencionamento da janela. 

function limpaTexto(){
    document.getElementById("campoTexto").value = "";
}



