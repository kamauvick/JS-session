let gender = ["Male", "Female"];
let name = "Vick";
let myObj;

//Implicit
let my_name = (name, g) => (
    myObj = {
        name: name,
        Gender: g,
    }
)
console.log(my_name(name, gender[0]));

//Explicit
let my_name1 = (name, g) => {
    myObj = {
        name: name,
        Gender: g,
    }
    return myObj;
}
console.log(my_name1(name, gender[1]));


// let func_name = (parameter|args) => { return body_of_the_func} //Explicit
// let func_name = (parameter|args) => ( body_of_the_func) //implicit