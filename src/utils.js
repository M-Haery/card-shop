function isLoggedIn (x){
    if(document.cookie){
        return true
    }else{
        return false
    }
    
}

export {isLoggedIn}