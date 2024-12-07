import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import avatarFriend from './avatarka.png'
import styled from "styled-components";


/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type UserType = {
    avatar: string,
    name: string
}

export type MessageInType = {
    text: string,
    time: string
}

export type MessageType = {
    id: number,
    user: UserType,
    message: MessageInType
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Alex',  // можно менять
    },
    message: {
        text: 'Hello, she didn’t do anything and rested all day, how are you?', // можно менять
        time: '22:00', // можно менять
    },
}

export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatarFriend, // можно менять
        name: 'Dmitry', // можно менять
    },
    message: {
        text: 'Hello, how are you, what did you do yesterday?', // можно менять
        time: '22:01', // можно менять
    },
}

const HW1 = () => {
    return (
        <HwWrapper id={'hw1'}>
            <Title>Hometask № 1</Title>
            <Messenger>
                {/*проверка отображения (не менять)*/}
                <MessageContainer>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </MessageContainer>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </Messenger>
        </HwWrapper>
    )
}

export default HW1


const HwWrapper = styled.div`
    max-width: 1140px;
    margin: 131px auto 35px ;

`

const Title = styled.div`
    font-size: 22px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: #000000;
`

const Messenger = styled.div`
    padding-top: 24px;
    
`
const MessageContainer = styled.div`
    
`
