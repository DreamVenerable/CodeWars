function countSheeps(arrayOfSheep) {
    let numOfSheep = 0
    arrayOfSheep.forEach(sheep => sheep ? numOfSheep++ : numOfSheep)  
    return numOfSheep
  }