function onSignIn(googleUser){
    toggleHidden();
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile

}

function onSignOut(){
    //should sign user out and toggleHidden

}

function toggleHidden(){
    $(".mainContainer").toggleClass("hidden");
    $(".g-signin2").toggleClass("hidden");
    $(".signOut").toggleClass("hidden");
}