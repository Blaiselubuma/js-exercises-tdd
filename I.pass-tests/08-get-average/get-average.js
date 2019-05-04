// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function calculAverage(numbers){
    if (typeof numbers === number) {
        const addAllNumber = (accumulator, currentValue) => accumulator + currentValue; 
        var Sum = numbers.reduce(addAllNumber) ;
        var longueur  = numbers.length ;
        var Average = Sum / longueur
        return Average ;
    } 
 
}