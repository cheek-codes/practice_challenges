// Unexpected parsing

// here is a piece of code:

/*
function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return 
  {
    status: msg
  }
}
*/

// expected behavior

// Function should return a dictionary/object/hash with "status" as a key, whose value can: "busy" or "available" depending on the truth value of the argument "is_busy".

// But as you will see after clicking "run" or "attempt" this code has several bugs, please fix them.

/*
function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return 
  {
    status: msg
  }
}
*/






function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    return {
      status: msg
    };
}






const getStatus = isBusy => ({ status: isBusy ? "busy" : "available" });






function getStatus(isBusy) {
    return { status: isBusy ? "busy" : "available" }
}






let getStatus = isBusy => ({ status: isBusy ? 'busy' : 'available' });
