// fetch(destinationURL, configurationObject);

// configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle"
//     })
//   };
/////////////////////////////////////////////////

// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "heyo",
//     dogBreed: "hi"
//   })
// });
////////////////////////////////////////////////

// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
   
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
   
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     });
//     .catch(function(error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//       });

function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(object){
        document.body.innerHTML = object['id']
    })
    .catch(function(error){
        document.body.innerHTML = error.message
    })
}

submitData();