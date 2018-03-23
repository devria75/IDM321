{
//--------------------------------------------------------------------------------------
//Form Submission Function
//--------------------------------------------------------------------------------------

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

    const month = myDate.getUTCMonth();
    const day = myDate.getUTCDate();

    loadSign(myDate, month, day);
}

//--------------------------------------------------------------------------------------
//Event Listeners
//--------------------------------------------------------------------------------------

form.addEventListener('submit', handleFormSubmit, false);

var helpIcon = document.getElementById('helpIcon');
helpIcon.addEventListener('mouseover', function() {
    document.getElementById('overlay').hidden = false;
    document.getElementById('helpInfo').hidden = false;
}, false);
helpIcon.addEventListener('mouseout', function() {
    document.getElementById('overlay').hidden = true;
    document.getElementById('helpInfo').hidden = true;
}, false);

{
    //get all wand element ids
    var wand01 = document.getElementById('wand01');
    var wand02 = document.getElementById('wand02');
    var wand03 = document.getElementById('wand03');
    var wand04 = document.getElementById('wand04');
    var wand05 = document.getElementById('wand05');
    var wand06 = document.getElementById('wand06');
    var wand07 = document.getElementById('wand07');
    var wand08 = document.getElementById('wand08');
    var wand09 = document.getElementById('wand09');
    var wand10 = document.getElementById('wand10');
    var wand11 = document.getElementById('wand11');
    var wand12 = document.getElementById('wand12');

    //add event listeners to elements
    wand01.addEventListener('click', function() {
        displaySign("Cap");
    }, false);
    wand02.addEventListener('click', function() {
        displaySign("Sag");
    }, false);
    wand03.addEventListener('click', function() {
        displaySign("Sco");
    }, false);
    wand04.addEventListener('click', function() {
        displaySign("Lib");
    }, false);
    wand05.addEventListener('click', function() {
        displaySign("Vir");
    }, false);
    wand06.addEventListener('click', function() {
        displaySign("Leo");
    }, false);
    wand07.addEventListener('click', function() {
        displaySign("Can");
    }, false);
    wand08.addEventListener('click', function() {
        displaySign("Gem");
    }, false);
    wand09.addEventListener('click', function() {
        displaySign("Tau");
    }, false);
    wand10.addEventListener('click', function() {
        displaySign("Ari");
    }, false);
    wand11.addEventListener('click', function() {
        displaySign("Pis");
    }, false);
    wand12.addEventListener('click', function() {
        displaySign("Aqu");
    }, false);
}

//--------------------------------------------------------------------------------------
//Load Sign (sends to Assign and Display functions)
//--------------------------------------------------------------------------------------

function loadSign(date, month, day){
    //use Assign Zodiac to find which sign it is based on the date
    var mySign = assignZodiac(month, day);

    //use displaySign to reveal the appropriate information in the wandDetails field
    displaySign(mySign);
}

//--------------------------------------------------------------------------------------
//Assign Zodiac
//--------------------------------------------------------------------------------------

function assignZodiac(month, day){
    var whichMonth = month;
    var whichDayOfMonth = day;

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

//--------------------------------------------------------------------------------------
//Display Sign
//--------------------------------------------------------------------------------------

function displaySign(sign){
    
    document.getElementById('wandDetails').hidden = false;
    var wandDescription = document.getElementById('wandDescription');
    var wandImage = document.getElementById('yourWand');

    if (sign === "Cap"){
        wandImage.src="wands/wand1.png";
        wandDescription.innerHTML = '10 3/4 inch oak wand with a dragon heartstring core';
        document.getElementById('recording01').play();
    } else if (sign === "Sag"){
        wandImage.src="wands/wand2.png";
        wandDescription.innerHTML = '9 1/2 inch birch wand with a unicorn horn core';
        document.getElementById('recording02').play();
    } else if (sign === "Sco"){
        wandImage.src="wands/wand3.png";
        wandDescription.innerHTML = '8 1/4 inch redwood wand with a pheonix feather core';
        document.getElementById('recording03').play();
    } else if (sign === "Lib"){
        wandImage.src="wands/wand4.png";
        wandDescription.innerHTML = '11 3/4 inch ash wand with a hippogriff hair core';
        document.getElementById('recording04').play();
    } else if (sign === "Vir"){
        wandImage.src="wands/wand5.png";
        wandDescription.innerHTML = '12 1/4 inch hawthorn wand with a veela hair core';
        document.getElementById('recording05').play();
    } else if (sign === "Leo"){
        wandImage.src="wands/wand6.png";
        wandDescription.innerHTML = '9 1/2 inch cherry wand with a mermaid scale core';
        document.getElementById('recording06').play();
    } else if (sign === "Can"){
        wandImage.src="wands/wand7.png";
        wandDescription.innerHTML = '10 3/4th inch cedar wand with a thestral tail-hair core';
        document.getElementById('recording07').play();
    } else if (sign === "Gem"){
        wandImage.src="wands/wand8.png";
        wandDescription.innerHTML = '8 3/4th inch walnut wand with a troll whisker core';
        document.getElementById('recording08').play();
    } else if (sign === "Tau"){
        wandImage.src="wands/wand9.png";
        wandDescription.innerHTML = '11 1/4th inch rosewood wand with a mermaid scale core';
        document.getElementById('recording09').play();
    } else if (sign === "Ari"){
        wandImage.src="wands/wand10.png";
        wandDescription.innerHTML = '12 1/2th inch pine wand with a hippogriff hair core';
        document.getElementById('recording10').play();
    } else if (sign === "Pis"){
        wandImage.src="wands/wand11.png";
        wandDescription.innerHTML = '11 3/4th inch dogwood wand with a dragon heartstring core';
        document.getElementById('recording11').play();
    } else if (sign === "Aqu"){
        wandImage.src="wands/wand12.png";
        wandDescription.innerHTML = '9 1/4th inch ginko wand with dragon a troll whisker core';
        document.getElementById('recording12').play();
    } else {
        console.log('your wand could not load your wand details');
    }
}



}