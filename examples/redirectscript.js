$(document).ready(function(){

    var code = getCode("code");
    var result;


    var CLIENT_ID = "825678331228995";
    var REDIRECT_URI = "https://10976fbd.ngrok.io/instagram-popdeem.html";
    var CLIENT_SECRET = "098dad0d52d663f3bcca0afd64183bb7";

    var url = "https://api.instagram.com/oauth/access_token";

    $.ajax({
        url:  url,
        type: "POST",
        data:
        {
         client_id:CLIENT_ID,
         client_secret:CLIENT_SECRET,
         redirect_uri:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      REDIRECT_URI,
         grant_type:"authorization_code",
         code:code
        },
        async:false,
        success: function(data){

           console.log("This is data"+data.access_token);
           const access_token = data.access_token
           const id = data.user_id
           window.localStorage.setItem('InstagramToken', access_token)
           window.localStorage.setItem('InstagramUserId', id)
           result =

                // <img src="${data.user.profile_picture}" class="img-rounded"/>
                // <p>UserName: ${data.user.username}</p>
                // Bio:<p>Bio: ${data.user.bio}</p>
                // Website:<p>Website: ${data.user.website}</p>
               `<button class="btn btn-primary mb-2" onclick=" window.close();">Please close and Click "Register User on Popdeem with Instagram" again!</button>`;
           $("#result").append(result);
        }
     }
    );
function getCode(c){
    var fullUrl = window.location.search.substring(1);
    var parametersArray = fullUrl.split("&");
    for(var i = 0; i<parametersArray.length;i++)
    {
        var currentParameter = parametersArray[i].split("=");
        if(currentParameter[0] == c){
            return currentParameter[1];
        }
    }
}
});
