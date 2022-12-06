function addNumber(){
  let num1  = document.getElementById("n1");
  let num2 = document.getElementById("n2");
  let result = document.getElementById("result");
  console.log( parseInt(num1.value)+parseInt(num2.value))
  result.value = parseInt(num1.value)+parseInt(num2.value);;
}