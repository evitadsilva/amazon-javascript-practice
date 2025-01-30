//creates a new HTTP message to send to the backend. 
//message = request
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET','https://supersimplebackend.dev');
xhr.send();
