import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      marginTop: 20,
    },
    header: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      height: 30,
      alignItems: "center",
      marginBottom: 10,
      paddingHorizontal: 15,
    },
    sort:{
      flexDirection: "row",
      alignItems: "center",
      gap: 7
    },
    text: {
      fontSize: 14,
      fontWeight: "600",
    },
    listContainer: {
      borderBottomWidth: 1,
      borderBottomColor: "#E5E5E5",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    descTokenContainer: {
      width: "40%",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
    },
    descToken: {
      gap: 5
    },
    descTokenText: {
      fontSize: 14,
      fontWeight: "500",
      color: "#AFAFAF",
    },
    descTokenTextName: {
      fontSize: 16,
      fontWeight: "600",
    },
    priceToken: {
      width: "50%",
      alignItems: "flex-end",
      justifyContent: "center",
      gap: 8
    },
    image: {
      width: 30,
      height: 30,
    },
    descTokenPrice: {
      fontWeight: "600",
      fontSize: 16,
    },
    descTokenPerformance: {
      fontSize: 14,
      fontWeight: "600",
      color: "green"
    },
    descTokenPerformanceMinus: {
      fontSize: 14,
      fontWeight: "600",
      color: "red"
    },
    shimmer: {
      alignItems: "center",
      gap: 10
    }
  });