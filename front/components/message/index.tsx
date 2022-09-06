import { Alert, AlertTitle } from '@mui/material';
import React from 'react';

interface MessageTemplateProps {
    status: string;
    description: string;
}

export default function MessageTemplate(message: MessageTemplateProps) {

    return <>
        {message.status === "success" &&
            <Alert severity="success">
                {message.description}
            </Alert>
        }
        {message.status === "error" &&
            <Alert severity="error">
                {message.description}
            </Alert>
        }
    </>;
}