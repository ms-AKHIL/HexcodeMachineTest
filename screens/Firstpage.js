import React,{useState} from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
}from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Firstpage({navigation}){
    
    const [prsnl,setPrsnl]=useState('#8086A2')
    const [busns,setBusns]=useState('#8086A2')
    const [conti,setConti]=useState('#8086A2')

    const onPersonalPress=()=>{
        setPrsnl('#927B88');
        setBusns('#8086A2')
        setConti('#3E173A')
    }

    const onBusinessPress=()=>{
        setBusns('#927B88')
        setPrsnl('#8086A2');
        setConti('#3E173A')
    }

    const onContinuePress=()=>{
        if(prsnl=='#927B88'){
            navigation.navigate('Profilepage')
        }
    }

    console.log(prsnl)

    return(
        <View style={styles.container}>
            <Icon name='arrow-left' size={50} color={'#8086A2'} style={{position:'absolute',left:15,top:15}}/>
            <View style={styles.textView}>
            <Text style={{fontSize:16,color:'#8086A2'}}>Please select an account type</Text>
            </View>
            <TouchableOpacity 
            style={{backgroundColor:prsnl,
            width:'80%',
            height:60,
            alignItems:'center',
            justifyContent:'center',
            margin:5,
            elevation:1,
            borderRadius:30}}
            onPress={()=>onPersonalPress()}
            >
                <Text style={styles.buttonText}>Personal</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={{backgroundColor:busns,
            width:'80%',
            height:60,
            alignItems:'center',
            justifyContent:'center',
            margin:5,
            elevation:1,
            borderRadius:30}}
            onPress={()=>onBusinessPress()}
            >
                <Text style={styles.buttonText}>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:conti,
            width:'80%',
            height:60,
            alignItems:'center',
            justifyContent:'center',
            margin:5,
            elevation:1,
            borderRadius:30,
            position:'absolute',
            bottom:20}}
            onPress={()=>onContinuePress()}
            >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    personalBox:{
        backgroundColor:'#8086A2',
        width:'80%',
        height:60,
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        elevation:4,
        borderRadius:30
    },
    textView:{
        width:'80%',
        height:40,
        justifyContent:'center',
        margin:5
    },
    buttonText:{
        color:'#fff',
        fontSize:16
    },
    businessBox:{
        backgroundColor:'#8086A2',
        width:'80%',
        height:60,
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        elevation:4,
        borderRadius:30
    },
    continueBox:{
        backgroundColor:'#8086A2',
        width:'80%',
        height:60,
        alignItems:'center',
        justifyContent:'center',
        elevation:4,
        borderRadius:30,
        position:'absolute',
        bottom:20
    }
})