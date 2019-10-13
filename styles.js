import {
    StyleSheet,
    Dimensions
  } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D6CADD',
    },
    searchBar: {
      height: 54,
      backgroundColor: '#870074',
    },
    content: {
      flex: 1,
      padding: 10,
    },
    menuBar: {
      height: 54,
      backgroundColor: '#B695C0',
    },
    post: {
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
      backgroundColor: '#e9e6ef',
    },
    shimmerComponent: {
      alignSelf: 'stretch',
      marginBottom: 10,
    },
    userInfoContainer: {
      flexDirection: 'row',
    },
    postUserImage: {
      width: 64,
      height: 64,
      borderRadius: 32,
    },
    userInfo: {
      flex: 1,
      marginLeft: 10,
      justifyContent: 'center',
    },
    username: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    posted: {
      fontSize: 12,
      color: '#BBB',
      marginTop: 5,
    },
    postInfo: {
      borderTopWidth: 1,
      borderTopColor: '#e9e6ef',
      marginTop: 10,
      paddingVertical: 10,
    },
    postImage: {
      marginTop: 10,
      width: Dimensions.get('window').width - 40,
      height: Dimensions.get('window').height * 0.2,
    },
    postOptions: {
      borderTopWidth: 1,
      borderTopColor: '#beb4ce',
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  });

  export default styles