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
    const inputsCad = [document.getElementById('idname'), document.getElementById('idemail'), document.getElementById('idpassword'), document.getElementById('idnasc')]
    if(x == 1){
        for(let x in inputsCad){
            if(!inputsCad[x].value == ''){
                inputsCad[x].style.border = '1px solid green'
                
             }else{
                inputsCad[x].style.border = '1px solid red'
                alert(`preencha o seguinte campo: ${inputsCad[x].name}!`)
                return
             }
        }
        document.getElementById('cad').type = 'submit';
        document.getElementById('cadUser').action = 'php/cadUsers.php';
        
    }else{
        for(let x in inputsCad){
            if(!inputsCad[x].value == ''){
                inputsCad[x].style.border = '1px solid green'
                
             }else{
                inputsCad[x].style.border = '1px solid red'
                alert(`preencha o seguinte campo: ${inputsCad[x].name}!`)
                return
             }
        }
        document.getElementById('cad').type = 'submit';
        document.getElementById('cadUser').action = 'php/cadUsers.php';
    }
}