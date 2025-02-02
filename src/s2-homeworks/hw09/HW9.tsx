import React from 'react'
import Clock from './Clock'
import s2 from '../../s1-main/App.module.css'
import { S } from '../../s1-main/AppStyles'

/*
* 1 - в файле Clock.tsx дописать функции stop, start, onMouseEnter, onMouseLeave
* 2 - в файле Clock.tsx из переменной date вычислить значения stringTime, stringDate, stringDay, stringMonth
* 3 - в файле Clock.tsx дизэйблить кнопки стоп / старт если таймер не запущен / запущен соответственно
* 4 - сделать стили в соответствии с дизайном
* */

const HW9 = () => {
    return (
        <S.HwWrapper id={'hw9'}>
            <S.Title className={s2.hwTitle}>Hometask №9</S.Title>

            <S.ContentWrapper className={s2.hw}>
                <Clock />
            </S.ContentWrapper>
        </S.HwWrapper>
    )
}

export default HW9
