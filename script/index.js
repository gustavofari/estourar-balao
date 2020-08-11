var numero = 0
function addBall(){
        var bola = document.createElement("div")
        bola.setAttribute("class","ball")
        var cor = ["blue","red","black","yellow","brown","gray","green"]
        var umdois = Math.floor(Math.random() * 6)
        var p1 = Math.floor(Math.random() * 1200)
        var p2 = Math.floor(Math.random() * 600)
        bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-color:"+cor[umdois]+";")
        bola.setAttribute("onclick","estourar(this)")
        document.body.appendChild(bola)
        var point = document.getElementById("points")
        point.innerHTML = `Pontos: ${numero}`
 }
function estourar(elemento){
    numero += 10
    document.body.removeChild(elemento)
}
function iniciar(){
    setInterval(addBall, 500);
}