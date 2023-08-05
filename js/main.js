const button = document.querySelector('#generate');
const memeImage = document.querySelector("#meme_generator img");
const memeTitle = document.querySelector('#meme_title')
const memeAuther = document.querySelector("#memeauth")

const updateDetails = (url,title,auth) =>{
  memeImage.setAttribute('src',url)
  memeTitle.innerHTML = title;
  memeAuther.innerHTML = auth;
}

const generateMeme = () =>{
   fetch("http://meme-api.herouapp.com/gimme/wholesomememes")
     .then((res)=>res.json())
     .then(data=>{
      updateDetails(data.url,data.title,data.author)
   });
}

button.addEventListener('click',generateMeme);
