import React, {ReactNode} from 'react';
import {View, Text} from 'react-native'

type Props = {
    type?: 'h1' | 'h2' | 'h3';
    children: ReactNode;
    className?: string;
}

export const CustomText = ({ children, type = 'h1', ...rest }: Props) => {


    const classTypes = {
        h1: 'text-blue-400 font-bold text-xl',
        h2: 'text-blue-400 font-bold text-lg',
        h3: 'text-blue-400 font-bold text-base',
    }

    return (

        <Text className={classTypes[type]} {...rest}>{children}</Text>

    )
}