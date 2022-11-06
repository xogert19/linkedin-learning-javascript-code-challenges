const numberOfCoffies = [2, 3, 1, 5];

const getTotalBill = (numberOfCoffies, pricePerCoffie = 1.25) => {
    const totalNumberOfCoffies = numberOfCoffies.reduce((accumValue, currValue) => accumValue + currValue, 0);

    const totalBill = totalNumberOfCoffies * pricePerCoffie;

    return `The total bill is ${totalBill}.`;
}