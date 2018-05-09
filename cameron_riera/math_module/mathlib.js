module.exports = () => { // syntax --*   () => {}   *-- is the EXACT SAME as --*   function() {}   *--
return {
    add: (num1, num2) => {
        let result = num1 + num2;
        console.log(result);
    },
    multiply: (num1, num2) => {
        let result = num1 * num2
        console.log(result);
    },
    square: (num) => {
        let result = num * num
        console.log(result);
    },
    random: (min, max) => {
        let result = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(result);
    }
}
};