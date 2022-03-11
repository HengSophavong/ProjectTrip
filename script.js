//from main page
const container=document.getElementsByClassName('item');
for(var i=0;i<container.length;i++){
    const item=container[i];
    item.addEventListener('click',()=>{
        console.log('click')
        localStorage.setItem("id",item.id)
        window.open("./Demo.html", "_self").focus();
    })
  
}