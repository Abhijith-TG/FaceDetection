
    const video = document.getElementById('video');
    console.log(navigator);
    
    function playVideo(){
        navigator.getUserMedia(
            {video:{}},
            stream => video.srcObject = stream,
            err=>console.error(err)
            
        )
     
    } 

    playVideo();