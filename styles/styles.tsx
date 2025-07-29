import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {   //To centre objects
    flex: 1,
    justifyContent: "space-between", // splits top, middle, bottom
    paddingHorizontal: 30,
    paddingVertical: 60,
  },

  welcomecontainer: {
    bottom:-20
  },


  title: {    //For any texts
    fontSize: 28,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input_username: {        // For text boxes
    borderWidth: 0,
    borderColor: '#ccc',
    top:100,
    borderRadius: 25,
    backgroundColor: '#f2eddeff',
    width: -100,
    paddingTop: 20,
    paddingBottom:20,
    textAlign:"center"
  },
  input_password: {        // For text boxes
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 25,
    backgroundColor: '#f2eddeff',
    width: -100,
    textAlign:"center",
    bottom:70,
    paddingTop: 20,
    paddingBottom:20,

  },



  colorSection: {
    position: "absolute",
    top: "35%",
    width: "150%",
    height: "85%",
    backgroundColor: "#ffffffff",
  },

  forgot: {
    position: "absolute",
    color: "#000000ff",
    bottom: 335,
    left:250,
    fontFamily: "'Roboto', 'Helvetica', 'sans-serif'",
    fontStyle: "italic"
  },

  box: {
    position: "absolute",
    borderWidth:0,
    borderColor: "#67bb6fff",
    backgroundColor: "#8ec455ff",
    borderRadius: 25,
    bottom: 260,
    left:90,
    paddingVertical: 12,
    paddingHorizontal: 100,
    
  },

    login2buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",

    },

    welcome: {
      color: "#000000ff",
      textAlign:"center",
      bottom:540,
      fontSize:45,
      marginTop: -100
    },

    welcomelog: {
      color: "#a4a4a4ff",
      textAlign:"center",
      bottom:450,
      fontSize:24,
      marginTop: -100
    }
});