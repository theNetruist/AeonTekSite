import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import logo from '../../logo.png';
import './cover.css';
import { Button, Container } from '@mui/material';

const Cover: React.FC = (props) => {
    return (
        <>
            <Paper elevation={0} className="cover">
                <Paper
                    elevation={3}
                    className="blurb"
                    sx={{ textAlign: 'center', backgroundColor: 'inherit !important' }}
                >
                    <div>
                        <img src={logo} className="logo" alt="logo" />
                    </div>
                    <Container maxWidth={'md'} sx={{ textAlign: 'center' }}>
                        <div>
                            <Typography align="center" variant="h4" sx={{ color: '#FFF', marginTop: '20px' }}>
                                Let's save the world together.
                            </Typography>
                            <Typography align="center" sx={{ color: '#FFF', marginTop: '20px' }}>
                                At AeonTek, we believe that there can be no greater calling than a passion that makes
                                the world a better place.
                                <br /> <br />
                                That is why we are dedicated to clearing away some of the technical challenges that face
                                small non-profit businesses. We can help you set up a website that's easy to manage and
                                cost-effective. We can build the tools that can help you communicate with your teams and
                                patrons. We can even help you with tools to improve and manage fundraising and events.
                                We live in a world where technology is a necessary part of business, but it should never
                                be a barrier to entry.
                                <br /> <br />
                                Let us handle the technical stuff - you go save the world.
                            </Typography>
                            <Button
                                sx={{ margin: '20px' }}
                                variant="contained"
                                onClick={() =>
                                    //@ts-ignore
                                    Calendly.initPopupWidget({
                                        url: 'https://calendly.com/aeontek/aeontek-introduction?hide_event_type_details=1&background_color=1a1a1a&text_color=ffffff',
                                    })
                                }
                            >
                                Get in Touch
                            </Button>
                        </div>
                    </Container>
                </Paper>
            </Paper>
        </>
    );
};

export default Cover;
