import React from 'react';
import {View, Text} from 'react-native'
import {useNavigation} from "@react-navigation/native";

export const Footer = () => {

    const navigation = useNavigation();

    return (
        <View className="flex-none flex-row justify-between p-4 bg-gray-800">

          <Text className="text-white">footer text</Text>

        </View>
    );
};



