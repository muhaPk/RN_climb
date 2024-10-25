import React, {FC} from 'react';
import {Button, View, Text, Image} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { PressableWrapper } from '../PressableWrapper/PressableWrapper';

export const Header: FC = ({drawer}: any) => {

    // const navigation = useNavigation();


    return (
        <View className="flex-none flex-row justify-between p-4">


        <PressableWrapper page='Home'>
          <Image className='h-9 w-20' source={require('../../../shared/assets/logo.png')} />
        </PressableWrapper>


          <Icon.Button 
            name="navicon" 
            size={30} 
            color="black" 
            backgroundColor="transparent" 
            underlayColor="transparent" 
            onPress={() => drawer.current?.openDrawer()} 
          />



          {/* <CustomButton title="Home" onPress={() => navigation.navigate('Home') } />
          <CustomButton title="Reg" onPress={() => navigation.navigate('Registration') } />
          <CustomButton title="Set" onPress={() => navigation.navigate('Settings') } /> */}


        </View>
    );
};
