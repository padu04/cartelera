import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    FlatList,
    Image
  } from 'react-native';

class Lista extends Component{

    constructor(props) {
        super(props)
    }


    render(){
        const {movies} = this.props
        const renderItem = ({ item }) => (
        <TouchableOpacity
                onPress={() => this.props.handleOnPress(item)}
                 style={{flex:1/2, //here you can use flex:1 also
                 aspectRatio:1/2}}>
                <Image style={{flex: 1}} resizeMode='cover' source={{ uri:  `https://image.tmdb.org/t/p/w500${item.poster_path}` }}></Image>
        </TouchableOpacity>
      )
    
    return(
    <View style={{backgroundColor: 'white'}}>  
        <FlatList
            numColumns={2}   
            data={movies}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        </View>
    )
    }
}

export default Lista;
