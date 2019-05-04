function addNumbers(numbers) {
const addAllNumber = (accumulator, currentValue) => accumulator + currentValue;
return numbers.reduce(addAllNumber)
}
module.exports = addNumbers;
