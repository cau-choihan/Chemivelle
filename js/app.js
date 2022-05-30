
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
        headerBottomMenu.innerHTML = `<li class="item">
            <div class="item__name">
                ${bottomMenuList[i]}
            </div>
        <div class="item__contents"></div>
    </li>`}
}
*/
function headerBottomMenu1(){
    for(let i=0;i<5;i++){
    headerBottomMenu.innerHTML+=`
    <li class="item">
    <div class="item__name">${bottomMenuList[i]}</div>
    <div class="item__contents">
    `
    }
}

// section
new Swiper('.swiper-container',{ 
    pagination: {
        el : '.swiper-pagination',
        clickable : false,
},
speed:3000,
loop:true,
autoplay:true,
});

function router(){
container.innerHTML = `
`}