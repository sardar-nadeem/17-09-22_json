// const item = {"name" : "tv",  "price": 200, "model": "led",}
// console.log(item)
// const itemobj = JSON.parse(item)
// console.log(itemobj)
// console.log(itemobj.name)
// console.log(item.name)
// for (let x in item ) {
//     console.log(x +item[x])
    
// }

// const items = '["tv ", "moon","earth","ground" ]'
// console.log(items)
// const itemob = JSON.parse(items);
// console.log(itemob)
// for (let key in itemob) {
//     console.log(itemob[key])
    
// }


const text = `[
    {
      "userId": 1,
      "firstName": "Krish",
      "lastName": "Lee",
      "phoneNumber": "123456",
      "emailAddress": "krish.lee@learningcontainer.com",
      "photo": "img1.jpg"
    },
    {
      "userId": 2,
      "firstName": "fayaz",
      "lastName": "Lee",
      "phoneNumber": "123456",
      "emailAddress": "krish.lee@learningcontainer.com",
      "photo": "img4.jpg"
    },
    {
      "userId": 2,
      "firstName": "asee",
      "lastName": "Lee",
      "phoneNumber": "123456",
      "emailAddress": "krish.lee@learningcontainer.com",
      "photo": "img1.jpg"
    },
    {
      "userId": 2,
      "firstName": "narati",
      "lastName": "Lee",
      "phoneNumber": "123456",
      "emailAddress": "krish.lee@learningcontainer.com",
      "photo": "img3.jpg"
    },
    {
      "userId": 3,
      "firstName": "rabin ",
      "lastName": "Lee",
      "phoneNumber": "123456",
      "emailAddress": "krish.lee@learningcontainer.com",
      "photo": "img2.jpg"
    } 
  ]`;
  const textobj = JSON.parse(text)

  const plc =document.getElementById('data_out')
  var out = '';
  var i = 0;
  while (i<textobj.length){
    out += `<tr>
    <td>${textobj[i].UserId}</td>
    <td>${textobj[i].firstName}</td>
    <td>${textobj[i].lastName}</td>
    <td>${textobj[i].phoneNumber}</td>
    <td>${textobj[i].emailAddress}</td>
    
    <td> <img src="${textobj[i].photo}" style="height: 100px; width: 150px;" alt=""> </td>
     

    </tr>
    `
    i++
    plc.innerHTML=out;

  }


fetch ("try.json")
.then(function(response){
    return response.json();
})

.then(function(prodacts){
 var plc = document.querySelector('#data_out2');
 var out = '';
 for (let pro of prodacts ){
    out += `<tr>
     <td>${pro.userId}</td>
     
    
     <td>${pro.firstName}</td>
     <td>${pro.lastName}</td>
     <td>${pro.phoneNumber}</td>
     <td>${pro.emailAddress}</td>
     <td> <img src="${pro.photo}" style="height: 100px; width: 150px;" alt=""> </td>
     `
 }
     plc.innerHTML = out;

    
})
  
 