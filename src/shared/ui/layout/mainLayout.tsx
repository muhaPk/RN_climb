import React, {FC, ReactNode, useRef} from 'react';
import {View, ScrollView, Text, Button, DrawerLayoutAndroid} from 'react-native'
import { Footer } from './footer';
import { Header } from './header';
import FeatherIcon from 'react-native-vector-icons/Feather'

// import { useSelector } from "react-redux";
// import Meta from '../seo';

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({children}: Props) => {

  // const isAuth = useSelector((state: any) => state.users.isAuth)


    return (


      <View className='flex-1'>
          {/*<Meta isAddHireWord />*/}

          <Header />

          <ScrollView className='flex-1 p-2 bg-white'>{children}</ScrollView>

          <Footer />

      </View>


    );
};
