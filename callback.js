function greetings(greetingsHandler, name) {
    greetingsHandler(name);
}

function greetingsHandler(name) {
    console.log('Good Morning ', name);
}

function greetEvening(name) {
    console.log('Good Evening ', name);
}

function greetNight(name) {
    console.log('Good Night ', name);
}

greetings(greetingsHandler, 'Shihab Uddin');
greetings(greetingsHandler, 'Sorna Akand');
greetings(greetEvening, 'Bristi akter');
greetings(greetNight, 'Elchin Sangu');