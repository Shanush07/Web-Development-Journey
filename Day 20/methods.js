const student={
    name: "shanush",
    age: 19,
    eng: 97,
    math: 98,
    phy: 99,
    
    //1st way of defining a func
    avg: function(){
        console.log(`The average is ${(this.eng+this.math+this.phy)/3}`);
    },

    //2nd way
    avg2_0(){
        console.log(this);
        console.log(`${this.name} got average of ${(this.eng+this.math+this.phy)/3}`);
    }
};

student.avg();
student.avg2_0();

function myFunc(){
    console.log("Using 'this' in Function");
    return this;
}

console.log(myFunc());