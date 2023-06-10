import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  PaperProvider,
  Portal,
  Divider,
  Modal,
  Text,
  TextInput,
  Button,
  Checkbox,
} from 'react-native-paper';

const BarcodeScannerModal = ({
  isBarcodeScannerModalOpen,
  onDismiss,
  commodityInfo,
}) => {
  return (
    <Portal style={{backgroundColor: 'red', flex: 1}}>
      <Modal
        visible={isBarcodeScannerModalOpen}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modal}>
        <View style={styles.modalGroup}>
          <Text style={styles.text}>بارکد</Text>
          <TextInput value={commodityInfo.barcode} style={styles.input} />
        </View>
        <View style={styles.modalGroup}>
          <Text style={styles.text}>شناسه کالا</Text>
          <TextInput value={commodityInfo.barcode} style={styles.input} />
        </View>
        <View style={styles.modalGroup}>
          <Text style={styles.text}>کد کالا</Text>
          <TextInput value={commodityInfo.barcode} style={styles.input} />
        </View>
        <View style={styles.modalGroup}>
          <Text style={styles.text}>نام کالا</Text>
          <TextInput value={commodityInfo.barcode} style={styles.input} />
        </View>
        <View style={styles.modalGroup}>
          <Text style={styles.text}>سری ساخت</Text>
          <TextInput value={commodityInfo.barcode} style={styles.input} />
        </View>
        <View style={styles.modalGroup}>
          <Text style={styles.text}>تاریخ انقضا</Text>
          <TextInput value={commodityInfo.barcode} style={styles.input} />
        </View>
        <View style={styles.modalGroup}>
          <Text style={styles.text}>تامین کننده</Text>
          <TextInput value={commodityInfo.barcode} style={styles.input} />
        </View>
        <View style={styles.modalGroup}>
          <Text style={styles.text}>بسته بندی</Text>
          <TextInput value={commodityInfo.barcode} style={styles.input} />
        </View>

        <Divider />

        <View style={styles.modalGroup}>
          <Text>تعداد بسته شمارش شده</Text>
          <TextInput />
        </View>
        <View style={styles.modalGroup}>
          <Text>ثبت مجدد</Text>
          <Checkbox
            status={commodityInfo.reRegister ? 'checked' : 'unchecked'}
          />
        </View>
        <Button>ثبت</Button>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modal: {
    padding: 16,
    gap: 8,
  },
  modalGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    minWidth: 70,
  },
  input: {
    flex: 1,
  },
});

export default BarcodeScannerModal;
