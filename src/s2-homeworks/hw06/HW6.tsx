import React, { useState } from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import { restoreState, saveState } from './localStorage/localStorage'
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s from './HW6.module.css'
import { S } from '../../s1-main/AppStyles'

/*
 * 1 - в файле SuperEditableSpan.tsx дописать логику функций onEnterCallback, onBlurCallback, onDoubleClickCallBack
 * 2 - дописать логику функции restore
 * 3 - сделать стили в соответствии с дизайном
 */

const HW6 = () => {
    const [value, setValue] = useState<string>('')
    console.log(value)
    const save = () => {
        saveState<string>('hw6-editable-span-value', value)
    }
    const restore = () => {
        // делают студенты
        setValue(restoreState<string>('hw6-editable-span-value', 'localStorage is empty'))

    }

    return (
        <S.HwWrapper id={'hw6'}>
            <S.Title className={s2.hwTitle}>Homework #6</S.Title>

            {/*демонстрация возможностей компоненты:*/}
            <S.ContentWrapper className={s2.hw}>
                <div className={s.editableSpanContainer}>
                    <SuperEditableSpan
                        id={'hw6-spanable-input'}
                        value={value}
                        onChangeText={setValue}
                        spanProps={{
                            id: 'hw6-editable-span',
                            defaultText: 'Edit text',
                        }}
                    />
                </div>

                <div className={s.buttonsContainer}>
                    <SuperButton id={'hw6-save'} onClick={save}>
                        Save to LocalStorage
                    </SuperButton>
                    <SuperButton
                        id={'hw6-restore'}
                        onClick={restore}
                        xType={'secondary'}
                    >
                        Get from LocalStorage
                    </SuperButton>
                </div>
            </S.ContentWrapper>
        </S.HwWrapper>
    )
}

export default HW6
