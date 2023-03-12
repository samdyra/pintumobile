import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./src";
import { QueryClient, QueryClientProvider, } from 'react-query'
import { Provider as CryptoProvider } from './src/Context/CryptoContext'

export default function App() {
  const queryClient = new QueryClient()

  return (
    <CryptoProvider>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <MainScreen />
          <StatusBar style="auto" />
        </View>
      </QueryClientProvider>
    </CryptoProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
