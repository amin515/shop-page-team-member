
/**
 * // data sent to LocalStorage
 * @param {*} key 
 * @param {*} arr 
 */


function dataSend(key, arr){

    let data = JSON.stringify(arr)
    localStorage.setItem(key , data)

};

/**
 * // get data from localstoreage
 * @param {*} key 
 * @returns 
 */

function getData(key){
let data = localStorage.getItem(key)

return data ? JSON.parse(data) : false

}




