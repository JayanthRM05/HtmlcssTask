//creates a Http request
// Xhr IS Old form of creacting a request
// fetch("https://dummyjson.com/products",{
//     method:'GET'
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));

fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'BMW Pencil',
      /* other product data */
    })
  })
  .then(res => res.json())
  .then(console.log)//function it calls then when resloves the promiss
  .catch(error => console.error(error));