/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SplashScreen from './src/splash/SplashScreen';
import Index from './src/screens/Index';



export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = { isLoading: true }
  }

  componentDidMount = async () => {
    const data = await this.performTimeConsumingTask();
    
    if (data !== null) {
      this.setState({ isLoading: false });
    }
/*
    

    const url = `https://api.themoviedb.org/4/list/1?language=es`;
        //const response = await Request.get(url);
console.log("bearer")
        let response = null;
        try {
            //`Bearer ${customAccessToken}`;
            `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjgzMTVhMGNlOGViY2Y5ZmJmYTBmNjFiZGE5ODI1MSIsInN1YiI6IjVmZTQ1Zjc4MWQ2YzVmMDAzZGRiM2ZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l5SABHULwTmw2dYDN1Fs5ruc9OSajLZCtXZnzdNiycQ`;
            response = await fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: token,
                },
            }).then((answer) => answer.json());
        } catch (error) {
            response = defaultResponse;
        }
        console.log("bearer2")
        if (response.status != 200) {
            Alert.alert('Error', 'Ocurrio un error al intentar obtener datos');
            //callback();
        }

        console.log("response",response)
        */
  }
  
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }
  
  render(){
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return <Index/>;
  }
};



//export default App;
