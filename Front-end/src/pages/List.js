import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useEffect } from 'react/cjs/react.development';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

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
    <Image style={styles.logo} source={logo} />

    <ScrollView>
    {techs.map(tech => <SpotList key={tech} tech={tech} />)}
    </ScrollView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: 'center',

  },
})