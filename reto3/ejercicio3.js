function distributeGifts(packOfGifts, reindeers) {

  let packs = 0, reindeer = 0;
  packOfGifts.map( pack => {
    packs += pack.length
  })
  reindeers.map( reno => {
    reindeer += (2 * reno.length)
  })
  return Math.floor( reindeer/packs);    
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

const packOfGifts2 = ['game', 'videoconsole', 'computer']
const reindeers2 = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']

console.log(distributeGifts(packOfGifts, reindeers));
console.log(distributeGifts(packOfGifts2, reindeers2));

distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])
distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])

