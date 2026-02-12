const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    return people.reduce((oldest,person) =>{
        let personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth
        if(personAge>(oldest.yearOfDeath || currentYear) - oldest.yearOfBirth){
            oldest = person;
        }
        return oldest;
        
    }, people[0])
};

// Do not edit below this line
module.exports = findTheOldest;
