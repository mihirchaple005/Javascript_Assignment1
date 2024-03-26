function getUniqueNumbers(numbers) {
    return numbers.reduce((acc, num) => {
        if (!acc.includes(num)) {
            acc.push(num);
        }
        return acc;
    }, []);
}


const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 7, 8, 9, 1];
const uniqueNumbers = getUniqueNumbers(numbers);
console.log("Unique numbers:", uniqueNumbers);
