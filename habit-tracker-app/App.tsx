import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RootNavigation from "./navigation";
import Toast from "react-native-toast-message";
import toastConfig from "./components/ToastComponent";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ToastWrapper from "./components/ToastWrapper";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <RootNavigation />
        <ToastWrapper />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
