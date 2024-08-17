function saveData(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if (internetSpeed>4){
            resolve("Success");
        }
        else{
            reject("Failure");
        }
    });

}   
    //then() & catch()

    // let request = saveData("shanush");

    // request.then(()=>{
    //     console.log("Promise Resolved!");
    //     console.log(request);
    // })
    // .catch(()=>{
    //     console.log("Promise Rejected!");
    //     console.log(request);
    // });

    // saveData("HEY")
    // .then(()=>{
    //     console.log("Promise Resolved!");
    //     console.log(request);
    // })
    // .catch(()=>{
    //     console.log("Promise Rejected!");
    //     console.log(request);
    // });

    //Promise Chaining

    saveData("Drowsey1")
    .then(()=>{
        console.log("Data 1 Resolved!");
        return saveData("drowsey2")
    })
    .then(()=>{
        console.log("Data 2 Resolved");
        return saveData("drowsey3");
    })
    .then(()=>{
        console.log("Data 3 Resolved");
        return saveData("drowsey4");
    })

    .catch(()=>{
        console.log("Promise Rejected")
    })

