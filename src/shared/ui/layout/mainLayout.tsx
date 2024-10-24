import React, {FC, ReactNode, useRef} from 'react';
import {View, Text, Button, DrawerLayoutAndroid} from 'react-native'
import { Footer } from './footer';
import { Header } from './header';
import { CustomButton } from '../button/button';
import {useNavigation, NavigationProp} from "@react-navigation/native";
import { RootStackParamList } from './rootStackParamList'
import Icon from 'react-native-vector-icons/EvilIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'

// import { useSelector } from "react-redux";
// import Meta from '../seo';

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({children}: Props) => {

  // const isAuth = useSelector((state: any) => state.users.isAuth)

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const drawer = useRef<DrawerLayoutAndroid>(null);

  const navigationView = () => (
    <View className='fixed h-screen z-50 bg-slate-100'>

          <FeatherIcon.Button 
            name="x" 
            size={30} 
            color="black" 
            backgroundColor="transparent" 
            underlayColor="transparent" 
            onPress={() => drawer.current?.closeDrawer()} 
          />

      <CustomButton title="Set" onPress={() => navigation.navigate('Settings') } />



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
