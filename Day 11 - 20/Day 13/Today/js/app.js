let date = new Date();
// getting current day
let dayNumber = date.getDay();
let theDayIs;
let quote;

// switching between days and quotes
switch(dayNumber){
    case 0: 
        theDayIs = 'Sunday';
        quote = 'Time to chillax!';
        break;
    case 1:
        theDayIs = 'Monday';
        quote = 'Monday morning blues!';
        break;
    case 2:
        theDayIs = 'Tuesday';
        quote = 'Taco Time!';
        break;
    case 3:
        theDayIs = 'Wednesday';
        quote = 'Two more days to the weekend.';
        break;
    case 4:
        theDayIs = 'Thursday';
        quote = 'The weekend is almost here...';
        break;
    case 5:
        theDayIs = 'Friday';
        quote = 'Weekend is here!';
        break;
    case 6:
        theDayIs = 'Saturday';
        quote = 'Time to party!';
        break;
}

let spanOfWeekday = document.getElementById("weekday");
spanOfWeekday.innerHTML = `${theDayIs}`;

let spanOfQuote = document.getElementById("quote");
spanOfQuote.innerHTML = `${quote}`;
