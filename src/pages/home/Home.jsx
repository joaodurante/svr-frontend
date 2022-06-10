import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Box, CssBaseline } from '@mui/material';
import AppMenu from '../../common/AppMenu';
import api from '../../services/api';
import './Home.css';

export default function Home() {
    return(
        <Box sx={{ display: 'flex' }}>
        <AppMenu menu={true} auth={false} />
        <CssBaseline />
        <Box sx={{ 
            flexGrow: 1, 
            height: '100vh', 
            overflow: 'auto', 
            'background-color': '#eeeeee',
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center'
        }}>
            <div>
                <h1>Bem Vindo!</h1>
            </div>
        </Box>
    </Box>
    )
}