import React, {useRef} from 'react';
import {View, Text, Button, DrawerLayoutAndroid} from 'react-native'

export const BurgerMenu = () => {

    const drawer = useRef<DrawerLayoutAndroid>(null);



    const navigationView = () => (
        <View className='fixed h-screen z-50 bg-slate-100'>
          <Text>I'm in the Drawer!</Text>
          <Button
            title="Close drawer"
            onPress={() => drawer.current?.closeDrawer()}
          />
        </View>
      );


    return (

        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition='right'
            renderNavigationView={navigationView}>

            <View className=''>
                <Button
                    title="Open drawer"
                    onPress={() => drawer.current?.openDrawer()}
                />
            </View>

        </DrawerLayoutAndroid>

    )

}