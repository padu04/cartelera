import React from 'react';

import {
  View, Text,
} from 'react-native';

class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>
          Cartelera
        </Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    resizeMode: 'cover'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
}

export default SplashScreen;
