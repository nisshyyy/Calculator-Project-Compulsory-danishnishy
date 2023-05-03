//add func
function add(){
  const firstNum = parseFloat(prompt("Enter the first number:"))
  const secNum = parseFloat(prompt("Enter the second number:"))
  const result = firstNum + secNum
  alert(`The result of your addition is: ${firstNum} + ${secNum} = ${result}`)
}

//subtract func
function subtract(){
  const firstNum = parseFloat(prompt("Enter the first number:"))
  const secNum = parseFloat(prompt("Enter the second number:"))
  const result = firstNum - secNum
  alert(`The result of your subtraction is: ${firstNum} - ${secNum} = ${result}`)
}

//multiply func
function multiply(){
  const firstNum = parseFloat(prompt("Enter the first number:"))
  const secNum = parseFloat(prompt("Enter the second number:"))
  const result = firstNum*secNum
  alert(`The result of your multiplication is: ${firstNum} x ${secNum} = ${result}`)
}

//divide func
function divide(){
  const firstNum = parseFloat(prompt("Enter the numerator:"))
  const secNum = parseFloat(prompt("Enter the denominator:"))
  const result = firstNum/secNum
  alert(`The result of your division is: ${firstNum} ÷ ${secNum} = ${result}`)
}