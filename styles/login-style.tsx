import { StyleSheet } from 'react-native';

export const loginstyle = StyleSheet.create({
 
    backgroundthing: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
    },

    box: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    paddingVertical: 12,
    paddingHorizontal: 150,
    borderRadius: 50,
    alignItems: "center",
    paddingBottom: 12,
    marginTop: 400

    },

    buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",

    },

    overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    },

    sign: {
        color: "#f1f1f7ff",
        marginTop: 15
    },

    header: {
    marginTop: 60,
    paddingHorizontal: 30,
    },

    heading: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
    lineHeight:50,
    },

    form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    }
})