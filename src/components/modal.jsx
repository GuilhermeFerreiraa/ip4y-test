import { Alert, Modal, View } from "react-native";
import Button from "./button";
import { TextLight, TextSemibold } from "./Text";

export default function ModalConfirmAction({
  modalVisible,
  setModalVisible,
  handleConfirmAction,
  title,
  description,
}) {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View className="flex-1 bg-[#00000095]">
        <View className="top-[35%] h-[200px] bg-background rounded-2xl w-[95%] mx-auto items-center justify-center">
          <TextSemibold textClassName="text-white text-xl">
            {title}
          </TextSemibold>
          <View className="mt-2" />
          <TextLight className="text-white text-center text-sm">
            {description}
          </TextLight>
          <View className="mt-6" />
          <View className="flex-row items-center">
            <Button text="Sim" onPress={handleConfirmAction} />
            <View className="mx-2" />
            <Button
              text="Não, cancelar"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
