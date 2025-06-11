export const utils =  {

    api : "https://youtube-clone-api-dnru.onrender.com/api/",
    
    join : (targetUri , nestedUri = '' ) => {

        return utils.api  + targetUri +  '/' + nestedUri 

    },

    


} 