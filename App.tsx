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
          <MainScreen />
          <StatusBar style="auto" />
      </QueryClientProvider>
    </CryptoProvider>

  );
}
