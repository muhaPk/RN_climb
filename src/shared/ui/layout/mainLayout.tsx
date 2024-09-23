import React, {FC, ReactNode} from 'react';

import {View, Text} from 'react-native'

// import Meta from '../seo';

import { Footer } from './footer';
import { Header } from './header';
// import { useSelector } from "react-redux";

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({children}: Props) => {

  // const isAuth = useSelector((state: any) => state.users.isAuth)

    return (
        <View className='flex-1'>
            {/*<Meta isAddHireWord />*/}

            <Header />

            <View className='flex-1 justify-center items-center bg-slate-300'>{children}</View>

            <Footer />

        </View>
    );
};
