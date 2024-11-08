import React, {FC} from 'react';
import { CustomInput } from 'shared/ui/input/input'
import { SubmitButton } from 'shared/ui/SubmitButton/SubmitButton'
import { LinkButton } from 'shared/ui/LinkButton/LinkButton';
import { useForm } from "react-hook-form";
import { H1, Underline } from 'shared/ui/CustomText/CustomText';
import { Container } from 'shared/ui/Container/Container';
import { Lang } from 'shared/lang';

export const Login: FC = () => {

    const { form, login } = Lang()

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            phone: '',
        }
    });


    const onSubmit = (data: any) => {
        console.log('login')
    };


    return (

    <Container>


        <H1 className='mx-auto mt-6'>{login.vhod}</H1>
        <Underline />

        <CustomInput control={control} errors={errors} placeholder={form.inputs.phone} name="phone" />

        <SubmitButton className='mt-4' title={form.buttons.voiti} onPress={handleSubmit(onSubmit)} />
        <LinkButton className='mt-2' page='Registration' title={form.buttons.registratsia} styleColor='light' />

        
    </Container>


    );
}