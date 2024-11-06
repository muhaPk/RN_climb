import React, {FC} from 'react';
import {View} from 'react-native'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons'
import { CustomText, H1, H2, H3, T, Underline } from 'shared/ui/CustomText/CustomText';
import Slider from "react-native-a11y-slider";
import { Container } from 'shared/ui/Container/Container';

  export const Requirements: FC = () => {

    return (


        <Container className='mt-8 pb-6 bg-[#29aae2]'>

            <CustomText type='h1' className='text-center mt-8 text-white'>Требования к заёмщику:</CustomText>
            <Underline className='border-b-white' />
            
            <View className='flex flex-row'>

                <View className='p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 ml-2 mr-4 rounded-full bg-[#30c1ff]'>
                  <IconIonicons name="man-sharp" size={24} color="#fff" />
                </View>

                <View>
                  <CustomText type='h3' className='text-white'>Возраст</CustomText>
                  <T className='text-[#eee] leading-5'>Возраст от 22 до 70 лет.</T>
                </View>

            </View>
            
            <View className='flex flex-row'>

                <View className='p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 ml-2 mr-4 rounded-full bg-[#30c1ff]'>
                  <IconIonicons name="flag" size={24} color="#fff" />
                </View>

                <View>
                  <CustomText type='h3' className='text-white'>Гражданство Республики Молдова</CustomText>
                  <T className='text-[#eee] pr-8 leading-5'>Кредиты предоставляются только гражданам Республики Молдова.</T>
                </View>

            </View>
            
            <View className='flex flex-row'>

                <View className='p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 ml-2 mr-4 rounded-full bg-[#30c1ff]'>
                  <IconMaterial name="cellphone-play" size={24} color="#fff" />
                </View>

                <View>
                  <CustomText type='h3' className='text-white'>Мобильный телефон</CustomText>
                  <T className='text-[#eee] pr-8 leading-5'>Наличие мобильного телефона или смартфона.</T>
                </View>

            </View>



        </Container>
        

    )

  }

  