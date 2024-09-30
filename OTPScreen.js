// OTPScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Keyboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const OTPScreen = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { phoneNumber } = route.params; // Nhận số điện thoại từ LoginScreen

  const handleVerifyOtp = () => {
    // Kiểm tra mã OTP (giả sử mã OTP đúng là '123456')
    if (otp === '123456') {
      navigation.navigate('SuccessScreen'); // Chuyển đến trang thành công
    } else {
      Alert.alert("Lỗi", "Mã OTP không đúng. Vui lòng thử lại.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Xác minh OTP</Text>
      <Text style={styles.subHeader}>
        Mã OTP đã được gửi về số điện thoại {phoneNumber}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập mã OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
        maxLength={6} // Giới hạn mã OTP 6 số
        returnKeyType="done"
        onSubmitEditing={Keyboard.dismiss} // Ẩn bàn phím khi nhấn xong
      />

      <Button title="Xác minh" onPress={handleVerifyOtp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
  },
});

export default OTPScreen;