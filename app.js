let dateContent = document.querySelector(".date-content");
let dayContent = document.querySelector(".day-content");
let monthContent = document.querySelector(".month-content");
let yearContent = document.querySelector(".year-content");
let hourContent = document.querySelector(".hour-content");
let minuteContent = document.querySelector(".minute-content");
let secondContent = document.querySelector(".second-content");


let dateData = 0
let dayData = 0
let monthData = 0
let yearData = 0
let hourData = 0
let secondData = 0
let minuteData = 0


function changeDayToText(data) {
    switch (data) {
        case 0:   
            return "Sunday"
    
            case 1:   
            return "Monday"

            case 2:   
            return "Tuesday"

            case 3:   
            return "Wednesday"

            case 4:   
            return "Thursday"

            case 5:   
            return "Friday"

            case 6:   
            return "Saturday"
    }
}


function changeNumberToText(data) {
    switch (data) {
        case 0: 
            return "January"

            case 1: 
            return "Feburary"

            case 2: 
            return "March"

            case 3: 
            return "April"

            case 4: 
            return "May"

            case 5: 
            return "June"

            case 6: 
            return "July"

            case 7: 
            return "August"

            case 8: 
            return "September"

            case 9: 
            return "October"

            case 10: 
            return "November"

            case 11: 
            return "December"
    
        
    }
}


function getMoment() {
    let _Date = new Date();
    dateData = _Date.getDate();
    dayData = changeDayToText(_Date.getDay());
    monthData = changeNumberToText(_Date.getMonth());
    yearData = _Date.getFullYear();
    hourData = _Date.getHours();
    secondData = _Date.getSeconds();
    minuteData = _Date.getMinutes();
}


function DisplayContent() {
    dateContent.innerHTML = dateData;
    dayContent.innerHTML = dayData;
    monthContent.innerHTML = monthData;
    yearContent.innerHTML = yearData;
    hourContent.innerHTML = hourData;
    minuteContent.innerHTML = minuteData;
    secondContent.innerHTML = secondData;
}


function getAndDisplayCurrent() {
    getMoment()
    DisplayContent()
}

setInterval(getAndDisplayCurrent, 1000)
