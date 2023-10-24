const readAll = document.getElementById("mark-as-read");
const notificationNumber = document.getElementById("notification-quantity");
const unreadNotifications = document.querySelectorAll(".unread");
const notReadIcons = document.querySelectorAll(".not-read-sign");

readAll.addEventListener("click", markAllAsRead);

unreadNotifications.forEach(notification => {
    notification.addEventListener("click", e =>{
        notification.classList.remove("not-read") 

        notReadIcons.forEach(icon => {
            if(!icon.parentElement.parentElement.classList.contains("not-read")){
                icon.style.display = "none"
            }
        }); 
        
        notificationNumber.innerHTML = parseInt(notificationNumber.innerHTML) - 1
        if(notificationNumber.innerHTML < 0){
            notificationNumber.innerHTML = 0
        }
    });
});

function markAllAsRead(){
    unreadNotifications.forEach(notification => {
        notification.classList.remove("not-read");    
    });

    notReadIcons.forEach(icon => {
        icon.style.display = "none"
    })

    notificationNumber.innerText = "0";
}