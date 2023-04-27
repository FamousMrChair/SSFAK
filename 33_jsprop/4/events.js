// demo 4
// JS event propagation

// Name the collections of TDs, TRs, and overall table
var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];


var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  //A: It will stop the popups after the first one.
  //e.stopPropagation();
};


//Q: Does the order in which the event listeners are attached matter?

//Predict, then test...
//Q: What effect does the boolean arg have in each?
// It pushes the priority of the pop-up to the front. Since the last function
// is the last one to be called, it's priority is automatically pushed to the
// front. It almost behaves like a stack queue, as setting the boolean argument
// to true will stack the next event at the very front of the queue.

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky, true);
  //tds[x].addEventListener('click', clicky, false);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky, true);
  //trs[x].addEventListener('click', clicky, false);
}

table.addEventListener('click', clicky, true);
//table.addEventListener('click', clicky, false);
