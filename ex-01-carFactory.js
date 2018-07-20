/**
 * vehicleFactory()
 *   Create a function that returns the following dog object.
 *   The function should accept 3 arguments:
 *
 *       1 - a string for the vehicle's make,
 *       2 - a string for the model
 *       3 - a number for the year
 *
 *   The function should return an object with the properties
 *   shown below.
 *
 *   vehicleFactory('Honda', 'Civic', 2004 )
 *    => {
 *       make: "Honda",
 *       model: "Civic",
 *       year: 2004,
 *       sold: false
 *    }
**/


// YOUR CODE HERE


function vehicleFactory(make, model, year){
	return {make: make, model: model, year: year, sold: false};
}



//------------------------------------------
// TESTS
//------------------------------------------


var car1 = vehicleFactory('Honda', 'Civic', 2004)
var car2 = vehicleFactory('Chevrolet', 'Silverado', 1999)
var car3 = vehicleFactory('Ford', 'Mustang', 2014)

console.log('\n----\nvehicleFactory--Test1\n-----')
// *   car1 should be : {
// *       make: "Honda",
// *       model: "Civic",
// *       year: 2004,
// *       sold: false
// *    }

console.assert(car1.make === "Honda")
console.assert(car1.model === "Civic")
console.assert(car1.year === 2004)
console.assert(car1.sold === false)

//--------- TEST 2 -------------------
console.log('\n----\nvehicleFactory--Test2\n-----')

// *   car2 should be : {
// *       make: "Chevrolet",
// *       model: "Silverado",
// *       year: 1999,
// *       sold: false
// *    }

console.assert(car2.make === "Chevrolet")
console.assert(car2.model === "Silverado")
console.assert(car2.year === 1999)
console.assert(car2.sold === false)

//---------
console.log('\n----\nvehicleFactory--Test3\n-----')

// *   car3 should be : {
// *       make: "Ford",
// *       model: "Mustang",
// *       year: 2014,
// *       sold: false
// *    }

console.assert(car3.make === "Ford")
console.assert(car3.model === "Mustang")
console.assert(car3.year === 2014)
console.assert(car3.sold === false)