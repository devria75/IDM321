{
const form = document.getElementById('myForm');
var AstroSign = "none";

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
    // console.group('Selecyed Date Information');
    // console.log('myDate: ' + myDate);

    // console.log('Month: '+ myDate.getUTCMonth());
    // console.log('Day: '+myDate.getUTCDate());
    // console.log('Year: '+myDate.getUTCFullYear());

    // console.groupEnd();

    const month = myDate.getUTCMonth();
    const day = myDate.getUTCDate();

    console.log('is month and day variable correct (month-1)?')
    console.log(month);
    console.log(day);

    console.log('sending correct month and day variable to loadSign');
    loadSign(myDate, month, day);
}

form.addEventListener('submit', handleFormSubmit, false);

function loadSign(date, month, day){
    //use Assign Zodiac to find which sign it is based on the date
    console.log('running assignZodiac giving month and day');
    var mySign = assignZodiac(month, day);

    //use displaySign to reveal the appropriate information in the wandDetails field
    console.log('displaying sign');
    displaySign(mySign);
}

function assignZodiac(month, day){
    var whichMonth = month;
    var whichDayOfMonth = day;

    console.log('Assign Zodiac month and day');
    console.log(whichMonth);
    console.log(whichDayOfMonth);

    if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 0 && whichDayOfMonth <= 19)) {
        AstroSign = "Cap";
      } else if ((whichMonth == 10 && whichDayOfMonth >= 22) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "Sag";
      } else if ((whichMonth == 9 && whichDayOfMonth >= 24) || (whichMonth == 10 && whichDayOfMonth <= 21)) {
        AstroSign = "Sco";
      } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 23)) {
        AstroSign = "Lib";
      } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "Vir";
      } else if ((whichMonth == 6 && whichDayOfMonth >= 23) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "Leo";
      } else if ((whichMonth == 5 && whichDayOfMonth >= 22) || (whichMonth == 6 && whichDayOfMonth <= 22)) {
        AstroSign = "Can";
      } else if ((whichMonth == 4 && whichDayOfMonth >= 21) || (whichMonth == 5 && whichDayOfMonth <= 21)) {
        AstroSign = "Gem";
      } else if ((whichMonth == 3 && whichDayOfMonth >= 20) || (whichMonth == 4 && whichDayOfMonth <= 20)) {
        AstroSign = "Tau";
      } else if ((whichMonth == 2 && whichDayOfMonth >= 21) || (whichMonth == 3 && whichDayOfMonth <= 19)) {
        AstroSign = "Ari";
      } else if ((whichMonth == 1 && whichDayOfMonth >= 19) || (whichMonth == 2 && whichDayOfMonth <= 20)) {
        AstroSign = "Pis";
      } else if ((whichMonth == 0 && whichDayOfMonth >= 20) || (whichMonth == 1 && whichDayOfMonth <= 18)) {
        AstroSign = "Aqu";
      } else{
          console.log('something went wrong and sign does not correspond to a date listed');
      }

      console.log(AstroSign);
      return AstroSign;
}

function displaySign(sign){
    
    document.getElementById('wandDetails').hidden = false;
    var wand = document.getElementById('wandDetails');

    if (sign === "Cap"){
        var wandDescription = document.createTextNode('10 3/4 inch oak wand with a dragon heartstring core');
        wand.appendChild(wandDescription);
    } else if (sign === "Sag"){
        var wandDescription = document.createTextNode('9 1/2 inch birch wand with a unicorn horn core');
        wand.appendChild(wandDescription);
    } else if (sign === "Sco"){
        var wandDescription = document.createTextNode('8 1/4 inch redwood wand with a pheonix feather core');
        wand.appendChild(wandDescription);
    } else if (sign === "Lib"){
        var wandDescription = document.createTextNode('11 3/4 inch ash wand with a hippogriff hair core');
        wand.appendChild(wandDescription);
    } else if (sign === "Vir"){
        var wandDescription = document.createTextNode('12 1/4 inch hawthorn wand with a veela hair core');
        wand.appendChild(wandDescription);
    } else if (sign === "Leo"){
        var wandDescription = document.createTextNode('9 1/2 inch cherry wand with a mermaid scale core');
        wand.appendChild(wandDescription);
    } else if (sign === "Can"){
        var wandDescription = document.createTextNode('10 3/4th inch cedar wand with a thestral tail-hair core');
        wand.appendChild(wandDescription);
    } else if (sign === "Gem"){
        var wandDescription = document.createTextNode('8 3/4th inch walnut wand with a troll whisker core');
        wand.appendChild(wandDescription);
    } else if (sign === "Tau"){
        var wandDescription = document.createTextNode('11 1/4th inch rosewood wand with a mermaid scale core');
        wand.appendChild(wandDescription);
    } else if (sign === "Ari"){
        var wandDescription = document.createTextNode('12 1/2th inch pine wand with a hippogriff hair core');
        wand.appendChild(wandDescription);
    } else if (sign === "Pis"){
        var wandDescription = document.createTextNode('11 3/4th inch dogwood wand with a dragon heartstring core');
        wand.appendChild(wandDescription);
    } else if (sign === "Aqu"){
        var wandDescription = document.createTextNode('9 1/4th inch ginko wand with dragon a troll whisker core');
        wand.appendChild(wandDescription);
    } else {
        console.log('your wand could not load your wand details');
    }
}



}