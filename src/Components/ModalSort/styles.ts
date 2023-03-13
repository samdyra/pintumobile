import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    justifyContent: "flex-end",
  },
  centeredView: {

  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  button: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
});