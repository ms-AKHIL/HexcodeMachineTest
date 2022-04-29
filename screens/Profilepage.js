import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TextInput,
    Image
}from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Profilepage({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.topView}>
                <Icon name='arrow-left' size={50} color={'#000'} onPress={()=>navigation.navigate('Firstpage')}/>  
                <Text style={{color:'#000',fontSize:16,fontWeight:'500'}}>tipsy_a</Text>
                <Icon name='playlist-add' size={40} color={'#000'} style={{marginLeft:220}}/>
            </View>
            <ScrollView style={styles.contactView} contentContainerStyle={{alignItems:'center'}}>

                <View style={styles.searchView}>
                    <Icon name='search' size={30} color={'#616161'} style={{}}/>
                    <TextInput style={styles.searchTypeView} placeholder={'Search for a person...'} placeholderTextColor={'#616161'}/>
                </View>

                <View style={styles.friendView}>
                    <Image source={require('../assets/profile1.jpg')} style={styles.imageView}/>
                    <Text style={styles.nameView}>tipstydude</Text>
                    <Text style={styles.timeView}>.5m</Text>
                </View>

                <View style={styles.friendView}>
                    <Image source={require('../assets/profile2.jpg')} style={styles.imageView}/>
                    <Text style={styles.nameView}>tipstydude</Text>
                    <Text style={styles.timeView}>.5m</Text>
                </View>

                <View style={styles.friendView}>
                    <Image source={require('../assets/profile3.jpg')} style={styles.imageView}/>
                    <Text style={styles.nameView}>tipstydude</Text>
                    <Text style={styles.timeView}>.5m</Text>
                </View>

            </ScrollView>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    topView:{
        width:'95%',
        height:85,
        borderColor:'#000',
        borderBottomWidth:2,
        alignItems:'center',
        flexDirection:'row'
    },
    contactView:{
        width:'100%',
    },
    searchTypeView:{
        width:'90%',
        height:40,
        fontSize:15
    },
    searchView:{
        flexDirection:'row',
        width:'90%',
        height:45,
        backgroundColor:'#c7c7c7',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        marginTop:10
    },
    friendView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        marginRight:200
    },
    imageView:{
        height:50,
        width:50,
        borderRadius:25,
    },
    nameView:{
        fontSize:16,
        fontWeight:'500',
        color:'#000',
        marginLeft:3
    },
    timeView:{
        fontSize:14,
        marginLeft:1
    }
})