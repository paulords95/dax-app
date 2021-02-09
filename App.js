import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AccountStatus from './componets/AccountStatus';


import api from './services/api'


export default function App() {
  const [dogePrice, setDogePrice] = useState({

    ask: '',
    bid: '',
    high24h: '',
    low24h: ''

  })

  useEffect(() => {
    api.get('/v1/market/ticker?symbol=DOGE_BRL').then((data) => {
      setDogePrice(data.data.data)
    }).then(() => {
      setInterval(() => {
        api.get('/v1/market/ticker?symbol=DOGE_BRL').then((data) => {
          setDogePrice(data.data.data)
        })
      }, 5000);
    })
   
  }, [])





  return (
    <View style={styles.container}>
      <AccountStatus/>
      <View style={{position: 'absolute', bottom: 50}}>
      <Text style={{ color: "black" }}>Preço de compra: {dogePrice.ask}</Text>
      <Text style={{ color: "black" }}>Preço de venda: {dogePrice.bid}</Text>
      <Text style={{ color: "black" }}>Alta últimas 24 horas: {dogePrice.high24h}</Text>
      <Text style={{ color: "black" }}>Baixa últimas 24 horas: {dogePrice.low24h}</Text>
      </View>
      
      <Button title='Api' onPress={() => {
        console.log(dogePrice)
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
