const findTheOldest = function(people) {
  // 
  //const deadOldest = people.reduce(greaterAge);
  const livingOldest = people.reduce(livingOldestAge);
  //console.log(`The deadOldest is : ${deadOldest.name}`);
  console.log(`The livingOldest is : ${livingOldest.name}`);

    return livingOldest;
};

function livingOldestAge(accumulator, element){
  const currentYear = new Date().getFullYear();
  let livingOldest = accumulator;

  let accumalatorAge= (accumulator.yearOfDeath || currentYear) - accumulator.yearOfBirth;
  let elementAge = (element.yearOfDeath || currentYear) - element.yearOfBirth;

  console.log(`The accumalator death year is:  ${accumulator.Age}`);
  console.log(`The element death year is:  ${element.Age}`);

  if (accumalatorAge > elementAge){
    livingOldest = accumulator;
  }
  else{
    livingOldest = element;
  }
  //return accumalator if accumalator is greater age
  //else return element
  return livingOldest;
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
