function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }    
        
        
        
        
        
        
        
        
        
        function rand(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            
        function aleatorio(){
            var num = rand(0,7);
            return num
        }

function imagens(){
        
let imagens = ["Design sem nome", "Design sem nome (1)", "Design sem nome (2)", "Design sem nome (3)", "Design sem nome (4)", "Design sem nome (5)", "Design sem nome (6)", "Design sem nome (7)"]

document.querySelector('#div1').innerHTML = ` <img src="img/${imagens[aleatorio()]}.png" draggable="true" ondragstart="drag(event)" id="drag0" width="88" height="31">`
}