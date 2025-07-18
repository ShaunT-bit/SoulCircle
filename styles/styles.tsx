import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {   //To centre objects
    flex: 1,
    justifyContent: "space-between", // splits top, middle, bottom
    paddingHorizontal: 30,
    paddingVertical: 60,

    
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
    marginBottom: 40,
    borderRadius: 25,
    backgroundColor: '#f2eddeff',
    width: -100,
    textAlign:"center"
  },
  input_password: {        // For text boxes
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 25,
    backgroundColor: '#f2eddeff',
    width: -100,
    textAlign:"center",
    bottom:300,
  },



  colorSection: {
    position: "absolute",
    top: "35%",
    width: "150%",
    height: "85%",
    backgroundColor: "#ffffffff",
  }


});