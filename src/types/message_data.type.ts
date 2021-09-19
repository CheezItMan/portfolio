export type MessageData = {
    name: string,
    subject: string,
    message: string,
    notifier: (msg: string) => void,
};

