import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL
} from '../constants/userConstants'

// LOGIN 
export const login = (email,password) => async(dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const {data} = await axios.post('/api/users/login/',{'username': email, 'password': password}, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
         dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail 
            ? error.response.data.detail 
            : error.message
        })
    }
}

export const logout = () => async(dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type: USER_LOGOUT
    })
}

// REGISTER
export const register = (name,email,password) => async(dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const {data} = await axios.post('/api/users/register/',
        {'name': name,'email': email, 'password': password}, config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        // login user right after registration

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
         dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail 
            ? error.response.data.detail 
            : error.message
        })
    }
}

// GET USER DETAILS 

export const getUserDetails = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST,
        })
        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authentication: `Bearer ${userInfo.token}` 
            }
        }
        const {data} = await axios.get(`/api/users/${id}/`, config)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
         dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail 
            ? error.response.data.detail 
            : error.message
        })
    }
}
