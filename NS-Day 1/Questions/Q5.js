/*Qs5. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object.*/

let object1 = {
    key11:11,
    key12:12,
};

let object2 = {
    key21:21,
    key22:22,
};

function mergeObjects(object1,object2){
    return {...object1,...object2}
}

console.log(mergeObjects(object1,object2));
