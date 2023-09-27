function getMaxGifts(giftsCities, maxGifts, maxCities) {

  return giftsCities
    .sort((a, b) => b - a)
    .reduce((total, num) => {
      if (!maxCities || total + num > maxGifts || total + num === maxGifts - 1){
        return total;
      } 
      maxCities -= 1;
      return (total += num);
    }, 0);
}

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3));
// console.log(getMaxGifts([], 0, 0));
// console.log(getMaxGifts([50], 15, 1));
// console.log(getMaxGifts([50], 100, 1));
// console.log(getMaxGifts([50, 70, 30], 100, 2));
// console.log(getMaxGifts([50, 70, 30], 100, 3));
// console.log(getMaxGifts([50, 70, 30], 100, 4));
// console.log(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000));
// console.log(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4));

