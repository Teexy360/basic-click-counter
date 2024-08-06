let number = '0'

//FUNCTION TO REMOVE
function remove(){
  if(number > 0){
   number--
   document.getElementById('number').innerHTML = number
  }
 }

//FUNCTION TO RESET
function reset(){
  number = 0
  document.getElementById('number').innerHTML = number
}

//FUNCTION TO ADD
function add(){
  number++
  document.getElementById('number').innerHTML = number
}
