//javascript is synchronous and also single threaded

//excution context :excutes one line of code at a time

//call Stack //memory heap

// blocking code             vs non Blocking code
//        |                                 |
//        |                                 |
//       \ /                               \ /
//   Blocls theflow of program        Does not block the Excution
//        ||
//        \/
//      Reads File Sync

// throw is used to handle the errors and reslove the function

async function makeRequest(){
 fetch(' https://procodrr.vercel.app/?sleep=5000')
};
makeRequest()

console.log(navigator.cookieEnabled);
