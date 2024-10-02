import React from 'react';
import {View, Text, Pressable} from 'react-native'


type Props = {
    title: string;
    onPress: () => void;
}

export const CustomButton = ({title, onPress, ...rest}: Props) => {


    return (
        <View className='bg-black rounded' {...rest}>

            <Pressable onPress={ onPress}>

                <Text className='text-white px-2 py-2 uppercase '>{title}</Text>

            </Pressable>

        </View>
    )
}