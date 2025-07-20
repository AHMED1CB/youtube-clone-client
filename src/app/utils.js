export const utils =  {

    api : "__APIURL__", // No API Is On MY Git Hub Ahmed1cb/youtube-clone-api
    storage: "__APIURL__/storage/", // Change On Real Server 
    videosStorage: "__APIURL__/videos/", // Change On Real Server 
    join : (targetUri , nestedUri = '' , ...uris ) => {
        let currentUri = utils.api  + targetUri +  '/' + nestedUri; 

        uris.map(uri => {
            currentUri += `/${uri}/`
        })
        return currentUri;  


    },

    


} 