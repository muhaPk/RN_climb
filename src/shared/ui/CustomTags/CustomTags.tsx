import { View, Text } from 'react-native';
import { ReactNode } from 'react';


export const Ul = ({ children }: { children: ReactNode }) => {
  return <View className="pl-4">{children}</View>;
};


type LiProps = {
  children: ReactNode;
  bullet?: string;
  className?: string;
};

export const Li = ({ children, bullet = "•", className = "" }: LiProps) => {
  return (
    <View className="flex-row items-start mb-2">
      <Text className="text-lg mr-2 text-blue-600">{bullet}</Text>
      <Text className={`text-base ${className}`}>{children}</Text>
    </View>
  );
};
