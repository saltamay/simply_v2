import React, { useEffect, useRef } from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { Viewer } from '../../lib/types';
import { AUTH_URL } from '../../lib/graphql/queries';
import { AuthUrl as AuthUrlData } from '../../lib/graphql/queries/AuthUrl/__generated__/AuthUrl';
import { LOG_IN } from '../../lib/graphql/mutations';
import {
  LogIn as LogInData,
  LogInVariables,
} from '../../lib/graphql/mutations/LogIn/__generated__/LogIn';
import { Card, Layout, Typography } from 'antd';

// Image Assets
import googleLogo from './assets/google_logo.jpg';

const { Content } = Layout;
const { Text, Title } = Typography;

interface Props {
  setViewer: (viewer: Viewer) => void;
}

export const Login = ({ setViewer }: Props) => {
  const client = useApolloClient();
  const [
    logIn,
    { data: logInData, loading: logInLoading, error: logInError },
  ] = useMutation<LogInData, LogInVariables>(LOG_IN, {
    onCompleted: (data) => {
      if (data && data.logIn) {
        setViewer(data.logIn);
      }
    },
  });
  const logInRef = useRef(logIn);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      logInRef.current({
        variables: {
          input: { code },
        },
      });
    }
  }, []);

  const handleAuthorize = async () => {
    try {
      const { data } = await client.query<AuthUrlData>({
        query: AUTH_URL,
      });
      window.location.href = data.authUrl;
    } catch {}
  };

  return (
    <Content className='log-in'>
      <Card className='log-in-card'>
        <div className='log-in-card__intro'>
          <Title level={3} className='log-in-card__intro-title'>
            <span role='img' aria-label='wave'>
              👋
            </span>
          </Title>
          <Title level={3} className='log-in-card__intro-title'>
            Log in to Tiny Bungalow!
          </Title>
          <Text>Sign in with Google to start your real estate search!</Text>
        </div>
        <button
          className='log-in-card__google-button'
          onClick={handleAuthorize}
        >
          <img
            src={googleLogo}
            alt='Google Logo'
            className='log-in-card__google-button-logo'
          />
          <span className='log-in-card__google-button-text'>
            Sign in with Google
          </span>
        </button>
        <Text type='secondary'>
          Note: By signing in, you'll be redirected to the Google consent form
          to sign in with your Google account.
        </Text>
      </Card>
    </Content>
  );
};
