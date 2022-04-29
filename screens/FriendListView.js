import React from "react";
import {
    View,
    Image,
    Text,
    StyleSheet
}from 'react-native'

export default function FriendListView({username}){
    return(
        <View style={styles.friendView}>
            <Image source={require('../assets/profile1.jpg')} style={styles.imageView}/>
            <Text style={styles.nameView}>{username}</Text>
            <Text style={styles.timeView}>.5m</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    friendView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
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
        marginLeft:1
    },
    timeView:{
        fontSize:14,
        marginLeft:1
    }
})