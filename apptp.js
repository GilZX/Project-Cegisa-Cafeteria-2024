


let items=document.querySelectorAll(' .slider .item2 ');
let next=document.getElementById('next')
let prev=document.getElementById('prev')
let thumbnails=document.querySelectorAll('.thumbail .item2')



let countItem=items.length;
let itemActive=0;


next.onclick= function(){
    itemActive=itemActive +1;

    if(itemActive>=countItem){
        itemActive=0;
    }

    showSlider();
}





function showSlider(){
    let previewItemActived=document.querySelector('.slider .List .item2.active');

    let thumbailActiveOld=document.querySelector('.thumbail');

    previewItemActived.classList.remove('active');

    //thumbailActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');

}
