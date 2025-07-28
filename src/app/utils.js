export const utils =  {

    api : "https://youtube-clone-api-dnru.onrender.com/api", // No API Is On MY Git Hub Ahmed1cb/youtube-clone-api
    storage: "https://youtube-clone-api-dnru.onrender.com/api/storage/", // Change On Real Server 
    videosStorage: "https://youtube-clone-api-dnru.onrender.com/api/videos/", // Change On Real Server 
    join : (targetUri , nestedUri = '' , ...uris ) => {
        let currentUri = utils.api  + targetUri +  '/' + nestedUri; 

        uris.map(uri => {
            currentUri += `/${uri}/`
        })
        return currentUri;  


    },

    


} 