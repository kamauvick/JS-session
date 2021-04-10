
//get name | gender|

let gender = ["Male", "Female"];

//Normal functions
function getName(n){
    return n;
}
function getGender(g){
    if(g === "M"){
        return gender[0];
    }else{
        return gender[1];
    }
}


name = getName("Vick");
myGender = getGender("M");

console.log(`name: ${name} `);
console.log(`Gender: ${myGender}`);




