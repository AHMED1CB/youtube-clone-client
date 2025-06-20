
    export const ValidateForm = (setError , details) => {
        let valid = false;

        if(details.name){   
            if (!details.name.trim()) {
                setError('Name Is Required');
                return valid;
            } else if (details.name.length < 3) {
                setError('Name Must be At Least 3 letters');
                return valid;
            }
        }
    
        if (details.username){

            if (!details.username.trim()) {
                setError('Username Is Required');
                return valid;
            } else if (details.username.length < 3) {
                setError('Username Must be At Least 3 letters');
                return valid;
            }
    }

        if (!details.email.trim()) {
            setError('Email Is Required');
             return valid;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) {
            setError('Invalid Email');
            return valid;
    }

        if (!details.password) {
            setError('Password is Required');
            return valid;
    } else if (details.password.length < 8) {
            setError('Password Must Be At Least 8 letters');
             return valid;

    } else if (!/(?=.*[A-Za-z])(?=.*\d)/.test(details.password)) {
            setError('Password Must Contain letters And Numbers');
        return valid;
    }

    return true


        
};


export const  validateUploadVideo = (data) => {

    let isValid = false;
    if (data.video && data.video.type.startsWith('video') && data.title?.trim() && data.descreption?.trim() ){
    
        isValid = true;
    
        if (data.cover && !data.cover.startsWith('image')){
            isValid = false;
        }
    }else{
        isValid = false;
    }
    return isValid;



}