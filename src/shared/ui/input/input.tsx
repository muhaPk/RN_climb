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

                        <View className='mx-auto w-full max-w-max my-2'>

                            <Text className="block text-sm">
                                Price
                            </Text>

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
                                className='px-3 py-1 border-2 border-gray-200 rounded'
                                {...rest}
                            />

                        </View>

                    )}
            />
            {errors[name] && <Text>This is required.</Text>}
        </>
    )
}