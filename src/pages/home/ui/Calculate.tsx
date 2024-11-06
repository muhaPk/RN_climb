import React, {FC, useState} from 'react';
import {View} from 'react-native'
import { CustomText, H1, H2, H3, T, Underline } from 'shared/ui/CustomText/CustomText';
import { Container } from 'shared/ui/Container/Container';
import Slider from "react-native-a11y-slider";

  export const Calculate: FC = () => {

    const [sum, setSum] = useState([4000])
    const [period, setPeriod] = useState([3])

    const handleSum = (value: number) => setSum([value])
    const handlePeriod = (value: number) => setPeriod([value])

    return (


            <Container className='mb-8 px-4'>

                <CustomText type='h1' className='text-center'>Калькулятор кредита</CustomText>
                <Underline />


                <Slider 
                    min={2000} 
                    max={50000} 
                    increment={1000}
                    markerColor='#29aae2'
                    values={sum} 
                    onChange={(value: number[]) => handleSum(value[0])} 
                    labelStyle={{backgroundColor: '#29aae2', borderColor: 'transparent'}}
                    labelTextStyle={{color: 'white'}}
                />

                <Slider 
                    min={1} 
                    max={48} 
                    increment={1}
                    markerColor='#29aae2' 
                    values={period} 
                    onChange={(value: number[]) => handlePeriod(value[0])} 
                    labelStyle={{backgroundColor: '#29aae2', borderColor: 'transparent'}}
                    labelTextStyle={{color: 'white'}}
                />
                    


                <View className='w-full mt-4 flex flex-row justify-between'>
                    <T>Сумма возврата</T>
                    <T>{sum} MDL</T>
                </View>

                <View className='w-full mt-2 flex flex-row justify-between'>
                    <T>Сумма кредита</T>
                    <T>{period} MDL</T>
                </View>

                <View className='w-full mt-2 flex flex-row justify-between'>
                    <T>Комиссионные</T>
                    <T>MDL</T>
                </View>

                <View className='w-full mt-2 flex flex-row justify-between'>
                    <T>Процентная ставка (50% годовых)</T>
                    <T>MDL</T>
                </View>

                <View className='w-full mt-2 flex flex-row justify-between'>
                    <T>Ежемесячный платеж</T>
                    <T>MDL</T>
                </View>

            </Container>
        

    )

  }

  