import { message, notification } from 'antd';

export const displaySuccessNotification = (
  message: string,
  description?: string
) => {
  return notification.success({
    message,
    description,
    duration: 2,
    placement: 'topLeft',
    style: {
      marginTop: 50,
    },
  });
};

export const displayErrorMessage = (error: string) => message.error(error);
