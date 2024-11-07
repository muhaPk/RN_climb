import React, {FC, useRef} from 'react';
import { CustomInput } from 'shared/ui/input/input'
import { SubmitButton } from 'shared/ui/SubmitButton/SubmitButton'
import { useForm } from "react-hook-form";
import { H1, Underline } from 'shared/ui/CustomText/CustomText';
import { Container } from 'shared/ui/Container/Container';
import { Lang } from 'shared/lang';

export const Registration: FC = () => {

    const { form, registration } = Lang()

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


        <H1 className='mx-auto mt-6'>{registration.registratia}</H1>
        <Underline />

        <CustomInput control={control} errors={errors} placeholder={form.inputs.idnp} name="id_passport" />
        <CustomInput control={control} errors={errors} placeholder={form.inputs.phone} name="phone" />
        <CustomInput control={control} errors={errors} placeholder={form.inputs.name} name="name" />
        <CustomInput control={control} errors={errors} placeholder={form.inputs.surname} name="surname" className='mb-4' />

        <SubmitButton title={form.buttons.registratsia} onPress={handleSubmit(onSubmit)} />

        
    </Container>


    );
}