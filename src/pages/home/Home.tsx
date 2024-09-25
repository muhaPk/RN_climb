import React, {FC} from 'react';
import { Text, View } from 'react-native'
import { CustomInput } from 'shared/ui/input/input'
import { useForm } from "react-hook-form";

export const Home: FC = () => {
  
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });


    return (

    <View>
        <Text>Home!</Text>
        <Text>This is a subtitle</Text>

        <CustomInput control={control} errors={errors} placeholder="Е-маил" name="email" />

    </View>


    );
}