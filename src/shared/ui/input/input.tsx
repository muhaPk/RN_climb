import React, {FC} from 'react';
import {View, Text, TextInput} from 'react-native'
import {Controller} from "react-hook-form";


type FormData = {
    control: any;
    errors: any;
    placeholder: string;
    name: string;
}

export const CustomInput: FC<FormData> = ({control, errors, placeholder, name, ...rest}: FormData) => {


    return (

        <>
            <Controller
                name={name}
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (

                        <View>

                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                placeholder={placeholder}

                                onBlur={() => {
                                    onBlur();
                                } }
                                // onFocus={}
                                placeholderTextColor='#aaa'
                                underlineColorAndroid='transparent'
                                className='px-2 py-2'
                                {...rest}
                            />

                        </View>

                    )}
            />
            {errors[name] && <Text>This is required.</Text>}
        </>
    )
}