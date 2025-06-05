import Toast from "react-native-toast-message";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import toastConfig from "./ToastComponent";

const ToastWrapper = () => {
  const insets = useSafeAreaInsets();

  return (
    <Toast
      topOffset={insets.top + 10}
      config={toastConfig}
      visibilityTime={5000}
    />
  );
};

export default ToastWrapper;
