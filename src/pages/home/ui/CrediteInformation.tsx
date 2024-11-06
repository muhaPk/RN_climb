import React, {FC} from 'react';
import { H1, H2, H3, T } from 'shared/ui/CustomText/CustomText';
import {Ul, Li} from 'shared/ui/CustomTags/CustomTags'
import { Container } from 'shared/ui/Container/Container';

  export const CrediteInformation: FC = () => {

    return (


        <Container className='my-10'>

          <H3 className='text-center mb-6'>Заявки на получение кредита можно подать:</H3>
          <Ul>
              <Li className='mb-4'>через мини-терминалы Runpay, расположенные по одному из выбранных адресов</Li>
              <Li className='mb-4'>онлайн через Личный кабинет Runpay</Li>
              <Li>через терминалы Runpay, расположенные в нескольких магазинах, таких как: Linella, №1, Starnet, Kaufland и др.</Li>
          </Ul>

        </Container>
        

    )

  }

  