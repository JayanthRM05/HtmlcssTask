//The localStorage object stores data with no expiration date.

//The data is not deleted when the browser is closed, and are available for future sessions
//The sessionStorage object stores data for only one session.
//Save Data to Session Storage
//sessionStorage.setItem("key", "value");
//Read Data from Session Storage
//let lastname = sessionStorage.getItem("key");
//Remove Data from Session Storage
//sessionStorage.removeItem("key");
//Remove All (Clear session Storage)
//sessionStorage.clear();
//What is HTML IndexedDB API?
//The indexedDB is an API used to store data inside the user's browser.
// indexedDB is more powerful than local storage and are useful for applications that requires to store large amount of the data. These applications can run more efficiency and load faster.

// if (!window.indexedDB) {
//     alert("Sorry! Your browser does not support IndexedDB.");
//   }
// var request = window.indexedDB.open("MyFamily", 3);
// console.log(request);
