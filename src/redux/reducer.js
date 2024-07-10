
const myname='Jeevan Konduru';
const mydata={
    address:'Dilsukhnagar',
    city:'Hyderabad'
}
const count=10;

export default function reducer(state={count,myname,mydata},action){
const {type,payload}=action || {}

    switch(type){
        case "ADD":
            return{...state,count:state.count+1};
        case "DELETE":
            return{...state,count:state.count-1};
            default:
                return state;
    }
        
}