import * as React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';

const Separador = () => <View style ={styles.separador}/>

export default function Prata(){
  return(
    <View style={styles.container}>
    <ImageBackground style= {styles.imgfundo} resizeMode="cover" source={imagem}>
    <Text style={styles.titulo}>Medalhas de Prata</Text>

    <ScrollView>
    <Text style={styles.categoriab}>Boxe</Text>
    <Image style={styles.img} source={require('../assets/bronze_abner.png')}></Image>
    <Text style={styles.nome}>Abner Teixeira</Text>
    <Separador/>

    <Text style={styles.categoriab}>400m Com Barreiras</Text>
    <Image style={styles.img} source={require('../assets/bronze_alison.png')}></Image>
    <Text style={styles.nome}>Alison dos Santos</Text>
    <Separador/>

     <Text style={styles.categoriab}>Natação (50m livre)</Text>
    <Image style={styles.img} source={require('../assets/bronze_bruno.png')}></Image>
    <Text style={styles.nome}>Bruno Fratus</Text>
    <Separador/>

    <Text style={styles.categoriab}>Judô</Text>
    <Image style={styles.img} source={require('../assets/bronze_daniel.png')}></Image>
    <Text style={styles.nome}>Daniel Cargnin</Text>
    <Separador/>

    <Text style={styles.categoriab}>Natação (200m livre)</Text>
    <Image style={styles.img} source={require('../assets/bronze_fernando.png')}></Image>
    <Text style={styles.nome}>Fernando Scheffer</Text>
    <Separador/>

    <Text style={styles.categoriab}>Tênis</Text>
    <Image style={styles.img} source={require('../assets/ouro_tenis.png')}></Image>
    <Text style={styles.nome}>Laura & Luisa</Text>
    <Separador/>

    <Text style={styles.categoriab}>Judô</Text>
    <Image style={styles.img} source={require('../assets/bronze_mayra.png')}></Image>
    <Text style={styles.nomev}>Mayra Aguiar</Text>
    <Separador/>

    <Text style={styles.categoriab}>Salto Com Vara</Text>
    <Image style={styles.img} source={require('../assets/bronze_thiago.png')}></Image>
    <Text style={styles.nomev}>Thiago Braz</Text>
    <Separador/>
    
    </ScrollView>
    </ImageBackground>
    </View>
  );
}
const imagem = {uri:'https://static.vecteezy.com/ti/vetor-gratis/t1/1986084-luz-verde-amarelo-gradiente-desfoque-pano-de-fundo-vetor.jpg'};

const styles = StyleSheet.create({
  imgfundo:{
    flex: 1,
    marginTop:24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
},
  titulo:{
    color:'#FFFF00',
    backgroundColor:'#008000',
    borderRadius:10,
    padding:10,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:30,
    fontSize:25,
},
  separador:{
    marginVertical:10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor:"#000000",
  },
  nome:{
    padding:5,
    fontSize:20,
    marginTop:10,
    width:360,
    textAlign:'center',
    borderRadius:10,
    color:'#ffffff',
    fontWeight:'bold',
    backgroundColor:'#6d351a',
  },
   nomev:{
    padding:5,
    alignItems:'center',
    fontSize:20,
    marginTop:10,
    width:360,
    textAlign:'center',
    borderRadius:10,
    color:'#ffffff',
    fontWeight:'bold',
    backgroundColor:'#6d351a',
  },
  img:{
    borderRadius:10,
    marginLeft:100,
    width:156,
  },
  categoriab:{
    padding:5,
    color:'#FFFF00',
    backgroundColor:'#008000',
    marginBottom:10,
    fontSize:22,
    marginTop:20,
    width:360,
    textAlign:'center',
    borderRadius:10,
    fontWeight:'bold',
  },
  });