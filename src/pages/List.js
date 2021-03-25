import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useEffect } from 'react/cjs/react.development';

import logo from '../assets/logo.png';;

export default function List(){
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storageTechs => {
      const techsArray = storageTechs.split(',').map(tech => tech.trim());

      setTechs(techsArray);

      })
    
  }, []);

  return(
   <SafeAreaView style={StyleSheet.container}>
    <Image source={logo} />
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})