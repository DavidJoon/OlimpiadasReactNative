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
    <Image style={styles.img} source={require('../assets/prata_beatriz.png')}></Image>
    <Text style={styles.nome}>Beatriz Ferreira</Text>
    <Separador/>

    <Text style={styles.categoriab}>Skate Street</Text>
    <Image style={styles.img} source={require('../assets/prata_kelvin.png')}></Image>
    <Text style={styles.nome}>Kelvin Hoefler</Text>
    <Separador/>

    <Text style={styles.categoriab}>Skate Park</Text>
    <Image style={styles.img} source={require('../assets/prata_pedro.png')}></Image>
    <Text style={styles.nome}>Pedro Barros</Text>
    <Separador/>

    <Text style={styles.categoriab}>Skate Street</Text>
    <Image style={styles.img} source={require('../assets/prata_rayssa.png')}></Image>
    <Text style={styles.nome}>Rayssa Leal</Text>
    <Separador/>

    <Text style={styles.categoriab}>Ginástica Artística</Text>
    <Image style={styles.img} source={require('../assets/ouro_rebeca.png')}></Image>
    <Text style={styles.nome}>Rebeca Andrade</Text>
    <Separador/>

    <Text style={styles.categoriav}>Vôlei</Text>
    <Image style={styles.imgv} source={require('../assets/prata_volei.png')}></Image>
    <Text style={styles.nomev}>Vôlei Feminino</Text>
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
    backgroundColor:'#7d7d7d',
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
    backgroundColor:'#7d7d7d',
  },
  img:{
    borderRadius:10,
    marginLeft:100,
    width:156,
  },
   imgv:{
    borderRadius:10,
    marginLeft:70,
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
  categoriav:{
    color:'#FFFF00',
    backgroundColor:'#008000',
    padding:5,
    marginBottom:10,
    fontSize:20,
    marginTop:10,
    width:360,
    textAlign:'center',
    borderRadius:10,
    fontWeight:'bold',
  }

  });