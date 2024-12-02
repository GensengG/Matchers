export function charactersSort(array) {
    const data = array.sort((a, b) => a.health > b.health ? 1 : -1);
  
    return data;
} 
