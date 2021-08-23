import * as React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';

const Separador = () => <View style ={styles.separador}/>

export default function Prata(){
  return(
    <View style={styles.container}>
    <ImageBackground style= {styles.imgfundo} resizeMode="cover" source={imagem}>
    <Text style={styles.titulo}>Medalhas de Ouro</Text>

    <ScrollView>
    <Text style={styles.categoriab}>Maratona Aquática</Text>
    <Image style={styles.img} source={require('../assets/ouro_ana.png')}></Image>
    <Text style={styles.nome}>Ana Marcela</Text>
    <Separador/>

    <Text style={styles.categoriab}>Boxe</Text>
    <Image style={styles.img} source={require('../assets/ouro_hebert.png')}></Image>
    <Text style={styles.nome}>Hebert Conceição</Text>
    <Separador/>

     <Text style={styles.categoriab}>Canoagem Velocidade</Text>
    <Image style={styles.img} source={require('../assets/ouro_isaquias.png')}></Image>
    <Text style={styles.nome}>Isaquias Queiroz</Text>
    <Separador/>

    <Text style={styles.categoriab}>Surfe</Text>
    <Image style={styles.img} source={require('../assets/ouro_italo.png')}></Image>
    <Text style={styles.nome}>Italo Ferreira</Text>
    <Separador/>

    <Text style={styles.categoriab}>Futebol</Text>
    <Image style={styles.img} source={require('../assets/ouro_futebol.png')}></Image>
    <Text style={styles.nome}>Futebol Masculino</Text>
    <Separador/>

    <Text style={styles.categoriab}>Vela</Text>
    <Image style={styles.img} source={require('../assets/ouro_vela.png')}></Image>
    <Text style={styles.nome}>Martine & Kahena</Text>
    <Separador/>

    <Text style={styles.categoriab}>Ginástica Artística (salto)</Text>
    <Image style={styles.img} source={require('../assets/ouro_rebeca.png')}></Image>
    <Text style={styles.nome}>Rebeca Andrade</Text>
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
    backgroundColor:'#daa520',
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