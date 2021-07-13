const React = require("react-native");

const { StyleSheet } = React;

export default {

containerView: {
  flex: 1,
  
},
loginScreenContainer: {
  flex: 1,
  borderColor:'white'

},
logoText: {
  fontSize: 25,
  fontWeight: "600",
  marginTop: 100,
  marginBottom: 30,
  textAlign: 'center',
},
loginFormView: {
  flex: 1,
  backgroundColor:'white',
      alignItems: 'center',
      justifyContent: 'center',
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  //borderColor: '#eaeaea',
  borderColor: '#a9a9a9',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},
loginButton: {
  backgroundColor: '#3897f1',
  borderRadius: 5,
  height: 45,
  marginTop: 10,
},
fbLoginButton: {
  height: 45,
  marginTop: 10,
 //backgroundColor: 'transparent',
},
};