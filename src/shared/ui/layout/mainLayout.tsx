import React, {FC, ReactNode, useRef} from 'react';
import {View, ScrollView, Text, Button, DrawerLayoutAndroid} from 'react-native'
import { Footer } from './footer';
import { Header } from './header';
import FeatherIcon from 'react-native-vector-icons/Feather'
import { PressableNavigation } from '../PressableNavigation/PressableNavigation';

// import { useSelector } from "react-redux";
// import Meta from '../seo';

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({children}: Props) => {

  // const isAuth = useSelector((state: any) => state.users.isAuth)

  const drawer = useRef<DrawerLayoutAndroid>(null);

  const navigationView = () => (
    // <View className='fixed h-screen z-50 bg-white p-2'>
    <View className='flex-1 p-2'>

          <FeatherIcon.Button 
            name="x" 
            size={30} 
            color="black" 
            backgroundColor="transparent" 
            underlayColor="transparent" 
            onPress={() => drawer.current?.closeDrawer()} 
          />


        <PressableNavigation page='Home'><Text>Главная</Text></PressableNavigation>
        <PressableNavigation page='Contacts'><Text>Контакты</Text></PressableNavigation>
        <PressableNavigation page='Registration'><Text>Регистрация</Text></PressableNavigation>

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

                <ScrollView className='flex-1 p-2 bg-white'>{children}</ScrollView>

                <Footer />

            </View>

        </DrawerLayoutAndroid>

    );
};
