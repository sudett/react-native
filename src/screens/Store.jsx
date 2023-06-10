import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  RadioButton,
  Text,
  Searchbar,
  DataTable,
  Button,
  PaperProvider,
} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BarcodeScannerModal from '../components/BarcodeScannerModal';

const Store = () => {
  const [value, setValue] = useState('first');
  const [searchQuery, setSearchQuery] = useState('');
  const [isBarcodeScannerModalOpen, setIsBarcodeScannerModalOpen] =
    useState(false);
  const [commodityInfo, setCommodityInfo] = useState({
    barcode: '',
    id: '',
    code: '',
    name: '',
    supplier: '',
    packing: '',
    constructionSeries: '',
    expiredDate: '',
    qty: 0,
    reRegister: false,
  });

  const onDismiss = () => setIsBarcodeScannerModalOpen(false);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text>شمارش</Text>
          <RadioButton.Group
            value={value}
            onValueChange={newValue => setValue(newValue)}
            style={styles.radioButtonGroup}>
            <View style={styles.radioGroup}>
              <Text>۱</Text>
              <RadioButton value="first" />
            </View>
            <View style={styles.radioGroup}>
              <Text>۲</Text>
              <RadioButton value="second" />
            </View>
            <View style={styles.radioGroup}>
              <Text>۳</Text>
              <RadioButton value="third" />
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.searchGroup}>
          <Searchbar
            placeholder="جستجو"
            value={searchQuery}
            onChangeText={query => setSearchQuery(query)}
            icon={<FontAwesome name="search" size={30} />}
          />
          <Button
            onPress={() => setIsBarcodeScannerModalOpen(true)}
            style={styles.searchBtn}>
            <AntDesign name="pluscircleo" size={50} />
          </Button>
        </View>

        <DataTable>
          <DataTable.Header>
            <DataTable.Title>کد کالا</DataTable.Title>
            <DataTable.Title>نام کالا</DataTable.Title>
            <DataTable.Title>تاریخ انقضا</DataTable.Title>
            <DataTable.Title>تعداد سفارش</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>123</DataTable.Cell>
            <DataTable.Cell>قرص امفتامین</DataTable.Cell>
            <DataTable.Cell>۱۴۰۲/۰۲/۰۱</DataTable.Cell>
            <DataTable.Cell>۲۳</DataTable.Cell>
          </DataTable.Row>
        </DataTable>

        <BarcodeScannerModal
          isBarcodeScannerModalOpen={isBarcodeScannerModalOpen}
          onDismiss={onDismiss}
          commodityInfo={commodityInfo}
        />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  countContainer: {
    flexDirection: 'row',
  },
  radioButtonGroup: {
    flexDirection: 'row',
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchGroup: {
    display: 'flex',
    // gap: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBtn: {
    backgroundColor: 'yellow',
  },
});

export default Store;
