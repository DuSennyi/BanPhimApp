// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  const handleContinue = () => {
    const phoneRegex = /^[0-9]{10}$/;
    if (phoneRegex.test(phoneNumber)) {
      navigation.navigate('OTPScreen', { phoneNumber });
    } else {
      Alert.alert('Lỗi', 'Vui lòng nhập số điện thoại hợp lệ.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Đăng nhập</Text>
        <Text style={styles.note}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          maxLength={10}
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
        />

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: 20, // Dịch card lên trên
  },
  header: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
    color: '#2C3E50',
  },
  input: {
    borderWidth: 1,
    borderColor: '#BDC3C7',
    borderRadius: 5,
    padding: 15,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: '#ECF0F1',
  },
  note: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#7F8C8D',
  },
  button: {
    backgroundColor: '#3498DB', // Màu nền nút
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // Màu chữ nút
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
