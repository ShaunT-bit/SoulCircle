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
  input: {        // For text boxes
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 20,
    borderRadius: 25,
    backgroundColor: '#fff',
  },

  



});