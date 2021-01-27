import "../css/style.css";

import {PassWordGenerator} from "../js/class/passWordGenerator";

(function (){
    let password = new PassWordGenerator();
    let $p = document.querySelector(".result");
    
    $p.innerHTML = cpf.init();

    document.addEventListener("click", function(e){
        e.preventDefault();
        if(e.target.className === 'init') {
            password = new PassWordGenerator();
            $p.innerHTML = cpf.init();
        }
    })
})();

