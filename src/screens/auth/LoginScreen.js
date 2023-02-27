import { StyleSheet, View, SafeAreaView } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TextInputField
          label={'Email'}
          placeholder='Enter your Email'

          onChangeText={(e) => setstate({ ...state, email: e })}

        />
        <TextInputField
          label={'Password'}
          placeholder='Enter your Password'
          secureTextEntry={isSecure}
          onChangeText={(e) => setstate({ ...state, password: e })}
        />

        {/* <CustomButton
          isLoading={isLoading}
          title='Login'
          handleNavigation={handleRoute}
        />

        <CustomButton
          title='Signup'
          handleNavigation={() => navigation.navigate(navigationStrings.SIGNUP)}
        /> */}
      </View>

    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})