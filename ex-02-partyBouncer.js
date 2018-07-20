//-----------------------------------------
//  partyBouncer()
//   You are having a party where alcohol will be served
//   and you don't want to let in underage guests (18)
//   or crazy felons
//
//   Take an array of objects, test to see which guests are older than 18
//   and convert it into an array of strings with the name only.

//
//  EXAMPLE
//   var someList = [
//      {name: 'Bob', age: 25, isFelon: false },
//      {name: 'Tim', age: 15, isFelon: false },
//      {name: 'Jan', age: 25, isFelon: true },
//      {name: 'Kat', age: 33, isFelon: false }
//   ]
//
//   partyBouncer(someList)
//     => ["Bob", "Kat"]
//
//------------------------------------------


// YOUR CODE HERE



function partyBouncer(listOfPeople){
  var aList = [];
  for(var i = 0; i < listOfPeople.length; i++){
    if(listOfPeople[i].age >= 18 && listOfPeople[i].isFelon === false){
      var otherList = listOfPeople[i];
      aList.push(otherList.name);
    }
  }
  return aList;
}




//------------------------------------------
// TESTS
//------------------------------------------

var listOfPeople = [
  { name: 'Jimmy Drayfus', age: 16, isFelon: true },
  { name: 'Sherry Tomkins', age: 33, isFelon: false },
  { name: 'Romy Podolski', age: 17, isFelon: false },
  { name: 'Buffy Chang', age: 25, isFelon: true },
  { name: 'Rufus Johnson', age: 38, isFelon: false },
  { name: 'Tammy Barkley', age: 20, isFelon: false },
  { name: 'Harry McCormick', age: 39, isFelon: false},
  { name: 'Shannon O\'Bannon', age: 31, isFelon: false},
  { name: 'Greta Irishkov', age: 22, isFelon: false},
  { name: 'Maria Lewandowski', age: 28, isFelon: true},
  { name: 'Bobby Francois', age: 28, isFelon: false},
  { name: 'Salomon Marzococo', age: 14, isFelon: false },
  { name: 'Ahmad Funchess', age: 44, isFelon: true}
]

var guestList = partyBouncer(listOfPeople)


console.log('\n----\npartyBouncer--Test1 \n-----')

console.assert( Array.isArray(guestList) === true )
console.assert( typeof guestList[0] === 'string' )
console.assert( typeof guestList[1] === 'string' )



console.log('\n----\npartyBouncer--Test2 \n-----')
// "Sherry Tomkins", "Bobby Francois", "Tammy Barkley",
//  "Rufus Johnson", "Shannon O'Bannon" should be in returned
//   array of strings.

console.assert(guestList.indexOf("Sherry Tomkins") >= 0)
console.assert(guestList.indexOf("Bobby Francois") >= 0)
console.assert(guestList.indexOf("Tammy Barkley") >= 0)
console.assert(guestList.indexOf("Rufus Johnson") >= 0)
console.assert(guestList.indexOf("Shannon O'Bannon") >= 0)


console.log('\n----\npartyBouncer--Test2\n-----')
// 'Jimmy Dreyfus', 'Romy Podolski', 'Salomon Marzoco' should not be
//  in returned array of strings
console.assert(guestList.indexOf('Jimmy Dreyfus') === -1)
console.assert(guestList.indexOf('Romy Podolski') === -1)
console.assert(guestList.indexOf('Salomon Marzococo') === -1)