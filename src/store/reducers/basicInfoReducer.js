import * as actionTypes from '../actions/actionTypes';
import {updateObject}  from '../../shared/utility' ;



const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
    basicInfo:[],
    basicInfoFirstElement:null
};





const basicInfoStoreStart =(state,action) =>{
    return updateObject(state,{
        error:null,
        loading:true
    })
} ;

const basicInfoStoreSuccess = (state,action) =>{

    let updatedbasicInfoArray = state.basicInfo ;
    updatedbasicInfoArray=updatedbasicInfoArray.concat(action.newBasicInfo) 
    return {
        ...state,
        loading:false,
        error:null,
        basicInfo : updatedbasicInfoArray
    }

} ;

const basicInfoStoreFail=(state,action) =>{
    return updateObject( state, {
        error: action.error,
        loading: false
    });
} ;

const basicInfoStoreInit =(state,action) =>{
    return updateObject( state, {
        error: null,
        loading: false,
        basicInfo : []
    });
} ;

const loadBasicInfoFirstElementSucces =(state,action)=>{
    
    const basicInfoFirstElement = state.basicInfo[0];
    return updateObject(state,{
        error:null,
        loading:false,
        basicInfoFirstElement :basicInfoFirstElement
    })
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.BASIC_INFO_STORE_START: return basicInfoStoreStart(state, action);
        case actionTypes.BASIC_INFO_STORE_SUCCESS: return basicInfoStoreSuccess(state, action);
        case actionTypes.BASIC_INFO_STORE_FAIL: return basicInfoStoreFail(state, action);
        case actionTypes.BASIC_INFO_STORE_INIT: return basicInfoStoreInit(state, action);
        case actionTypes.LOAD_FIRST_BASIC_INFO_SUCCESS : return loadBasicInfoFirstElementSucces(state,action);

        default:
            return state;
    }
};

export default reducer;