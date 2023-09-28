function getGiftsToRefill(a1, a2, a3) {
    //10 puntos
    // let datas = [];
    // datas.push(a1);
    // datas.push(a2);
    // datas.push(a3);
    // let products = new Set([...a1, ...a2, ...a3]);
    // let gifts = [];
    // products.forEach( gift => {
    //   let elemnets =0;
    //   datas.forEach( data => {
    //     if ( data.indexOf(gift) === -1) {
    //       elemnets++;
    //     }
    //   })
    //   if( elemnets > 1){
    //     gifts.push(gift);
    //   }
    // })
    // return gifts;
    // 200 puntos
    return [
      ...new Set([...a1, ...a2, ...a3])]
        .filter(gift => 
          a1.includes(gift) + 
          a2.includes(gift) + 
          a3.includes(gift) 
          === 1
      )
  }


  const a1 = ['bici', 'coche', 'bici', 'bici']
  const a2 = ['coche', 'bici', 'muñeca', 'coche']
  const a3 = ['bici', 'pc', 'pc']

  console.log(getGiftsToRefill(a1, a2, a3));