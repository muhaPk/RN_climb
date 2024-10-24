import React, {FC, useRef} from 'react';
import { Text, View } from 'react-native'
import { CustomInput } from 'shared/ui/input/input'
import { CustomButton } from 'shared/ui/button/button'
import { useForm } from "react-hook-form";

export const Registration: FC = () => {

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

    <View className='w-full items-center'>



        <Text>Регистрация</Text>

        <CustomInput control={control} errors={errors} title="Иднп" placeholder="Иднп" name="id_passport" />
        <CustomInput control={control} errors={errors} title="Телефон" placeholder="Телефон" name="phone" />
        <CustomInput control={control} errors={errors} title="Имя" placeholder="Имя" name="name" />
        <CustomInput control={control} errors={errors} title="Фамилия" placeholder="Фамилия" name="surname" />

        <CustomButton title='Регистрация' onPress={handleSubmit(onSubmit)} />

        

    </View>


    );
}