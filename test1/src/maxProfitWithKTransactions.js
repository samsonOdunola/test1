function maxProfitWithKTransactions(prices, k) {
  // Write your code here.
  let smallestNum = Math.min(...prices);
  let biggestNum = Math.max(...prices);

  if (k === 1) {
    let maxProfit = biggestNum - smallestNum;
    console.log(`${maxProfit}/Buy:${smallestNum},Sell:${biggestNum}`);
  } else if (k > 1) {
    let mainArray = [];
    prices.map((price, index) => {
      if (
        prices[index + 1] > price &&
        !mainArray.flat().includes(prices[prices.length - 1])
      ) {
        let array = [price];

        let n = 1;
        while (prices[index + n] > price) {
          array.push(prices[index + n]);
          n += 1;
        }
        mainArray.push(array);
      }
    });
    console.log(mainArray);
    mainArray.map((array) => {
      let smallestNum = Math.min(...array);
      let biggestNum = Math.max(...array);
      let maxProfit = biggestNum - smallestNum;
      return `Profit:${maxProfit},Buy:${smallestNum},Sell:${biggestNum}`;
    });
  }
}

// Do not edit the line below.
exports.maxProfitWithKTransactions = maxProfitWithKTransactions;
