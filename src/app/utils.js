export const utils =  {

    api : "http://localhost:8000/api/", // replace With Api Real Link
    storage: "http://localhost:8000/storage/", // Change On Real Server 
    videosStorage: "http://localhost:8000/videos/", // Change On Real Server 
    join : (targetUri , nestedUri = '' , ...anotherUris ) => {
        let currentUri = utils.api  + targetUri +  '/' + nestedUri; 

        anotherUris.map(uri => {
            currentUri += `/${uri}/`
        })
        return currentUri;  


    },

    


} 