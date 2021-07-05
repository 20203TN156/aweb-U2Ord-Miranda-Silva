function saveNote(){

    var nota = document.getElementById("nota").value; 
    
    var body = document.getElementsByTagName("body")[0];
    var col = document.getElementById("tvNote");
    
    var f = new Date();
    var divCard = document.createElement("div")
    var divCarBody = document.createElement("div")
    var blockquote = document.createElement("blockquote");
    var p = document.createElement("p");
    var footer = document.createElement("footer");
    var br = document.createElement("br");
    var texto = document.createTextNode(nota);
    var txtFecha = document.createTextNode(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear() + ", " + f.getHours() + ":" + f.getMinutes() + " h");
    divCard.setAttribute("style", "margin-top: 1em;");
    
    
    col.appendChild(divCard);
    divCard.setAttribute("class", "card bg-light");
    
    divCard.appendChild(divCarBody);
    divCarBody.setAttribute("class", "card-body");
    
    divCarBody.appendChild(blockquote);
    blockquote.setAttribute("class", "blockquote");
    
    blockquote.appendChild(p);
    p.appendChild(texto);
    
    blockquote.appendChild(footer);
    footer.setAttribute("class", "blockquote text-right");
    footer.appendChild(txtFecha);
    
    }