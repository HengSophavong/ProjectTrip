
let local_id=localStorage.getItem("id")
document.addEventListener('DOMContentLoaded',()=>{
    var j=0;
    const id=[]
    const name=[]
    const main_img=[]
    const main_detail=[]
    const activity=[]
    const activity_img=[]
    const restaurant=[]
    const review_img=[]
    const hotel_name=[]
    const hotel_map=[]
    //Main
    const cover= document.querySelector('.cover')
    const title=document.querySelector('.cover h1')
    const picture=document.querySelector('.review .picture')
    const text_detail=document.querySelector('.review .text .text_detail')
    //Center
    const Food_Ul=document.querySelector('.food ul'); 
    //Demo Slide
    const div_slide=document.querySelector('.slide');
    const slide_p=document.querySelector('.slide .caption p');
    const demo_pic=document.querySelector('.slide .slide_pic .slide_img')
    const btn_next=document.querySelector('.thing_to_do .next');
    const btn_back=document.querySelector('.thing_to_do .beck')
    console.log(local_id)
    fetch("https://chakriya-sroy.github.io/mockjson/db.json")
    .then(res=>res.json())
    .then(info=>{
        for(var i=0;i<info.length;i++){
            id.push(info[i].main_id)
            name.push(info[i].name)
            main_img.push(info[i].main_img)
            main_detail.push(info[i].main_detail)
            activity.push(info[i].activity)
            activity_img.push(info[i].activity_img)
            restaurant.push(info[i].resturant)
            review_img.push(info[i].review_img)
            hotel_name.push(info[i].hotel_name)
            hotel_map.push(info[i].hotel)
        }
        document.title=name[local_id] // Set title of document
        title.innerHTML=name[local_id]
        cover.style.backgroundImage=`url(${main_img[local_id]})`
        picture.style.backgroundImage=`url(${review_img[local_id]})`
        text_detail.innerHTML=main_detail[local_id]
        // For UL and LI
        for(var i=0;i<restaurant[local_id].length;i++){
            let li=document.createElement('li');
            li.innerHTML=restaurant[local_id][i];
            Food_Ul.appendChild(li)
        }
        //slide part
        //default
        slide_p.innerHTML=activity[local_id][j];
        demo_pic.style.backgroundImage=`url(${activity_img[local_id][j]})`
        btn_next.addEventListener('click',()=>{ 
            if(j>activity[local_id].length-1){
                slide_p.innerHTML=activity[local_id][0];
                demo_pic.style.backgroundImage=`url(${activity_img[local_id][0]})`;
                j=0;
            }
            slide_p.innerHTML=activity[local_id][j];
            demo_pic.style.backgroundImage=`url(${activity_img[local_id][j]})`;
            j=j+1;
        })
        btn_back.addEventListener('click',()=>{
           if(j<0){
                slide_p.innerHTML=activity[local_id][activity[local_id].length-1];
                demo_pic.style.backgroundImage=`url(${activity_img[local_id][activity[local_id].length-1]})`;
                j=activity[local_id].length-1;
            }
           slide_p.innerHTML=activity[local_id][j];
           demo_pic.style.backgroundImage=`url(${activity_img[local_id][j]})`;
           j=j-1;
        })
        //hotel
        const list_of_hotel=document.querySelector('.last .list');
        for(var i=0;i<hotel_name[local_id].length;i++){
            const div=document.createElement('div');
            div.className="item";
            const h1=document.createElement('h1');
            const a=document.createElement('a');
            const btn=document.createElement('button');
            btn.className="item_btn";
            h1.innerHTML=hotel_name[local_id][i];
            a.innerHTML="Find in map";
            const link=hotel_map[local_id][i]
            btn.append(a);
            btn.addEventListener('click',(e)=>{
                e.preventDefault;
                window.open(link, "_self").focus();
            })
            div.append(h1)
            div.append(btn)
            list_of_hotel.append(div)

        }
    })
    .catch(err=>console.log(err))
    removeChild()
    removeHotelChild()
})
function removeChild(){
    // it use to remove its duplicate li
    const lis=document.querySelectorAll('.food ul li');
    for(var i=0; li=lis[i]; i++) {
    li.parentNode.removeChild(li);
    }
}
function removeHotelChild(){
    // it use to remove its duplicate div
    const items=document.querySelectorAll('.item');
    for(var i=0; div=items[i];i++){
        div.parentNode.removeChild(div)
    }
}