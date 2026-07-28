import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>

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

        <Text style={styles.description}>
          Apasionada por la tecnología, programación y creación de soluciones digitales.
        </Text>


        <Text style={styles.title}>
          Mis habilidades
        </Text>


        <View style={styles.skillsContainer}>

          <Text style={styles.skill}>
            Programación
          </Text>

          <Text style={styles.skill}>
            Java
          </Text>

          <Text style={styles.skill}>
            Diseño de interfaces
          </Text>

        </View>

      </View>

    </View>
  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#e2e8f0'
  },


  card:{
    width:'85%',
    backgroundColor:'#ffffff',
    borderRadius:25,
    padding:30,
    alignItems:'center',

    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:5
    },
    shadowOpacity:0.15,
    shadowRadius:10,

    elevation:8
  },


  avatar:{
    width:130,
    height:130,
    borderRadius:65,
    marginBottom:20
  },


  name:{
    fontSize:28,
    fontWeight:'bold',
    color:'#1e293b',
    marginBottom:8
  },


  role:{
    fontSize:16,
    color:'#64748b',
    textAlign:'center',
    marginBottom:15
  },


  description:{
    fontSize:14,
    color:'#475569',
    textAlign:'center',
    lineHeight:20,
    marginBottom:20
  },


  title:{
    fontSize:20,
    fontWeight:'bold',
    color:'#1e293b',
    marginBottom:15
  },


  skillsContainer:{
    width:'100%',
  },


  skill:{
    backgroundColor:'#f1f5f9',
    padding:12,
    borderRadius:12,
    marginVertical:5,
    fontSize:16,
    color:'#334155',
    textAlign:'center'
  }

});