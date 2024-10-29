import React, {FC, useRef} from 'react';
import { Text, View, StyleSheet } from 'react-native'
import Slider from "react-native-a11y-slider";
import { CustomText } from 'shared/ui/CustomText/CustomText';
import Icon from 'react-native-vector-icons/Entypo'
import {Ul, Li} from 'shared/ui/CustomTags/CustomTags'

export const Home: FC = () => {

    return (

    <View className='pb-8'>
    
        <View className='w-full'>

            <CustomText type='h1' className='text-center my-4'>Кредит за 10 минут!</CustomText>

            <Text className='text-center mb-4'>Заполните заявку и уже через 10 минут вы сможете получить деньги.</Text>
            <Text className='text-center'>Заявки на получение кредита можно подать:</Text>
            <Ul>
                <Li>через мини-терминалы Runpay, расположенные по одному из выбранных адресов</Li>
                <Li>онлайн через Личный кабинет Runpay</Li>
                <Li>через терминалы Runpay, расположенные в нескольких магазинах, таких как: Linella, №1, Starnet, Kaufland и др.</Li>
            </Ul>

            <CustomText type='h1' className='text-center mb-4 mt-6'>Калькулятор кредита</CustomText>


            <Slider min={1} max={100} values={[10, 87]} markerColor='#29aae2' />
            <Slider min={1} max={100} values={[10, 87]} markerColor='#29aae2' />
            

        </View>

        <View className='w-full mt-4 flex flex-row justify-between'>
            <Text>Сумма возврата</Text>
            <Text>MDL</Text>
        </View>

        <View className='w-full mt-2 flex flex-row justify-between'>
            <Text>Сумма кредита</Text>
            <Text>MDL</Text>
        </View>

        <View className='w-full mt-2 flex flex-row justify-between'>
            <Text>Комиссионные</Text>
            <Text>MDL</Text>
        </View>

        <View className='w-full mt-2 flex flex-row justify-between'>
            <Text>Процентная ставка (50% годовых)</Text>
            <Text>MDL</Text>
        </View>

        <View className='w-full mt-2 flex flex-row justify-between'>
            <Text>Ежемесячный платеж</Text>
            <Text>MDL</Text>
        </View>



        <View className='w-full flex flex-col items-center mt-8 pb-2'>

            <Icon 
                name="time-slot" 
                size={30} 
                color="#29aae2"
                />
            <CustomText type='h3'>Получайте деньги мгновенно</CustomText>
            <Text className='text-center'>Заполните заявку и уже через 10 минут вы сможете получить деньги.</Text>
        </View>

        <View className='w-full flex flex-col items-center py-2'>

            <Icon 
                name="time-slot" 
                size={30} 
                color="#29aae2"
                />
            <CustomText type='h3'>Как получить кредит?</CustomText>
            <Text className='text-center'>Заполните заявку и уже через 10 минут вы сможете получить деньги.</Text>
        </View>

        <View className='w-full flex flex-col items-center py-2'>

            <Icon 
                name="time-slot" 
                size={30} 
                color="#29aae2"
                />
            <CustomText type='h3'>Требования к заёмщику:</CustomText>
            <Text className='text-center'>Заполните заявку и уже через 10 минут вы сможете получить деньги.</Text>
        </View>



        <CustomText type='h1' className='text-center mt-6'>Как получить кредит?</CustomText>

        <CustomText type='h3' className='text-center my-4'>Заполните заявку</CustomText>
        <Text>Заявки на получение кредита можно подать: </Text>
        <Ul>
            <Li>через мини-терминалы Runpay, расположенные по одному из выбранных адресов, посмотреть карту: Link</Li>
            <Li>онлайн через Личный кабинет Runpay: Link</Li>
            <Li>через терминалы Runpay, расположенные в нескольких магазинах, таких как: Linella, №1, Starnet, Kaufland и др.</Li>
        </Ul>
        
        <CustomText type='h3' className='text-center my-4'>Дождитесь решения</CustomText>
        <Text>Дождитесь решения по вашей заявке, это займет не более 10 минут.</Text>
        
        <CustomText type='h3' className='text-center my-4'>Получите деньги</CustomText>
        <Text>После подтверждения заявки получите ваши деньги у нас в офисе, на вашу банковскую карту или на электронный кошелёк RunPay.</Text>


        <CustomText type='h1' className='text-center my-4'>Требования к заёмщику:</CustomText>
        
        <CustomText type='h3' className='text-center'>Возраст</CustomText>
        <Text className='text-center'>Возраст от 22 до 70 лет.</Text>
        
        <CustomText type='h3' className='text-center mt-2'>Гражданство Республики Молдова</CustomText>
        <Text className='text-center'>Кредиты предоставляются только гражданам Республики Молдова.</Text>
        
        <CustomText type='h3' className='text-center mt-2'>Мобильный телефон</CustomText>
        <Text className='text-center'>Наличие мобильного телефона или смартфона.</Text>

    </View>

    );
}