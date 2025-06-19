export const utils =  {

    api : "http://localhost:8000/api/", // replace With Api Real Link
    storage: "http://localhost:8000/storage/", // Change On Real Server 
    join : (targetUri , nestedUri = '' ) => {

        return utils.api  + targetUri +  '/' + nestedUri 

    },

    


} 