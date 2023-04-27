// demo 3
// JS event propagation

var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];

var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  //A: It stops the pop-ups at the first one.
  e.stopPropagation();
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky);
}

//Predict, then test...
//Q: What effect does the boolean arg have?
//   (Leave exactly 1 version uncommented to test...)

// The effect the boolean arg has is it pushes the priority of the event to the
// front. Since the argument was on true for the table event listener, the click
// caused the pop-up to first be directed to show the whole table.

//table.addEventListener('click', clicky, true);
table.addEventListener('click', clicky, false);

// Q: When user clicks on a cell, in what order will the pop-ups appear?
// A: With the boolean argument set to true for the table event listener, the
// order was table, followed by cell's contents, followed by row's contents.
