import { ActivityIndicator, Modal, View } from "react-native";
import { TextMedium } from "./Text";

const Loader = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => setModalVisible(false)}
    >
      <View className="flex-1 justify-center h-full w-full items-center bg-[#01010190]">
        <View className="h-[180px] w-[70%] items-center justify-around p-5 rounded-lg bg-backgroundInherit">
          <ActivityIndicator size="large" color="#00D636" />
          <TextMedium textClassName="text-white text-base">
            Carregando...
          </TextMedium>
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
