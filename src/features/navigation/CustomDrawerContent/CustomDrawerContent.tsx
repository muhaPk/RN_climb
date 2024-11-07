import React, {FC} from 'react';
import { Text, View } from 'react-native';
import { T } from 'shared/ui/CustomText/CustomText';
import { DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { Lang } from 'shared/lang';


export const CustomDrawerContent: FC<DrawerContentComponentProps> = (props) => {

    const { menu } = Lang()

    return (
        <DrawerContentScrollView {...props}>

            <DrawerItem
                label={menu.home}
                onPress={() => props.navigation.navigate('Home')}
            />

            <DrawerItem
                label={menu.registration}
                onPress={() => props.navigation.navigate('Registration')}
            />

            <DrawerItem
                label={menu.contacts}
                onPress={() => props.navigation.navigate('Contacts')}
            />

            <DrawerItem
                label={menu.login}
                onPress={() => props.navigation.navigate('Login')}
            />


            <View className='border-t border-gray-400'>
                <View className='mt-4 mx-6 flex-row justify-between'>
                    <T>Язык:</T>
                    <T>ru / ro</T>
                </View>

            </View>


        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;
