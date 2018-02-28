{

// var heightInches = document.getElementById('heightInchesInput');
// var heightFeet = document.getElementById('heightFeetInput');
// var birthday = document.getElementById('birthdayInput');
// var firstName = document.getElementById('nameInput');

const form = document.getElementById('myForm');

function handleFormSubmit(event){
    event.preventDefault();

    const inputDate = document.getElementById('date');
    const myDate = new Date(inputDate.value);

    const feedbackDate = inputDate.nextElementSibling;
    if (isNaN(myDate)){
        inputDate.focus();
        inputDate.value='';
        feedbackDate.hidden = false;
    } else {
        feedbackDate.hidden = true;
    }

    //console.log('Form Submitted', event);
    console.group('Selecyed Date Information');
    console.log('myDate: ${myDate}');

    console.log('Month: ${myDate.getUTCMonth()}');
    console.log('Day: ${myDate.getUTCDay()}');
    console.log('Year: ${myDate.getUTCFullYear()}');

    console.groupEnd();

    const month = myDate.getUTCMonth();
    const day = myDate.getUTCDay();
}

form.addEventListener('submit', handleFormSubmit, false);

//function that check if height is within categories an assigns it to heights 1-5

//function random number generator

//function that loads the correct wand length based on random and height

//function that saves your name and loads it in text that says "____ your wand is:"

//function that takes the date and corresponds it to signs

//function that loads specific wand based on each sign



// if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
//     AstroSign = "Cap";
//   } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
//     AstroSign = "Sag";
//   } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
//     AstroSign = "Sco";
//   } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
//     AstroSign = "Lib";
//   } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
//     AstroSign = "Vir";
//   } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
//     AstroSign = "Leo";
//   } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
//     AstroSign = "Can";
//   } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
//     AstroSign = "Gem";
//   } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
//     AstroSign = "Tau";
//   } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
//     AstroSign = "Ari";
//   } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
//     AstroSign = "Pis";
//   } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
//     AstroSign = "Aqu";
//   }



}