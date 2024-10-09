const form = document.querySelector(".form");

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const result = document.querySelector("#result")

    if(height < 0 || height == '' || isNaN(height)){
        result.innerHTML = 'Please enter valid height';
    }
    else  if(weight < 0 || weight == '' || isNaN(weight)){
        result.innerHTML = 'Please enter valid weight';
    }
    else{
        let bmi = (weight/ ((height*height)/10000)).toFixed(2); 
        result.innerHTML =`<span>${bmi}</span>`
    }
});