import React, {FC, useRef} from 'react';
import {Button, View, Text, Image, DrawerLayoutAndroid} from 'react-native'
import {useNavigation, NavigationProp} from "@react-navigation/native";
import { RootStackParamList } from './rootStackParamList'
import { BurgerMenu } from '../burger-menu/burger-menu';
import { CustomButton } from '../button/button';


export const Header: FC = ({drawer}: any) => {

    // const navigation = useNavigation();


    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View className="flex-none flex-row justify-between p-4 bg-gray-800">

          <Image className='h-9 w-20' source={require('../../../shared/assets/logo.png')} />

          <Button
                    title="Open drawer"
                    onPress={() => drawer.current?.openDrawer()}
                />


          {/* <CustomButton title="Home" onPress={() => navigation.navigate('Home') } />
          <CustomButton title="Reg" onPress={() => navigation.navigate('Registration') } />
          <CustomButton title="Set" onPress={() => navigation.navigate('Settings') } /> */}

          {/* <BurgerMenu /> */}

        </View>
    );
};
