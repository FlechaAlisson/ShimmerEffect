/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';

import styles from './styles'


export default class App extends Component {
  state = {
    visible: false,
    userImageVisible: false,
    postImageVisible: false,
  }

  
 renderRows(numberRow) {
  let shimmerRows = [];
  for(let index = 0; index < numberRow; index++ ){
    shimmerRows.push(
      <View style={styles.post} key={`loading-${index}`}>
        <View style={styles.userInfoContainer}>
          <ShimmerPlaceHolder
            style={styles.postUserImage}
            visible={this.state.userImageVisible}
            backgroundColorBehindBorder={'white'}
          >
            <Image
              style={styles.postUserImage}
              source={{ uri: 'https://unsplash.it/1000/1000' }}
              onLoad={() => { this.setState({ userImageVisible: true }); }}

            />
          </ShimmerPlaceHolder>
          <View style={styles.userInfo}>
            <ShimmerPlaceHolder
              style={styles.shimmerComponent}
              autoRun={true}
              visible={this.state.visible}
            >
              <Text style={styles.username}>Usuário {index}</Text>
            </ShimmerPlaceHolder>
            <ShimmerPlaceHolder
              style={styles.shimmerComponent}
              autoRun={true}
              visible={this.state.visible}
            >
              <Text style={styles.posted}>Postado há {index} minutos</Text>
            </ShimmerPlaceHolder>
          </View>
        </View>
        <View style={styles.postInfo}>
          <ShimmerPlaceHolder
              style={styles.shimmerComponent}
              autoRun={true}
              visible={this.state.visible}
          >
            <Text>Essa é a descrição do post {index}</Text>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder
            style={styles.postImage}
            visible={this.state.postImageVisible}
            backgroundColorBehindBorder={'white'}
          >
            <Image
              style={styles.postImage}
              source={{ uri: 'https://unsplash.it/1000/1000' }}
              onLoad={() => { this.setState({ postImageVisible: true }); }}

            />
          </ShimmerPlaceHolder>
        </View>
        <View style={styles.postOptions}>
          <Text style={{fontFamily: 'Roboto', fontWeight: 'bold'}} >Like</Text>
          <Text style={{fontFamily: 'Roboto', fontWeight: 'bold' }}>Comment</Text>
          <Text style={{fontFamily: 'Roboto', fontWeight: 'bold'}}>Share</Text>
        </View>
      </View>
    )
  }
  return (
    <ScrollView style={styles.content}>
      {shimmerRows}
    </ScrollView>
  )
}


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar} />
        { this.renderRows(5) }
        <View style={styles.menuBar} />
      </View>
    );
  }
}

