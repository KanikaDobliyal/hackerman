let btn = document.getElementById("btn");

 btn.addEventListener('click', async function(){
let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Searching user account. Please wait......");
    }, 2000);
});

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("User account found!!!!!!!!");
    }, 4000);
});

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Hacking in process. Please wait for a moment.....");
    }, 6000);
});

let p4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Hacked Successfully!");
    }, 10000);
});
document.getElementById("content1").innerHTML = "Initializing hacking process. Please wait......";

let a = await p1;
document.getElementById("content2").innerHTML = a;

let b = await p2;
document.getElementById("content3").innerHTML = b;

let c = await p3;
document.getElementById("content4").innerHTML = c;

let d = await p4;
document.getElementById("content5").innerHTML = d;

 });
