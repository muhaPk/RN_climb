import React, {FC, useRef} from 'react';
import { Image, View, StyleSheet } from 'react-native'
import Slider from "react-native-a11y-slider";
import { CustomText, H1, H2, H3, T } from 'shared/ui/CustomText/CustomText';
import Icon from 'react-native-vector-icons/Entypo'
import {Ul, Li} from 'shared/ui/CustomTags/CustomTags'

export const Home: FC = () => {

    return (

    <View className='pb-8'>
    
        <View className='w-full text-[#ccc]'>

            <H1 className='text-center my-4'>Кредит за 10 минут!</H1>

            <T className='text-center mb-4'>Заполните заявку и уже через 10 минут вы сможете получить деньги.</T>
            <T className='text-center'>Заявки на получение кредита можно подать:</T>
            <Ul>
                <Li>через мини-терминалы Runpay, расположенные по одному из выбранных адресов</Li>
                <Li>онлайн через Личный кабинет Runpay</Li>
                <Li>через терминалы Runpay, расположенные в нескольких магазинах, таких как: Linella, №1, Starnet, Kaufland и др.</Li>
            </Ul>



            <View className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-600'>

                <Image className='h-9 w-20' source={require('../../shared/assets/logo.png')} />
                <View className='relative p-8 mb-4'>
                    
                </View>

            </View>


            <CustomText type='h1' className='text-center mb-4 mt-6'>Калькулятор кредита</CustomText>


            <Slider min={1} max={100} values={[10, 87]} markerColor='#29aae2' />
            <Slider min={1} max={100} values={[10, 87]} markerColor='#29aae2' />
            

        </View>

        <View className='w-full mt-4 flex flex-row justify-between'>
            <T>Сумма возврата</T>
            <T>MDL</T>
        </View>

        <View className='w-full mt-2 flex flex-row justify-between'>
            <T>Сумма кредита</T>
            <T>MDL</T>
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



        <View className='w-full flex flex-col items-center mt-8 pb-2'>

            <Icon 
                name="time-slot" 
                size={30} 
                color="#29aae2"
                />
            <CustomText type='h3'>Получайте деньги мгновенно</CustomText>
            <T className='text-center'>Заполните заявку и уже через 10 минут вы сможете получить деньги.</T>
        </View>

        <View className='w-full flex flex-col items-center py-2'>

            <Icon 
                name="time-slot" 
                size={30} 
                color="#29aae2"
                />
            <CustomText type='h3'>Как получить кредит?</CustomText>
            <T className='text-center'>Заполните заявку и уже через 10 минут вы сможете получить деньги.</T>
        </View>

        <View className='w-full flex flex-col items-center py-2'>

            <Icon 
                name="time-slot" 
                size={30} 
                color="#29aae2"
                />
            <CustomText type='h3'>Требования к заёмщику:</CustomText>
            <T className='text-center'>Заполните заявку и уже через 10 минут вы сможете получить деньги.</T>
        </View>



        <CustomText type='h1' className='text-center mt-6'>Как получить кредит?</CustomText>

        <CustomText type='h3' className='text-center my-4'>Заполните заявку</CustomText>
        <T>Заявки на получение кредита можно подать: </T>
        <Ul>
            <Li>через мини-терминалы Runpay, расположенные по одному из выбранных адресов, посмотреть карту: Link</Li>
            <Li>онлайн через Личный кабинет Runpay: Link</Li>
            <Li>через терминалы Runpay, расположенные в нескольких магазинах, таких как: Linella, №1, Starnet, Kaufland и др.</Li>
        </Ul>
        
        <CustomText type='h3' className='text-center my-4'>Дождитесь решения</CustomText>
        <T>Дождитесь решения по вашей заявке, это займет не более 10 минут.</T>
        
        <CustomText type='h3' className='text-center my-4'>Получите деньги</CustomText>
        <T>После подтверждения заявки получите ваши деньги у нас в офисе, на вашу банковскую карту или на электронный кошелёк RunPay.</T>


        <CustomText type='h1' className='text-center my-4'>Требования к заёмщику:</CustomText>
        
        <CustomText type='h3' className='text-center'>Возраст</CustomText>
        <T className='text-center'>Возраст от 22 до 70 лет.</T>
        
        <CustomText type='h3' className='text-center mt-2'>Гражданство Республики Молдова</CustomText>
        <T className='text-center'>Кредиты предоставляются только гражданам Республики Молдова.</T>
        
        <CustomText type='h3' className='text-center mt-2'>Мобильный телефон</CustomText>
        <T className='text-center'>Наличие мобильного телефона или смартфона.</T>

    </View>

    );
}