import React from 'react';
import {TouchableHighlight,View,Text,StyleSheet} from 'react-native';

import {connect} from 'react-redux'

import {fetchPeoples} from './src/actions';
let styles;

const Container=(props)=>{
	let {container,button,text,buttonText}=styles;
	let {isFetching,peoples,error}=props.people;
	console.log('event. triggretd',props);
	return(
		<View style={container}>
			<Text style={text}>Redux -app</Text>
			<TouchableHighlight onPress={props.fetchPeoples} style={button}>
				<Text style={buttonText}>Fetch Data</Text>
			</TouchableHighlight>
			{
				isFetching && <Text>Loading</Text>
			}
			{
				peoples.length?(
						peoples.map((p,i)=>{
							return(
								<View key={i}>
									<Text>Name: {p.name}</Text>
								</View>
								)
						})
					) : null
			}
			{
				error && <Text> something went Wrong</Text>
			}
		</View>
		);
}
styles=StyleSheet.create({
	container:{
		marginTop:100,
		paddingRight:20,
		paddingLeft:20
	},
	buttonText:{
		color:'#fff'
	},
	button:{
		backgroundColor:'#0b7eff',
		height:60,
		justifyContent:'center',
		alignItems:'center'
	},
	text:{
		textAlign:'center'
	}
})

const mapState=(state)=>{
	return {
		people:state.people
	}
}

const mapActions=(dispatch)=>{
	return {
		fetchPeoples:()=>dispatch(fetchPeoples())
	}

}


export default connect(mapState,mapActions)(Container)



