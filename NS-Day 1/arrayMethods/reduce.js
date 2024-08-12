let nums = [21, 23, 31, 42, 15];
let finalValue = nums.reduce((res, el) => {
  return res + el;
});
console.log("Sum Value = "+finalValue);
//To find max value
let maxValue = nums.reduce((res,el)=>{
    if(el>res){
        return el;
    }
    else{
        return res;
    }
})
console.log("Max Value = "+ maxValue);