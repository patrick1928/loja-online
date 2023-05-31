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
