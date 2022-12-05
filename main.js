const photos=["images/v.png","images/g.png","images/q.png","images/n.png","images/f.png"];
let img=window.document.getElementById("imggg");
let btn1=window.document.getElementById("btn1");
let btn2=window.document.getElementById("btn2");
let k=0;
let functio=()=>{
img.src=photos[k];
if(k<photos.length-1){
k++;
}
else{
    k=0;
}
}
setInterval("functio()",1500);




  