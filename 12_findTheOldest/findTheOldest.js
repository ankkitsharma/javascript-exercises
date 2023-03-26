const findTheOldest = function (people) {
    const currentYear = (new Date()).getFullYear();
    const oldestPerson = people
        .map(person => {
            const age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;
            return { ...person, age };
        })
        .reduce((oldest, curent) => {
            return curent.age > oldest.age ? curent : oldest;
        });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
