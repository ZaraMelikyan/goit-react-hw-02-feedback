import React from 'react';
import { StyledNotification } from 'components/Notification/Notification.styled'

export default function Notification({ message }) {
    return <StyledNotification>{message}</StyledNotification>;
}