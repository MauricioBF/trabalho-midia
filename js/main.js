document.getElementById("Cadrasto").style.display = "none";
document.getElementById("cadastrar").style.display = "block";
document.getElementById("Del").style.display = "none";
document.getElementById("Deletar").style.display = "block";
let vnome = new Array();
let vqt = new Array();
let vurl = new Array();
function cad() {
    let x = document.getElementById("Cadrasto");
    let y = document.getElementById("cadastrar");
    let w = document.getElementById("Deletar");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        w.style.display = "none";
    } 
    else {
        x.style.display = "none";
        y.style.display = "block";
        w.style.display = "block";
    }
}
function Delcad() {
    let x = document.getElementById("Del");
    let y = document.getElementById("cadastrar");
    let w = document.getElementById("Deletar");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        w.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        w.style.display = "block";
    }
}
function contruir(){
    let test = true;
    let nome = document.getElementById("nome").value;
    let qt = document.getElementById("qt").value;
    let url = document.getElementById("url").value;
    if(nome === "" || qt === "" || url === ""){
        alert("Dados invalidos!");
        test = false;
    }
    for(i = 0;vnome.length-1>=i;i++){
        if (nome === vnome[i]){
            test = false;
            if(vnome.length != 0){
                alert("Nome Duplicado!");
            }
        }
    }
    if (test){
        vnome.push(nome);
        vqt.push(qt);
        vurl.push(url);
        cad();
        addDiv();
    }
}
function Delcontruir(){
    let test = false;
    let pos = 0;
    let nome = document.getElementById("deletename").value;
    if(nome === ""){
        alert("Dado invalido!");
        test = false;
    }
    for(i = 0;vnome.length-1>=i;i++){
        if (nome === vnome[i]){
            if(vnome.length != 0){
                test = true;
                pos = i;
            }
        }
    }
    if (test === false){
        alert("Dado invalido!");
    }
    if (test){
        let vnomet = new Array();
        let vqtt = new Array();
        let vurlt = new Array();
        let c = 0;
        for(i = 0;vnome.length-1>=i;i++){
             if (pos != i){
                c+=i;
                vnomet[c] = vnome[i];
             }
            else{
                c-=1;
            }
        }
        c= 0;
        for(i = 0;vqt.length-1>=i;i++){
             if (pos != i){
                c+=i;
                vqtt[c] = vqt[i];
             }
            else{
                c-=1;
            }
        }
        c = 0;
        for(i = 0;vurl.length-1>=i;i++){
             if (pos != i){
                c+=i;
                vurlt[c] = vurl[i];
             }
            else{
                c-=1;
            }
        }
        vnome =vnomet;
        vqt = vqtt;
        vurl = vurlt;
        Delcad();
        addDiv();
    }
}
function remove(){
    let myNode = document.getElementById("series");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}
function addDiv() {
    remove();
    for (i = 0;vnome.length-1>=i;i++){
        let objTo = document.getElementById("series");
        let divtest = document.createElement("div");
        divtest.innerHTML = vnome[i];
        divtest.style.marginTop = "5%";
        objTo.appendChild(divtest);
        let x = document.createElement("IMG");
        let urltext = vurl[i];
        x.setAttribute("src", urltext);
        x.setAttribute("width", "50%");
        x.setAttribute("height", "50%");
        objTo.appendChild(x);
        objTo = document.getElementById("series");
        divtest = document.createElement("div");
        divtest.innerHTML = "Numero de temporadas: "+vqt[i];
        objTo.appendChild(divtest);
    }
}