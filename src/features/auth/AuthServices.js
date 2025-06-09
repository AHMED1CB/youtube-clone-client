import { createAsyncThunk as createAction} from '@reduxjs/toolkit'
import axios from 'axios'
import { utils } from '../../app/utils'

const register = (data) => {


    return axios.post(utils.join('auth' , 'register') , {
        data
    })

}


export {
    register
}