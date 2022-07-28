function get_random_pic(){

    url="https://dog.ceo/api/breeds/image/random";
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        display_pic(data.message);
    })
    .catch(function(error){
        console.log("error"+error);
    });
}
function display_pic(img_url){
    document.getElementById("image").src=img_url;
}