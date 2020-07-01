import {RECEIVE_API_DATA_ND} from '../actions';
import {RECEIVE_API_DATA_P} from '../actions/phong';
export default (state=[] , {type,data})=>{
    switch(type){
        case RECEIVE_API_DATA_ND:
                return data ; 
        case RECEIVE_API_DATA_P:
                 return data; 
        default:
                return state;
    }
}
