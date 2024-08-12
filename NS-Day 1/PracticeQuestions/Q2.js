//Create a function to find the min number in an array
let nums = [11,122,34,12,4]
let minValue = nums.reduce((res,el)=>{
    if(el<res){
        return el;
    }
    else{
        return res;
    }
})
console.log("Min Value = "+ minValue);