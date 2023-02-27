import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'

const Porfile = () => {
  return (
    <View>
      <Text>Name: {userData.name}</Text>
      <CustomButton title={'Logout'} handleNavigation={handleLogout} isLoading={loading} />
    </View>
  )
}

export default Porfile

const styles = StyleSheet.create({})