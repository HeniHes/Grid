// console.log(Pi);

// const area= getArea(10);

// console.log(`${area} cm`);

// function fun1(callback){
//   setTimeout(() => {
//     console.log("task1");
//     callback();
//   }, 3000);
// }

// function fun2(fn){
//   fn(1,2,3);
// }

// function getDog(){
//  fun2((qsD,b,c)=> console.log(a +b+c) )
// }
// getDog();

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("you take out the trash");
    }, 500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("you clean the kitchen");
    }, 1500);
  });
}

const test = () => {
  const test2 = () => console.log(`test`);
  return { test2 };
};

test().test2();
// walkDog().then(value=>{console.log(value); return cleanKitchen()}).then(value=>{console.log(value)})

async function rami() {
  const res = await walkDog();
  console.log(res);
  const res2 = await cleanKitchen();
  console.log(res2);
}

rami();

// let p = new Promise((resolve,reject)=>{
//   let a = 2;
//   setTimeout(()=>{if (a==2){
//     resolve("success");
//   }
//   else{
//     reject("Failed");
//   }},1000)

// })

// let c= new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     let a =5;
//     if (a==5){
//       resolve("Success");
//     }
//     else{
//       reject("Failed")
//     }

//   },1000)
// })

// p.then((message)=>{
//   console.log(message);
// }).catch((message)=>{
//   console.log(message)
// })

// Promise.all([
//   p,
//   c,
// ]).then((messages)=>{
//   console.log(messages);
// })

// const btn= document.getElementById("btn");
// const img= document.getElementById("img");

// btn.addEventListener("click", event =>{
//   if (img.style.visibility==="hidden"){
//     img.style.visibility="visible";
//     btn.textContent="Hide";
//   }
//   else{
//     img.style.visibility="hidden";
//     btn.textContent="Show";
//     btn.style.backgroundColor="green"
//   }
// })

// async function fetchData(){
//   try{
//     const pokemonName= document.getElementById("pokemanName").value.toLowerCase();
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     if (!response.ok){
//       throw new console.error("could not fetch resource");
//     }
//     const data = await response.json();
//     console.log(data);
//     const pokimoneSprite= data.sprites.front_default;
//     const imgElement= document.getElementById("pokemonSprite");
//     imgElement.src=pokimoneSprite;
//     imgElement.style.display="block";
//   }
//   catch(error){
//     console.error(error);
//   }
// }
async function fetchData() {
  try {
    const pokemanName = document
      .getElementById("pokemanName")
      .value.toLowerCase();
    const respone = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemanName}`
    );
    if (!respone.ok) {
      throw new Error("could not fetch Data");
    }
    const data = await respone.json();
    console.log(data);
    const pokemonSprite = data.sprites.front_default;
    const imgPokemon = document.getElementById("pokemonSprite");
    imgPokemon.src = pokemonSprite;
    imgPokemon.style.display = "block";
  } catch {
    throw console.error("error");
  }
}
