let gender = ["Male", "Female"];

let deep_copy = (arr) => { 
    copied = [...gender]
    copied.push(gender)
    return copied
}

let name = "Victor";

console.log([...name]);

console.log(deep_copy(gender));