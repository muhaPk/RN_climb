import React, {FC, ReactNode, useRef} from 'react';
import {View, Text, Button, DrawerLayoutAndroid} from 'react-native'
import { Footer } from './footer';
import { Header } from './header';
import { BurgerMenu } from '../burger-menu/burger-menu';
// import { useSelector } from "react-redux";
// import Meta from '../seo';

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({children}: Props) => {

  // const isAuth = useSelector((state: any) => state.users.isAuth)

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

            <View className='flex-1'>
                {/*<Meta isAddHireWord />*/}

                <Header drawer={drawer} />

                <View className='flex-1 justify-center items-center bg-white'>{children}</View>

                <Footer />

            </View>

        </DrawerLayoutAndroid>

    );
};
