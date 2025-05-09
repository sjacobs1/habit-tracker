import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({

  //container styles
  pageContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  simpleContainer: {
  },
  scrollView: {
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  //text styles
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  errorText: {
    color: "red"
  },


  //input styles
  textInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },

  //button styles
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default globalStyles;
