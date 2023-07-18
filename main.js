//output elements
const output_year = document.querySelector('.output-year');
const output_month = document.querySelector('.output-month');
const output_day = document.querySelector('.output-day');
//input elements
let isValid = false;
const input_year = document.querySelector('#year');
const input_month = document.querySelector('#month');
const input_day = document.querySelector('#day');
const submit_btn = document.querySelector('.submit-btn')
//error elements
const error_year = document.querySelector('.error-year');
const error_month = document.querySelector('.error-month');
const error_day = document.querySelector('.error-day');

input_day.addEventListener('input', (e) => {
    if (+input_day.value > 31 || (+input_day.value < 0)) {
        error_day.textContent = 'Must be a valid date';
        isValid = false;
        return;
    } else {
        isValid = true;
        error_day.textContent = '';
    }
    if (+input_day.value === 0) {
        isValid = false;
        error_day.textContent = 'This field is required';
        return
    }
})

input_month.addEventListener('input', (e) => {
    if (+input_month.value > 12 || (+input_month.value < 0)) {
        error_month.textContent = 'Must be a valid date';
        isValid = false;
        return;
    } else {
        isValid = true;
        error_month.textContent = '';
    }
    if (+input_month.value === 0) {
        isValid = false;
        error_month.textContent = 'This field is required';
        return
    }
})

input_year.addEventListener('input', (e) => {
    if(+input_year.value > 2023 || (+input_year.value < 0)){
        error_year.textContent = 'Must be a valid date';
        isValid = false;
        return;
    }else{
        isValid = true;
        error_year.textContent = '';
    }
    if(+input_year.value === 0){
        isValid = false;
        error_year.textContent = 'This field is required';
        return
    }
})

submit_btn.addEventListener('click', calculateDate)

function calculateDate(){
    if(isValid){
        let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
        console.log(birthday)
        let birthdayObj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill)
        let ageYear = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDate() - 1;
        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYear;
    }else{
        alert("error")
    }
}