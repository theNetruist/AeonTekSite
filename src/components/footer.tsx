import Typography from '@mui/material/Typography';
import React from 'react';

const Footer: React.FC = (props) => {
    return (
        <footer style={{ textAlign: 'center', bottom: 0 }}>
            <Typography align="center" variant="caption" sx={{ color: '#FFF', marginTop: '20px' }}>
                &copy;Copyright 2023, Aeontek, LLC All rights reserved
            </Typography>
        </footer>
    );
};

export default Footer;
