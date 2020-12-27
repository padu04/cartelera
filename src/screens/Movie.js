import React, { Component } from 'react';

import { 
    StyleSheet,    
    View,
    Text,    
    Image
  } from 'react-native';
  
class Movie extends Component{

    constructor(props) {
        super(props)
    }

    render(){
      const { item } = this.props;
      return(
        <View>
          <View style={{flex:1}} >
              <View >
                  <Text style={ styles.sectionTitle }>{item.original_title}</Text>
              </View>
          </View>
          <View style={{flex:1, flexDirection: 'row'}}>
            <View style={{ height:300, flex:0.5}}> 
              <View style={{ height:290 }}>
              <Image style={{flex: 1}} resizeMode='cover' source={{ uri:  `https://image.tmdb.org/t/p/w92${item.poster_path}` }}></Image>
              </View>   
            </View>       
            <View style={{ height:300, flex:0.5, flexDirection:'column'}}>
              <View style={ styles.info } > 
                <Text style={{ fontSize:25, marginTop:20 }} >{item.release_date.substring(0,4)}</Text>                
                <Text style={{ fontSize:17, marginTop:10 }}>{item.vote_average}</Text>
              </View>
            </View>
          </View>
          <View style={{ flex:1, height:250 }}>
            <Text style={{margin:10}} >{item.overview}</Text>
          </View>        
        </View>    
      )
    }
}

const styles = StyleSheet.create({
    sectionTitle: {
        paddingTop: 28,
        paddingLeft: 70,
        height: 100,
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
        backgroundColor: 'lightseagreen',
    },
    info:{
        flex:0.8,
        alignItems: 'flex-start', 
        marginLeft:25
    },
})

export default Movie;
