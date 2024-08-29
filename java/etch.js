const container = document.querySelector('.container');




function createDiv(){
  let choice = prompt("how many squares dou you want to make?");
  
  if(choice > 0) {
    for (let i = 0; i < choice; i++){
      let mult = document.createElement('div');
      mult.classList.add("cake");
    
      container.appendChild (mult) ;
      mult.addEventListener('mouseenter',()=>{
        mult.classList.add("pony");
      } );
    
      mult.addEventListener ('mouseleave', ()=>{
        setTimeout(()=>{mult.classList.add("clown")}, 1000)
    });
    }
  }

  else {
    for (let i = 0; i < 256; i++){
      let mult = document.createElement('div');
      mult.classList.add("cake");
    
      container.appendChild (mult) ;
      mult.addEventListener('mouseenter',()=>{
        mult.classList.add("pony");
      } );
    
      mult.addEventListener ('mouseleave', ()=>{
        setTimeout(()=>{mult.classList.add("clown")}, 1000)
    });
    }
  }
}












 
