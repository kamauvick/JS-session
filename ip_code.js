let days_of_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let masculine_names = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let feminine_names = ["Akosua", "Adowoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let gender;
let raw_year, CC, MM, DD, YY, day_of_week;

let result_data = document.getElementById('result');

//Tailwind CS
//Bulma
//animate

function getInput(){
    raw_year = document.getElementById("year").value;
    YY = raw_year.slice(0,2);
    CC = raw_year.slice(2, 4);
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("day_of_month").value);

    console.log(`${CC}`);
    console.log(`${YY}`);
    console.log(`${MM}`);
    console.log(`${DD}`);
}

function calculateBirthday(){
    getInput();
    day_of_week = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7 ;
    day_of_week = Math.floor(day_of_week);
    console.log(`Day of the week: ${day_of_week}`);
    checkGender();
}

function checkGender(){
    let radios = document.getElementsByName("radio");
    if(radios[0].checked == true) {
        gender = "Male";
    }else if(radios[1].checked == true){
        gender = "Female";
    }else{
        console.log("none is checked");
    }

    if(gender == "Male"){
        if(day_of_week == 0){
            result_data.innerHTML = `The day of the week is ${days_of_week[0]} and your Akan name is ${masculine_names[0]}`;
        }else if(day_of_week == 1||day_of_week == -1){
            result_data.innerHTML = `The day of the week is ${days_of_week[1]} and your Akan name is ${masculine_names[1]}`;
        }else if(day_of_week = 2 || day_of_week == -2){
            result_data.innerHTML = `The day of the week is ${days_of_week[2]} and your Akan name is ${masculine_names[2]}`;
        }else if(day_of_week = 3 || day_of_week == -3){
            result_data.innerHTML = `The day of the week is ${days_of_week[3]} and your Akan name is ${masculine_names[3]}`;
        }else if(day_of_week = 4 || day_of_week == -4){
            result_data.innerHTML = `The day of the week is ${days_of_week[4]} and your Akan name is ${masculine_names[4]}`;
        }else if(day_of_week = 5 || day_of_week == -5){
            result_data.innerHTML = `The day of the week is ${days_of_week[5]} and your Akan name is ${masculine_names[5]}`;
        }else if(day_of_week = 6 || day_of_week == -6){
            result_data.innerHTML = `The day of the week is ${days_of_week[6]} and your Akan name is ${masculine_names[6]}`;
        }else if(day_of_week = 7 || day_of_week == -7){
            result_data.innerHTML = `The day of the week is ${days_of_week[7]} and your Akan name is ${masculine_names[7]}`;
        }
    }else if(gender = 'female'){
        if(day_of_week == 0){
            result_data.innerHTML = `The day of the week is ${days_of_week[0]} and your Akan name is ${feminine_names[0]}`;
        }else if(day_of_week == 1 ||day_of_week == -1){
            result_data.innerHTML = `The day of the week is ${days_of_week[1]} and your Akan name is ${feminine_names[1]}`;
        }else if(day_of_week = 2 || day_of_week == -2)
            result_data.innerHTML = `The day of the week is ${days_of_week[2]} and your Akan name is ${feminine_names[2]}`;
        }else if(day_of_week = 3 || day_of_week == -3){
            result_data.innerHTML = `The day of the week is ${days_of_week[3]} and your Akan name is ${feminine_names[3]}`;
        }else if(day_of_week = 4 || day_of_week == -4){
            result_data.innerHTML = `The day of the week is ${days_of_week[4]} and your Akan name is ${feminine_names[4]}`;
        }else if(day_of_week = 5 || day_of_week == -5){
            result_data.innerHTML = `The day of the week is ${days_of_week[5]} and your Akan name is ${feminine_names[5]}`;
        }else if(day_of_week = 6 || day_of_week == -6){
            result_data.innerHTML = `The day of the week is ${days_of_week[6]} and your Akan name is ${feminine_names[6]}`;
        }else if(day_of_week = 7 || day_of_week == -7){
            result_data.innerHTML = `The day of the week is ${days_of_week[7]} and your Akan name is ${feminine_names[7]}`;
        }
    }








