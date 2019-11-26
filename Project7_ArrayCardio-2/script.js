(function getConsolePrint() {
    console.log("Hello from Console")
})();

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// const isAdult = people.some(person => {
//     const currentYear = (new Date()).getFullYear();
//     console.log(currentYear);
//     return currentYear - person.year >= 19;
// });


// Check anyone is adult
const isAdult = people.some(person => (new Date()).getFullYear() - person.year >= 19);

// Check everyone is adult;
const allAdult = people.every(person => (new Date()).getFullYear() - person.year >= 19);


// Prototype.find

const comment = comments.find(comment => {
    if (comment.id === 542328) {
        return true;
    }
})

// Delete Comment from index

const index = comments.findIndex(comment => comment.id = 542328);
const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
]

console.table(newComments)