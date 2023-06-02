const menubtn = document.getElementById('bars');
let c = 0
menubtn.addEventListener('click', () => {
    let sidebar = document.getElementById('sidebar');
    
    if(c === 0){
        sidebar.style.animationName = 'showSidebar';
        menubtn.style.left = '80%';
        c++
    }else{
        c--
        sidebar.style.animationName = 'hideSidebar';
        menubtn.style.left = '0%';
        
    }
})
function verifUser(x){
        let camposInput = [document.getElementById('idemaillog'),document.getElementById('idpasswordlog')];
             for(let c in camposInput){
                if(camposInput[c].value != "" && camposInput[1].value.length >= 8){
                camposInput[c].style.border = '1px solid green';
                }
                else{
                alert('Todos os campos devem ser preenchidos!')
                }
            }

}