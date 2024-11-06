import React, {FC} from 'react';
import {View} from 'react-native'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { CustomText, H1, H2, H3, T, Underline } from 'shared/ui/CustomText/CustomText';
import {Ul, Li} from 'shared/ui/CustomTags/CustomTags'
import { Container } from 'shared/ui/Container/Container';

  export const Steps: FC = () => {

    return (


        <Container className='mt-2'>

            <CustomText type='h1' className='text-center mt-10'>Как получить кредит?</CustomText>
            <Underline />


            <View className='flex flex-row justify-between mb-8'>
                <View className='p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 mx-2 rounded-full bg-[#29aae2]'>
                    <IconAnt name="edit" size={24} color="#fff" />
                </View>
            
                <View className='w-80 ml-4 pr-16'>
                    <CustomText type='h3' className=''>Заполните заявку</CustomText>
                    <T>Заявки на получение кредита можно подать через [мини-терминалы], [терминалы], [онлайн]</T>
                </View>
            </View>

            <View className='h-20 w-0 ml-9 -mt-20 mb-4 border-dotted border-l-2 border-sky-500'></View>

            <View className='flex flex-row justify-between mb-8'>
                <View className='p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 mx-2 rounded-full bg-[#29aae2]'>
                    <IconMaterialCommunity name="timer-sand" size={24} color="#fff" />
                </View>
                
                <View className='w-80 ml-4 pr-16'>
                    <CustomText type='h3' className=''>Дождитесь решения</CustomText>
                    <T>Дождитесь решения по вашей заявке, это займет не более 10 минут.</T>
                </View>
            </View>

            <View className='h-20 w-0 ml-9 -mt-14 mb-4 border-dotted border-l-2 border-sky-500'></View>

            <View className='flex flex-row justify-between mb-8'>
                <View className='p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 mx-2 rounded-full bg-[#29aae2]'>
                    <IconMaterialIcons name="attach-money" size={24} color="#fff" />
                </View>
                
                <View className='w-80 ml-4 pr-16'>
                    <CustomText type='h3' className=''>Получите деньги</CustomText>
                    <T>После подтверждения заявки получите ваши деньги у нас в офисе, на вашу банковскую карту или на электронный кошелёк RunPay.</T>
                </View>
            </View>

        </Container>

    )

  }

  