$('document').ready(readyNow);

function readyNow(){
  $('#btn__create').on('click', addDiv);
}

// Click counter
let counter = 0;

function addDiv(){
  // Update counter
  counter++;
  let newDiv = $(
  `<div class="div__new div--red">
    <p>${counter}</p> 
    <button>Swap</button>
    <button>Delete</button>          
  </div>`);
  $('#container__div').append(newDiv);


}