import React from 'react'
import s2 from '../../s1-main/App.module.css'
import { S } from '../../s1-main/AppStyles'
import Stand from './Stand'

/*
* 1 - понять (и простить) SuperInputText
* 2 - в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx (строка 21)
* 3 - дописать onChangeCallback в SuperCheckbox.tsx чтоб оба чекбокса работали на стенде
* 4 - сделать стили в соответствии с дизайном
* */

const HW4 = () => {
    return (
        <S.HwWrapper id={'hw4'}>
            <S.Title className={s2.hwTitle}>Homework №4</S.Title>
            {/*демонстрация возможностей компонент:*/}
            <S.ContentWrapper className={s2.hw}>
                <Stand />
            </S.ContentWrapper>
        </S.HwWrapper>
    )
}

export default HW4
