import React, {FC, useRef} from 'react';
import { Text, View } from 'react-native'
import { useForm } from "react-hook-form";
import { CustomInput } from 'shared/ui/input/input'
import { CustomButton } from 'shared/ui/button/button'

export const Contacts: FC = () => {


    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = (data: any) => {
        console.log('submit')
    };


    return (

        <View className='w-full px-2'>


            <View className='items-center'>
                <Text>O.C.N."ONLINE CREDIT" SRL</Text>
                <Text>(+373) 60371300</Text>
                <Text>online-credit.md@mail.ru</Text>
                <Text>Мун. Кишинёв, бд. Мирча чел Бэтрын, 12/2, оф.301 (маг. Тирас) 4 этаж</Text>
                <Text>Режим работы: Пн. - Пт. 9:00 - 18:00 Суб. - 9:00 - 17:00 Вс.- 10:00 - 17:00</Text>
            </View>

            <Text className='mt-4 center'>Написать нам</Text>

            <CustomInput control={control} errors={errors} placeholder="Имя" name="name" />
            <CustomInput control={control} errors={errors} placeholder="Телефон" name="phone" />
            <CustomInput control={control} errors={errors} type='textarea' placeholder="Сообщение" name="message" />

            <CustomButton type='button' title='Отправить' onPress={handleSubmit(onSubmit)} />


        </View>


    );
}