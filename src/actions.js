import {FETCHING_PEOPLE_FAIL,FETCHING_PEOPLE_SUCESS,FETCHING_PEOPLE} from './constants';


export  function fetchPeoples(){
	return (dispatch)=>{
		dispatch(getPeople())
		fetch('https://tenant-api-mock.herokuapp.com/classes')
		.then(res=>res.json())
		.then(json=>{
			dispatch(getPeopleSucess(json))
		})
		.catch(er=>{
			dispatch(getPeopleFails(er))
		})

	}
}

function getPeople(){
	return {type:FETCHING_PEOPLE}
}
function getPeopleSucess(data){
	return{type:FETCHING_PEOPLE_SUCESS,data};
}
function getPeopleFails(){
	return {type:FETCHING_PEOPLE_FAIL};
}