
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
    div2.ul.li.innerHTML=`just test`;
}

function router(){

}
router();
