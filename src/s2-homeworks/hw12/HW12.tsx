import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId, type InitStateType} from './bll/themeReducer'
import {S} from '../../s1-main/AppStyles'
import type {AppStoreType} from "../hw10/bll/store";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {

    const dispatch = useDispatch()
    // взять ид темы из редакса
    const themeId = useSelector((state: AppStoreType): number => state.theme.themeId)

    const change = (id: number) => { // дописать функцию
        dispatch(changeThemeId(+id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <S.HwWrapper id={'hw12'}>
            <S.Title id={'hw12-text'} className={s2.hwTitle}>
                Hometask №12
            </S.Title>

            <S.ContentWrapper className={s2.hw}>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    // сделать переключение тем
                    options={themes}
                    value={themeId}
                    onChangeOption={change}

                />
            </S.ContentWrapper>
        </S.HwWrapper>
    )
}

export default HW12
