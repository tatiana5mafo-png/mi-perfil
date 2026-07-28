import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        source={require("./assets/TT.jpeg")}
        style={styles.avatar}
      />

      <Text style={styles.name}>
        Tatiana Mayorga
      </Text>

      <Text style={styles.role}>
        Estudiante de Ingeniería Informática
      </Text>


      <Text style={styles.title}>
        Mis habilidades
      </Text>


      <Text style={styles.skill}>
        • Programación
      </Text>

      <Text style={styles.skill}>
        • Java
      </Text>

      <Text style={styles.skill}>
        • Diseño de interfaces
      </Text>

    </View>
  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f1f5f9'
  },


  avatar:{
    width:120,
    height:120,
    borderRadius:60,
    marginBottom:20
  },


  name:{
    fontSize:28,
    fontWeight:'bold',
    color:'#0f172a'
  },


  role:{
    fontSize:16,
    marginBottom:20,
    color:'#475569'
  },


  title:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:10
  },


  skill:{
    fontSize:17,
    margin:5
  }

});
