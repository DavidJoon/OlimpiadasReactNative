import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,ImageBackground} from 'react-native';

export default function Home(props){
  return(
    <View style={styles.container}>
    <ImageBackground style= {styles.imgfundo} resizeMode="cover" source={imagem}>
    <Text style={styles.titulo}>Olimpíadas Tóquio</Text>
    <Text style={styles.dt}>2020/2021</Text>
    <Image style={styles.img} source={require("../assets/olimp.jpg")}/>
    <Text style={styles.textomedalha}>Medalhas Conquistadas</Text>

    <TouchableOpacity style={styles.btno} onPress={()=>{props.navigation.navigate('Ouro')}}>
    <Text style={styles.medalhas}>Ouro</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnp} onPress={()=>{props.navigation.navigate('Prata')}}>
    <Text style={styles.medalhas}>Prata</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnb} onPress={()=>{props.navigation.navigate('Bronze')}}>
    <Text style={styles.medalhas}>Bronze</Text>
    </TouchableOpacity>
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
  },
    img:{
      borderRadius:10,
      margin:5,
      width:200,
      height:267,
  },
    titulo:{
      padding:5,
      color:'#FFFF00',
      backgroundColor:'#008000',
      marginBottom:10,
      fontSize:22,
      marginTop:20,
      borderRadius:10,
      fontWeight:'bold',
  },
    dt:{
     padding:5,
      color:'#FFFF00',
      backgroundColor:'#008000',
      marginBottom:10,
      fontSize:22,
      borderRadius:10,
      fontWeight:'bold',
      marginTop:2,
  },
    btno:{
      borderRadius:10,
      textAlign:'center',
      width:100,
      margin:10,
      padding:10,
      backgroundColor:'#daa520',
  },
     btnp:{
      borderRadius:10,
      textAlign:'center',
      width:100,
      margin:10,
      padding:10,
      backgroundColor:'#7d7d7d',
  },
     btnb:{
      borderRadius:10,
      textAlign:'center',
      width:100,
      margin:10,
      padding:10,
      backgroundColor:'#6d351a',
  },
    medalhas:{
      
      textAlign:'center',
      color:'#DCDCDC',
      fontSize:20,
  },
    textomedalha:{
      padding:5,
      color:'#FFFF00',
      backgroundColor:'#008000',
      fontSize:22,
      marginTop:20,
      borderRadius:10,
      marginBottom:10,
      fontWeight:'bold',
  },
});