async function greet() {
    // throw "Errorrrr";
    return "hello World";
}

greet()
.then((result)=>{
    console.log("Promise Resolved! \nresult: "+result);
})
.catch((result)=>{
    console.log("Promise Rejected! \nresult: "+result);
});

