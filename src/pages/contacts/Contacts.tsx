import React, {FC} from 'react';
import { Text, View, Button, Linking } from 'react-native'
import { useForm } from "react-hook-form";
import { CustomInput } from 'shared/ui/input/input'
import email from 'react-native-email';
import { EMAIL } from 'shared/config/consts';

export const Contacts: FC = () => {


    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            phone: '',
            message: '',
        }
    });

    const onSubmit = (data: any) => {

        email([EMAIL], {
            subject: 'Test',
            body: data.message,
          }).catch(console.error);
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

                <Button title="Отирпвить" onPress={handleSubmit(onSubmit)} />

        </View>


    );
}