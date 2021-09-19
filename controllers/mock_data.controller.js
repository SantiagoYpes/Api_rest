const { ejecutarSql } = require('../services/postgres.service');

//Función para consultar pokemones
const consultar_pokemones = async () => {
    const sql = "SELECT * FROM mock_data"
    const datos = []
    let respuesta_db = await ejecutarSql(sql, datos)
    return respuesta_db.rows
}

//Aqui implementamos el quick sort para ordenar el ataque de los pokemones, del menor al mayor
const quicksort_pokemones = async () => {
    const sql = "SELECT ataque FROM mock_data"
    const datos = []
    let respuesta_db = await ejecutarSql(sql, datos)
    let array=respuesta_db.rows
    let newarray=[]
    for (let index = 0; index < array.length; index++) {
        act=array[index]
        newarray.push(parseInt(act.ataque))
        
    }
    let quickSort_pok= await quickSort(newarray, 0, newarray.length-1)
    return newarray
}





const swap = (items, left_position, rigth_position) => {
    const temp = items[left_position];
    items[left_position] = items[rigth_position];
    items[rigth_position] = temp;
  };
  
  /**
   *
   * @param {*} items
   * @param {*} left_position
   * @param {*} rigth_position
   */
  const partition = (items, left_position, rigth_position) => {
    let pivot_value = items[Math.floor((left_position + rigth_position) / 2)];
  
    let i = left_position;
    let j = rigth_position;
  
    while (i <= j) {
      while (items[i] < pivot_value) {
        i++;
      }
      while (items[j] > pivot_value) {
        j--;
      }
      if (i <= j) {
        //Intercambiar las posiciones
        swap(items, i, j);
        i++;
        j--;
      }
    }
    return i;
  };
  
  //Este es el método quick sort, que ordena números
  const quickSort = async (items, left_position, rigth_position) => {
    if (items.length > 1) {
      let index = partition(items, left_position, rigth_position);
      console.log(index, left_position, rigth_position);
      if (left_position < index - 1) {
        quickSort(items, left_position, index - 1);
      }
      if (index < rigth_position) {
        quickSort(items, index, rigth_position);
      }
    }
    return items;
  };
  

module.exports = {consultar_pokemones,quicksort_pokemones}