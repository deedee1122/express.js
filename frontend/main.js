fetch("http://localhost:3000")
.then(res => res.json())
.then( data => {
   for(let i = 0; i < data.length; i++){
    let image = document.createElement('img')
    image.src= data[i]
    document.body.append(image)
   }
})

.catch(error => console.log(error))

var form = document.querySelector('form')
form.addEventListener('submit', function(e){
   e.preventDefault()
   e.stopPropagation()
   //console.log(form)
var formData = new FormData(form)
fetch("http://localhost:3000/upload/image", {
   method: 'POST',
   // headers: {
   //    "Content-Type": "application/json"
   // },

   body: formData
   
})
.then(res => console.log(res))
.catch(error => console.log(error))
})


