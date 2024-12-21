import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import styled from "styled-components";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onBlur: () => void // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    lastUserName?: string // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    } // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : "" // need to fix with (?:)

    return (
        <GreetingWrapper id={'hw3-form'} className={s.greetingForm}>
            <PeopleAdd className={s.text}>
                {'Людей добавили: '}
                <TotalUsers id={'hw3-users-total'}>
                    {totalUsers}
                </TotalUsers>
            </PeopleAdd>

            <InputAndButtonContainer className={s.inputAndButtonContainer}>
                <InputContainer>
                    <Input
                        id={'hw3-input'}
                        value={name}
                        onChange={setNameCallback}
                        className={inputClass}
                        onKeyDown={onEnter}
                        onBlur={onBlur}
                    />
                    <Error id={'hw3-error'} className={s.error}>
                        {error}
                    </Error>
                </InputContainer>

                <Button
                    id={'hw3-button'}
                    onClick={addUser}
                    className={s.button}
                    disabled={!name.trim()}
                >
                    Add
                </Button>
            </InputAndButtonContainer>

            {lastUserName && (
                <GreetingName className={s.greeting}>
                    Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
                </GreetingName>
            )}
        </GreetingWrapper>
    )
}

export default Greeting

const GreetingWrapper = styled.div`
`

const PeopleAdd = styled.div`
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    opacity: .5;
`

const TotalUsers = styled.span`
`
const InputAndButtonContainer = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 9px;
`

const InputContainer = styled.div`
    
`
const Error = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #c00;
`

const Input = styled.input<{className: string}>`
    margin-bottom: 7px ;
    padding-left: 12px;
    border-radius: 5px;
    border: 1px solid ${props => props.className ? "#c00" : "#d1d1d1"};
    width: 372px;
    height: 36px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #000;
`

const Button = styled.button<{disabled: boolean}>`
    width: 78px;
    height: 36px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.4;
    color: #fff;
    border: none;
    background: #06c;
    opacity: ${props => props.disabled ? 0.5 : 1};
    border-radius: 3px;
    cursor: pointer;
`

const GreetingName = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #000;
`
