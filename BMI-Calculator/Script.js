const Form = document.querySelector("form");

Form.addEventListener('submit' ,function(e){

    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    console.log(height);
    console.log(weight);
    console.log(result);

    

    if(height === "" || height <= 0 || isNaN(height)){
        result.innerHTML = "<h1>Please Enter Valid Height</h1>"
    }else if(weight === "" || weight <= 0 || isNaN(weight)){
        result.innerHTML = "<h1>Please Enter Valid weight</h1>"
    }else{
        const BMI = (weight*((height*height)/10000)).toFixed(2);

        if(BMI < 18.6){
            result.innerHTML = `<h1>Under Weight. BMI : ${BMI}</h1>`;
        }else if(BMI <= 24.6){
            result.innerHTML = `<h1 style = "background-color : green;">Normal Weight. BMI : ${BMI}</h1>`;
        }if(BMI > 24.6){
            result.innerHTML = `<h1>Over Weight. BMI : ${BMI}</h1>`;
        }
    }
})
