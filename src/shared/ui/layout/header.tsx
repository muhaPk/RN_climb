import React from 'react';
import {Button, View, Text} from 'react-native'
import {useNavigation, NavigationProp} from "@react-navigation/native";
import { RootStackParamList } from './rootStackParamList'

import { ButtonCustom } from '../button/button';


export const Header = () => {

    // const navigation = useNavigation();

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View className="flex-none flex-row justify-between p-4 bg-gray-800">


          <ButtonCustom title="Home" onPress={() => navigation.navigate('Home') } />
          <ButtonCustom title="Settings" onPress={() => navigation.navigate('Settings') } />

        </View>
    );
};
