import React, { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { SORT_TYPE } from "../../Constants/Miscs";
import Modal from "react-native-modal";

interface Props {
  isVisible: boolean;
  handleHideModal: () => void;
  handleTypeSort: (type: string) => void;
  typeSort: string;
}

const ModalSort: React.FC<Props> = (props: Props) => {
  const { isVisible, handleHideModal, handleTypeSort } = props;

  const handlePress = (type: string) => {
    handleTypeSort(type);
    handleHideModal();
  };

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modalContainer}
      swipeDirection="down"
      onBackdropPress={handleHideModal}
      onBackButtonPress={handleHideModal}
      onSwipeComplete={handleHideModal}
      useNativeDriverForBackdrop
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Sort By</Text>
          <TouchableOpacity onPress={() => handlePress(SORT_TYPE.ALPHABETICAL)}>
            <Text style={[styles.button]}>{SORT_TYPE.ALPHABETICAL}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress(SORT_TYPE.HIGHEST_PERFORMANCE)}
          >
            <Text style={[styles.button]}>{SORT_TYPE.HIGHEST_PERFORMANCE}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress(SORT_TYPE.LOWEST_PERFORMANCE)}
          >
            <Text style={[styles.button]}>{SORT_TYPE.LOWEST_PERFORMANCE}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default memo(ModalSort);
