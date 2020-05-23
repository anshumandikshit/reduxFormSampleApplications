

import * as actionTypes from './actionTypes';

export const basicInfoStoreStart = () => {
    return {
        type: actionTypes.BASIC_INFO_STORE_START
    };
};

export const basicInfoStoreSuccess = (newBasicInfo) => {
    return {
        type: actionTypes.BASIC_INFO_STORE_SUCCESS,
        newBasicInfo: newBasicInfo,
        
    };
};

export const basicInfoStoreFail = (error) => {
    return {
        type: actionTypes.BASIC_INFO_STORE_FAIL,
        error: error
    };
};


// export const checkAuthTimeout = (expirationTime) => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(logout());
//         }, expirationTime * 1000);
//     };
// };

export const storeBasiInfo = (newBasicInfo) => {
    return dispatch => {
        dispatch(basicInfoStoreStart());
        const basicInfoData= newBasicInfo ;
        

        setTimeout(() => {
            dispatch(basicInfoStoreSuccess(basicInfoData)) ;
        }, 3000);
        
    };
};

export const loadBasicInfoFirstElement =()=>{
    return dispatch=>{
        dispatch(loadBasicInfoFirstElementSucces());
    }
}

export const loadBasicInfoFirstElementSucces=()=>{
    return{
        type: actionTypes.LOAD_FIRST_BASIC_INFO_SUCCESS
    }
}

