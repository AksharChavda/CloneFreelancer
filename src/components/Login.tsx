import React, { useEffect } from 'react';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { decodeJwt } from 'jose';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContexts';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { setUser } = useUser();

    const signIn = useGoogleOneTapLogin({
        onSuccess: async (credentialResponse) => {
            console.log(credentialResponse);
            const { credential } = credentialResponse;
            if (credential) {
                try {
                    const payload = await decodeJwt(credential);
                    if (payload) {
                        console.log(payload);
                        const { given_name, family_name, email } = payload as {
                            given_name: string;
                            family_name: string;
                            email: string;
                        }; // Extracting name from payload
                        console.log('First Name:', given_name);
                        console.log('Last Name:', family_name);
                        console.log('Email:', email);
                        // Set user information in context
                        setUser({
                            firstName: given_name,
                            lastName: family_name,
                            email: email,
                        });
                        // Redirect to dashboard or other authenticated route
                        navigate('/dashboard');
                    }
                } catch (error) {
                    console.error('Error decoding JWT:', error);
                    // Handle error condition, such as displaying an error message
                }
            }
        }
    });

    return (
        <div className="signInBtn">
            {/* Render your sign-in button or any UI related to login */}
        </div>
    );
}

export default Login;
