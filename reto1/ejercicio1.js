/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
function wrapping(gifts) {

    let result = [];

    gifts.map( gift => {

        let paper ='**';
        for (let i = 0; i < gift.length; i++) {
            paper = paper + '*';            
        }
        result.push( `${ paper }\n*${ gift }*\n${ paper }`)
        return gift
    });

    return result
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
