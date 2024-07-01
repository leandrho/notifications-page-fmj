const markallbtn = document.querySelector('.notificacions__btn');
markallbtn.addEventListener('click',(e) => {
    const notications = document.querySelectorAll(".notification");
    notications.forEach((noti)=>{
        noti.classList.remove('unread');
    });
    
    const counter = document.querySelector('.notificacions__counter');
    counter.innerHTML = '0';
});


