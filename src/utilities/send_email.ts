import HttpClient from './HttpClient';
import { EmailMessage } from '../types/email.type';
import { MessageData } from '../types/message_data.type';

const EMAIL_URL = 'https://us-central1-portfolio-ca781.cloudfunctions.net';

class EmailApiClient extends HttpClient {
    public constructor() {
      super(EMAIL_URL);
    }
  
    public sendEmail = (name: string, subject: string, message: string) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
            }
        }
        return this.instance.post<EmailMessage>('/addMessage', {
            name,
            subject,
            message
        }, config);
    }
  }

export const sendEmail = ({
    name, 
    subject, 
    message, 
    notifier
    }: MessageData) => {
    const apiClient = new EmailApiClient();
    apiClient.sendEmail(name, subject, message)
      .then((response) => {
        notifier('Email Sent');
      })
      .catch((error) => {
        notifier('Error Sending Email');
      });
}

export default EmailApiClient;
