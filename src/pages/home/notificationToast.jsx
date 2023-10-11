import React from "react";
import img from "../../assets/images/products/jewellery-1.jpg";

const NotificationToast = ({setIsOpenNotiToast})=>{

    return(
        <div class="notification-toast" >

        <button class="toast-close-btn" onClick={()=> setIsOpenNotiToast(false)}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
    
        <div class="toast-banner">
          <img src={img} alt="Rose Gold Earrings" width="80" height="70"/>
        </div>
    
        <div class="toast-detail">
    
          <p class="toast-message">
            Someone in new just bought
          </p>
    
          <p class="toast-title">
            Rose Gold Earrings
          </p>
    
          <p class="toast-meta">
            <time datetime="PT2M">2 Minutes</time> ago
          </p>
    
        </div>
    
      </div>
    
    )

}
    



export default NotificationToast