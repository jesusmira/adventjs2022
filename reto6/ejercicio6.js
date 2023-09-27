function createCube(size) { 
  let top =[];
  let bottom =[];
  
  for (let index = 1; index <= size; index++) {
    top.push(' '.repeat(size-index) + '/\\'.repeat(index) + '_\\'.repeat(size));    
  }
  for (let index = size; index >= 1; index--) {
    bottom.push(' '.repeat(size-index) + '\\/'.repeat(index) + '_/'.repeat(size));    
  }

  top = top.toString().replace(/\,/g,'\n');
  bottom = bottom.toString().replace(/\,/g,'\n');

  return top +'\n' + bottom;
  
  }

console.log(createCube(2));