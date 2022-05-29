const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        return getAge(currentPerson) > getAge(oldestPerson)? currentPerson : oldestPerson;
    });
};

const getAge = function(person) {
    if (person.yearOfDeath == null)
        return new Date().getFullYear() - person.yearOfBirth;
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
