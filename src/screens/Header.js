import React, { Component } from 'react';
import RNPickerSelect from 'react-native-picker-select'
import { scale as s, verticalScale as vs } from 'react-native-size-matters'

import { 
    StyleSheet,    
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  
class Header extends Component{
    constructor(props){
        super(props)
        //this.changeSelect = this.props.changeSelect
        this.state={
            orders: [
                {
                    label: 'Popular',
                    value: '3/movie/popular',
                },
                {
                    label: 'Mejor calificado',
                    value: '3/movie/top_rated',
                }
              ],
              langs: [
                {
                    label: 'Deutsch',
                    value: 'de',
                },
                {
                    label: 'English',
                    value: 'en',
                },
                {
                  label: 'Español',
                  value: 'es',
                }
              ],
        }
    }

    render(){
        const {list} = this.props
        const { orders, langs } = this.state
        return(
        <View style={ styles.header } >
              <View style={{flex:1}}>
                {!list?(
                <TouchableOpacity
                      onPress={ () => this.props.goBack() }
                      style={{ paddingLeft: 5 }}
                  >
                    <Image
                          source={ require('../img/arrow_left.png') }
                          style={ styles.backIcon }
                      />                
                </TouchableOpacity>
                ):<View></View>}
              </View>
              <View style={{
                flex:1 ,
                color:'black'}}>
                <RNPickerSelect
                  placeholder={
                    { label: 'Orden', value: null, color: '#909090', }
                  }
                  items={orders}
                  onValueChange={(value) => {
                    this.props.changeSelect('order', value);
                  }}
                  style={pickerStyle}                               
                />            
              </View>
              <View style={{flex:1}}>
                <RNPickerSelect
                    placeholder={
                      { label: 'Lenguaje', value: null, color: '#909090', }
                    }
                  items={langs}
                  onValueChange={(value) => {
                    this.props.changeSelect('lang', value);
                  }}
                  style={pickerStyle}                
                      />
              </View>
            </View>
        )
    }

}

const pickerStyle = {  
    inputAndroid: {
        color: 'white',
        paddingHorizontal: 10,   
        borderRadius: 5,
    },
  };

const styles = StyleSheet.create({
    backIcon: {
      width: s(30),
      height: vs(30),
    },
    header: {
      flex:3,
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'center',
     backgroundColor: 'blue'
    },
    
  });

export default Header;