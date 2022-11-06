const factorial = (n) => n <= 0 ? 1 : n * factorial(n - 1);

const getNumberOfCombinations = (word) => {
    return factorial(word.length);
}

console.log(getNumberOfCombinations("hello"));