import React, {FC, RefObject} from 'react';
import {Button, View, Text, Image, DrawerLayoutAndroid} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { PressableNavigation } from '../PressableNavigation/PressableNavigation';

type HeaderProps = {
  drawer: RefObject<DrawerLayoutAndroid>;
};

export const Header: FC<HeaderProps> = ({drawer}) => {

    // const navigation = useNavigation();


    return (
        <View className="flex-none flex-row justify-between p-4">


        <PressableNavigation page='Home'>
          <Image className='h-9 w-20' source={require('../../../shared/assets/logo.png')} />
        </PressableNavigation>


          {/* <Icon.Button 
            name="navicon" 
            size={30} 
            color="black" 
            backgroundColor="transparent" 
            underlayColor="transparent" 
            onPress={() => drawer.current?.openDrawer()} 
          /> */}


          <PressableNavigation page='Contacts'><Text>Contacts</Text></PressableNavigation>

          {/* <CustomButton title="Home" onPress={() => navigation.navigate('Home') } />
          <CustomButton title="Reg" onPress={() => navigation.navigate('Registration') } />
          <CustomButton title="Set" onPress={() => navigation.navigate('Settings') } /> */}


        </View>
    );
};
