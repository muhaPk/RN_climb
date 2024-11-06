import React, {FC, useRef} from 'react';
import { CustomInput } from 'shared/ui/input/input'
import { SubmitButton } from 'shared/ui/SubmitButton/SubmitButton'
import { useForm } from "react-hook-form";
import { H1, Underline } from 'shared/ui/CustomText/CustomText';
import { Container } from 'shared/ui/Container/Container';

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

    <Container>


        <H1 className='mx-auto mt-6'>Регистрация</H1>
        <Underline />

        <CustomInput control={control} errors={errors} title="Иднп" placeholder="Иднп" name="id_passport" />
        <CustomInput control={control} errors={errors} title="Телефон" placeholder="Телефон" name="phone" />
        <CustomInput control={control} errors={errors} title="Имя" placeholder="Имя" name="name" />
        <CustomInput control={control} errors={errors} title="Фамилия" placeholder="Фамилия" name="surname" className='mb-4' />

        <SubmitButton title='Регистрация' onPress={handleSubmit(onSubmit)} />

        
    </Container>


    );
}