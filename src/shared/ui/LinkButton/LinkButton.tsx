import React from 'react';
import {View, Text, Pressable} from 'react-native'
import {useNavigation, NavigationProp} from "@react-navigation/native";
import { RootStackParamList } from '../layout/rootStackParamList'

type Props = {
    title: string;
    page: keyof RootStackParamList;
    style?: 'dark' | 'light'
}

export const LinkButton = ({title, page, style = 'dark', ...rest}: Props) => {

    const baseViewStyle = 'w-min rounded px-6 py-2.5 items-center self-start mx-auto';
    const baseTextStyle = 'font-bold';


    const viewStyleVariants = {
        light: `${baseViewStyle} bg-white`,
        dark: `${baseViewStyle} bg-[#29aae2]`
    };
    const textStyleVariants = {
        light: `${baseTextStyle} text-[#29aae2]`,
        dark: `${baseTextStyle} text-white`
    };


    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        
        <Pressable onPress={() => navigation.navigate(page)}>

            <View className={viewStyleVariants[style]} {...rest}>

                <Text className={textStyleVariants[style]}>{title}</Text>

            </View>

        </Pressable>

    )
}