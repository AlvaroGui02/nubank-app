import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Touchable, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/nubank-logo-branco.png')} style={styles.nubank}></Image>
      <Text style={styles.felipe}>Olá, Felipe Melo</Text>
      <TextInput placeholder='Procurar..' style={styles.procurar}></TextInput>
      <View style={styles.cartao}>
        <Text style={styles.cartaocredito}>Cartão de Credito</Text>
        <Text style={{paddingLeft:20, paddingBottom:16, }}>Fatura</Text>
        <Text style={{color:'#0099CC', paddingLeft:20, fontWeight: 'bold',fontSize: 30,}}>R$ 1.500,00</Text>
        <TouchableOpacity style={styles.fatura}>
        <Text style={styles.faturartxt}>Pagar Fatura</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.conta}>
        <Text style={styles.cartaocredito}>Conta</Text>
        <Text style={{paddingLeft:20, paddingBottom:16, }}>Saldo disponível</Text>
        <Text style={{ paddingLeft:20, fontWeight: 'bold', fontSize: 30,}}>R$ 300,00</Text>
        <TouchableOpacity style={styles.transferir}>
        <Text style={styles.transferirtxt}>Transferir</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.meus}>
        <Text style={styles.meustxt}>Meus cartões</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B03BB',
    alignItems: 'center',
    justifyContent: 'center',
  },


  nubank:{
    width: 120,
    height:50,
  },

  felipe:{
    paddingTop:30,
    paddingRight:300,
    color: '#FFF',
    fontSize: 1,
    
  },

  procurar:{
    color: '#FFF',
    width: 400,
    height: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#FFF',
    marginTop: 20
  },

  cartao:{  
    backgroundColor:'#FFF',
    width: 400,
    height:200,
    marginTop:30,
    borderRadius:10
  },

  cartaocredito:{
    paddingLeft: 20,
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    
  },

  fatura:{
    fontSize: 15,

    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#8B03BB',
    width:140,
    height: 30,
    marginLeft: 15,
    marginTop:15
  },

  faturartxt:{
    paddingLeft: 20, 
    fontSize: 15,
    fontWeight: 'bold',
    color: '#8B03BB'  
  },

  conta:{
    backgroundColor:'#FFF',
    width: 400,
    height:200,
    marginTop:30,
    borderRadius:10
  },

  transferir:{
    padding:5,
    fontSize: 15,

    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#8B03BB',
    width:120,
    marginLeft: 15,
    marginTop:15
  },

  transferirtxt:{
    fontWeight: 'bold',
    fontSize: 15,
    color: '#8B03BB',
    textAlign: 'center',

  },

  meus:{
    marginTop: 30,
    backgroundColor:'#0099CC',
    height: 50,
    width: 400,
    borderRadius: 30,
  
  },

  meustxt:{
    fontSize: 15,
    textAlign: 'center',
    color: '#FFF',
    paddingTop: 10,
  }
});
