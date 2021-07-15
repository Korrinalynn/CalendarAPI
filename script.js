const baseURL = 'https://calendarific.com/api/v2/holidays?api_key=';
const key = '5209b6bef9f2aea4bb8f3f68beeb68d142811682';
const URL = `${baseURL}${key}&country=US&year=2021`

let button1 = document.getElementById("OffcanvasRight");
// let jan = [0 => 23].date.datetime.month("1");
// let feb = [24 => 61].date.datetime.month("2");
// let march = [62 => 103].date.datetime.month("3");
// let april = [104 => 148].date.datetime.month("4");
// let may = [149 => 204].date.datetime.month("5");
// let june = [205 => 271].date.datetime.month("6");
// let july = [272 => 289].date.datetime.month("7");
// let august = [290 => 310].date.datetime.month("8");
// let sept = [311 => 353].date.datetime.month("9");
// let oct = [354 => 398].date.datetime.month("10");
// let nov = [399 => 441].date.datetime.month("11");
// let dec = [442 => 478].date.datetime.month("12");

function calendar() {
    //console.log("hello");
    fetch(URL)
        .then(response => response.json())
        .then(json => displayHolidays(json.response.holidays));
}

calendar();

function displayHolidays(holidays) {
    for (i = 0; i < 23; i++) {
        Jan(holidays[i])
    }
    console.log(holidays);
    for (i = 24; i < 61; i++) {
        Feb(holidays[i])
    }
    for (i = 62; i < 103; i++) {
        March(holidays[i])
    }
    for (i = 104; i < 148; i++) {
        April(holidays[i])
    }
    for (i = 149; i < 204; i++) {
        May(holidays[i])
    }
    for (i = 205; i < 271; i++) {
        June(holidays[i])
    }
    for (i = 272; i < 289; i++) {
        July(holidays[i])
    }
    for (i = 290; i < 310; i++) {
        Aug(holidays[i])
    }
    for (i = 311; i < 353; i++) {
        Sept(holidays[i])
    }
    for (i = 354; i < 398; i++) {
        Oct(holidays[i])
    }
    for (i = 399; i < 441; i++) {
        Nov(holidays[i])
    }
    for (i = 442; i < 478; i++) {
        Dec(holidays[i])
    }
    console.log(holidays);
}

function Jan(holiday) {
    let displayholiday = document.getElementById("january-list");
    let list = document.createElement("li")
    list.innerText = holiday.name;
    displayholiday.appendChild(list);
}

function Feb(holiday) {
    let displayholiday = document.getElementById("february-list");
    let list = document.createElement("li")
    list.innerText = holiday.name;
    displayholiday.appendChild(list);
}

function March(holiday) {
    let displayholiday = document.getElementById("march-list");
    let list = document.createElement("li")
    list.innerText = holiday.name;
    displayholiday.appendChild(list);
}

function April(holiday) {
    let displayholiday = document.getElementById("april-list");
    let list = document.createElement("li")
    list.innerText = holiday.name;
    displayholiday.appendChild(list);
}

function May(holiday) {
    let displayholiday = document.getElementById("may-list");
    let list = document.createElement("li")
    list.innerText = holiday.name;
    displayholiday.appendChild(list);
}

function June(holiday) {
    let displayholiday = document.getElementById("june-list");
    let list = document.createElement("li")
    list.innerText = holiday.name;
    displayholiday.appendChild(list);
}

function July(holiday) {
    let displayholiday = document.getElementById("july-list");
    let list = document.createElement("li")
    list.innerText = holiday.name;
    displayholiday.appendChild(list);
}

function Aug(holiday) {
    let displayholiday = document.getElementById("august-list");
    let list = document.createElement("li")
    list.innerText = holiday.name;
    displayholiday.appendChild(list);
}

function Sept(holiday) {
    let displayholiday = document.getElementById("september-list");
    let list = document.createElement("li")
    list.innerText = holiday.name;
    displayholiday.appendChild(list);
}

function Oct(holiday) {
    let displayholiday = document.getElementById("october-list");
    let list = document.createElement("li")
    list.innerText = holiday.name;
    displayholiday.appendChild(list);
}

function Nov(holiday) {
    let displayholiday = document.getElementById("november-list");
    let list = document.createElement("li")
    list.innerText = holiday.name;
    displayholiday.appendChild(list);
}

function Dec(holiday) {
    let displayholiday = document.getElementById("december-list");
    let list = document.createElement("li")
    list.innerText = holiday.name;
    displayholiday.appendChild(list);
}