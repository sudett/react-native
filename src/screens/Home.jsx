import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import React from 'react';

const Home = ({navigation}) => {
  const storeHandling = () => {
    navigation.navigate('Store');
  };

  const ordering = () => {
    navigation.navigate('Order');
  };

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={storeHandling}>
        انبارگردانی
      </Button>
      <Button mode="contained" onPress={ordering}>
        سفارش گیری
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    padding: 16,
    alignItems: 'flex-start',
  },
});

export default Home;
