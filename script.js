
const body = document.querySelector(".body");
const windowWidth = window.innerWidth;
const player = document.querySelector(".player");
document.addEventListener("DOMContentLoaded",function(e){
   if(windowWidth > 600){
      body.classList.remove("error");
   }
   else{
      alert("Переверните устройство");
      body.classList.add("error");
   }
})

document.addEventListener("click", function(e){
   console.log('good',e.target)
   let targetE=e.target;
   player.classList.add("shoot");
   setTimeout(() => {
      player.classList.remove("shoot");
   }, 300);
  if(e.target.classList.contains('enemy') || e.target.classList.contains('enemy-img')){
     console.log("Вери гууд");
     let enemy= targetE.closest(".enemy");
     enemy.remove()
   //сделай рандомный генератор врагов
  }
})


function spawnMob(){
   //делай спавн по innerWindow и там -50 +50 ну ты понял
}