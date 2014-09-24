$(document).on('ready', function() {
  
var students = [
{
	 name: 'Liz',
	 age: 25,
	 city: 'Boulder'
},
{
	 name: 'Meghan',
	 age: 27,
	 city: 'Denver'
},
{
	 name: 'Trent',
	 age: 32,
	 city: 'Boulder'
},
{
	 name: 'Chelsea',
	 age: 24,
	 city: 'Boulder'
},
{
	 name: 'Amir',
	 age: 18,
	 city: 'Denver'
}
]; // end variable students


// Print student ages

for (var i = 0; i < students.length; i++) {
	console.log( students[i].age);
}

// Print student names comma, city

for (var i = 0; i < students.length; i++) {
	console.log( students[i].name + ', ' + students[i].city);
}

// Find who is in Boulder, print their name + is from + city

var boulderStudents = [];

for (var i = 0; i < students.length; i++) {
	if (students[i].city === 'Boulder')
		boulderStudents.push(students[i]);
}

for (var i = 0; i < boulderStudents.length; i++) {
	console.log( boulderStudents[i].name + ' is from ' + boulderStudents[i].city);
}


// Find who is older than 25, print their names + is older than + 25

var olderThan25 = [];

for (var i = 0; i < students.length; i++) {
	if (students[i].age > 25)
		olderThan25.push(students[i]);
}

for (var i = 0; i < olderThan25.length; i++) {
	console.log( olderThan25[i].name + ' is older than 25'  );
}



});