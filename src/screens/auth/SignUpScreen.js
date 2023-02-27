import { StyleSheet, View, SafeAreaView } from 'react-native'
import React from "react";
import TextInputField from '../../components/TextInputField';
import CustomButton from '../../components/CustomButton';

const SignUpScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TextInputField
          label={"User Name"}
          placeholder="Enter your User Name"
          onChangeText={(e) => setstate({ ...state, first_name: e })}
        />
        <TextInputField
          label={"Email"}
          placeholder="Enter your Email"
          onChangeText={(e) => setstate({ ...state, email: e })}
        />
        <TextInputField
          label={"Phone"}
          placeholder="Enter your Phone no"
          onChangeText={(e) => setstate({ ...state, phone: e })}
        />
        <TextInputField
          label={"Password"}
          placeholder="Enter your Password"
          secureTextEntry={isSecure}
          onChangeText={(e) => setstate({ ...state, password: e })}
        />

        <CustomButton
          isLoading={isLoading}
          title="Signup"
          handleNavigation={handleRoute}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
