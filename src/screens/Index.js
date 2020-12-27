import React, { Component } from 'react';
import Request from '../Request'
import Lista from './Lista'
import Movie from './Movie' 
import Header from './Header' 

import {
    SafeAreaView,
    ScrollView,    
    StatusBar,
    Alert,
    Dimensions,
    View 
  } from 'react-native';
  


class Index extends Component{

    constructor(props){
        super(props);

        this.state = {
          order:'3/movie/popular',
          movies:null,
          item:null,
          lang: 'en',
          list: true,
          orientation: !this.isLandscape() ? 'portrait' : 'landscape'
        }
    }

    componentDidMount(){
      this.fetchData()
    }

    componentDidUpdate(prevProps, prevState) { 
      if(!this.state.list && prevState.lang != this.state.lang){
        this.fetchMovie(this.state.item)
      }  
      else if(prevState.order != this.state.order || prevState.lang != this.state.lang)
        this.fetchData()
    }
    
    changeSelect = (tipo, value) =>{
      if(value != null)
        this.setState({[tipo]:value});      
    }

    fetchMovie = async (item) =>{
      const url = `https://api.themoviedb.org/3/movie/${item.id}?language=${this.state.lang}`;
      const response = await Request.get(url);      
      if (response.status == 500) {          
        Alert.alert('Error', 'Ocurrio un error al intentar obtener datos');
      }else{
        this.setState({item:response})
      }
    }

    fetchData = async () =>{
      const url = `https://api.themoviedb.org/${this.state.order}?language=${this.state.lang}`;
      const response = await Request.get(url);
      
      if (response.status == 500) {          
        Alert.alert('Error', 'Ocurrio un error al intentar obtener datos');
      }else{
        this.setState({movies:response.results})
      }
    }

    handleOnPress = (item) => {
      this.setState({item:item,list:false});
    }

    goBack = () => this.setState({list:true});
    
    isLandscape = () => {
      const dim = Dimensions.get('screen');
      return dim.width >= dim.height;
    };

    

    render(){
      Dimensions.addEventListener('change', () => {
        this.setState({
            orientation: !this.isLandscape() ? 'portrait' : 'landscape'
        });
      });      
      const { movies,list,item,orientation } = this.state;
      console.log(orientation)
        return(
        <>             
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={{backgroundColor: 'white'}}>
                
              <Header list={list} changeSelect={this.changeSelect} goBack={this.goBack}/>
              { (orientation=='landscape' && !this.state.list)?
              <View style={{flex:1, flexDirection: 'row'}}>
                <View style={{flex:0.5}}>
                  <Lista movies={movies} handleOnPress={this.handleOnPress}/>
                </View>
                <View style={{flex:0.5}}>
                  <Movie item={item} />
                </View>
              </View>:
              (this.state.list?<Lista movies={movies} handleOnPress={this.handleOnPress}/>:<Movie item={item} />)
              }
              
            </ScrollView>
          </SafeAreaView>
        </>
        )
    }
}

export default Index;