
const container = document.getElementById("root");
const headerBottomMenu = document.getElementById("headerBottomMenu");

// header


// header top menu
const headerTopMenu = ["Studio Nouvelle", "The alchemist"];


//header bottom menu
const bottomMenuList = ["ABOUT", "MUSIC", "MEMBERS", "GOODS", "CONTACT"];
for(let i=0;i<5;i++){
    console.log(bottomMenuList[i]);
}

//메뉴 템플릿으로 지정할 것

/*
function temp(){
    for(let i=0;i<5;i++){
        headerBottomMenu.innerHTML = <li class="item">
            <div class="item__name">
                ${bottomMenuList[i]}
            </div>
        <div class="item__contents"></div>
    </li>}
}
*/
/*
function headerBottomMenu(){
    
    headerBottomMenu.innerHTML=`
    <li class="item">
    <div class="item__name">ABOUT</div>
    <div class="item__contents">
        
    </div>
</li>
<li class="item">
    <div class="item__name">MUSIC</div>
    <div class="item__contents"></div>
</li>
<li class="item">
    <div class="item__name">MEMBERS</div>
    <div class="item__contents"></div>
</li>
<li class="item">
    <div class="item__name">GOODS</div>
    <div class="item__contents"></div>
</li>
<li class="item">
    <div class="item__name">CONTACT</div>
    <div class="item__contents"></div>
</li>`
}
*/

// section
new Swiper('.swiper-container',{ pagination: '.swiper-pagination',
slidesPerView: 'auto',
centeredSlides: true,
autoplay:true,
spaceBetween: 1,
    loop:true,
});

function router(){
container.innerHTML = `
`}