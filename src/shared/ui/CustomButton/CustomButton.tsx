import React from 'react';
import {View, Text, Pressable} from 'react-native'
import {useNavigation, NavigationProp} from "@react-navigation/native";
import { RootStackParamList } from '../layout/rootStackParamList'

type Props = {
    type?: 'link' | 'button';
    title: string;
    onPress: any;
    className?: string;
}

export const CustomButton = ({type = 'link', title, onPress, ...rest}: Props) => {


    const classTypes = {
        buttonCover: 'bg-blue-500 rounded px-4 py-2 items-center',
        buttonText: 'text-white',
        linkCover: '',
        linkText: 'text-blue-600 font-bold'
    }

    return (
        <View className={classTypes[`${type}Cover`]} {...rest}>

            <Pressable onPress={() => onPress} >

                <Text className={classTypes[`${type}Text`]}>{title}</Text>

            </Pressable>

        </View>
    )
}