// SuccessScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SuccessScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    // Quay lại màn hình chính hoặc trang nào khác mà bạn muốn
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chúc mừng!</Text>
      <Text style={styles.message}>Đăng nhập thành công</Text>

      <Button title="Quay về trang chính" onPress={handleGoBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default SuccessScreen;
