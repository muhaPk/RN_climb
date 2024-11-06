import React, {FC} from 'react';
import { Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';


export const CustomDrawerContent: FC<DrawerContentComponentProps> = (props) => {

    return (
        <DrawerContentScrollView {...props}>

            <DrawerItem
                label="Home"
                onPress={() => props.navigation.navigate('Home')}
            />

            <DrawerItem
                label="Registration"
                onPress={() => props.navigation.navigate('Registration')}
            />

            <DrawerItem
                label="Contacts"
                onPress={() => props.navigation.navigate('Contacts')}
            />


        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;
