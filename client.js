$('document').ready(readyNow);

function readyNow() {
  addDiv();
  swapColors();
  deleteDiv();
}

// Instatiate counter
let counter = 0;

function addDiv() {
  $('#btn__create').on('click', function () {
    // Update counter
    counter++;
    // Add new div
    let newDiv = $(
      `<div class="div__new div--red">
        <p>${counter}</p> 
        <button class="btn__swap">Swap</button>
        <button class="btn__delete">Delete</button>          
      </div>`);
    $('#container__div').append(newDiv);
  });
}

function deleteDiv(){
  $('#container__div').on('click', '.btn__delete', function(){
    $(this).parent().remove();
  });
}

function swapColors() {
  $('#container__div').on('click', '.btn__swap', function () {
    $(this).parent().toggleClass('div--red');
    $(this).parent().toggleClass('div--yellow');
  });
}