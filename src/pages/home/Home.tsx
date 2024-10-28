import React, {FC, useRef} from 'react';
import { Text, View } from 'react-native'
import Slider from "react-native-a11y-slider";
import { CustomText } from 'shared/ui/CustomText/CustomText';

export const Home: FC = () => {

    return (

    <>
    
    <View className='w-full'>

        <CustomText type='h1' className='text-center'>Кредит за 10 минут!</CustomText>

        <Text className='text-center mt-6 mb-4'>Калькулятор кредита</Text>


        <Slider min={1} max={100} values={[10, 87]} />
        <Slider min={1} max={100} values={[10, 87]} />
        

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


    <View className='w-full mt-6'>
        <Text className='text-center'>Почему выбирают нас?</Text>
    </View>

    <View className='w-full mt-6'>
        <Text className='text-center'>Как получить кредит?</Text>
    </View>

    <View className='w-full mt-6'>
        <Text className='text-center'>Требования к заёмщику:</Text>
    </View>

    </>

    );
}