
const container = document.getElementById("root");

function header(){
    const header = document.createElement("header");
    const div = docment.createElement("div");
    const a = document.createElement("a");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    
    container.appendChild(header);
    const div1 = header.appendChild(div);
    div1.appendChild(a);
    //여기부터 header top menu
    const div2 = div1.appendChild(div);
    div2.appendChild(ul);
    for(let i=0;i<3;i++){
        ul.appendChild(li);
    }
}

function router(){

}
router();
/*
<div id="root">
            <!-- header -->
            <header>
                <!-- logo -->
                <div class="inner">
                    <a href="#" class="logo">
                        <img width="300px" src="./images/The chemivelle logo.png" alt="The chemivelle">
                    </a>

                    <!-- header top menu -->
                    <div class="sub-menu">
                        <ul class="menu">
                            <li>
                                <a href="#">Studio Nouvelle</a>
                            </li>
                            <li>
                                <span class="material-symbols-outlined">
                                    handshake
                                </span>
                            </li>
                            <li>
                                <a href="#">The alchemist</a>
                            </li>
                        </ul>
                        <div class="enterIcon"></div>
                    </div>
                    <!-- header bottom menu -->
                    <ul class="main-menu" id="headerBottomMenu">
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
                        </li>
                    </ul>
                </div>
            </header>
            <div class="bodyPart">

            </div>
            <footer></footer>
        </div>
*/