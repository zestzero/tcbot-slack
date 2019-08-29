import { Dictionary, Request, Response } from 'express-serve-static-core';
import { Message } from 'message';
import request from 'request';
import { Configuration } from '../../services/configuration';
import { parseMessage } from '../../services/parser';

export const sendMessage = (data: Message) => {
    request.post('https://slack.com/api/chat.postMessage', data);
};

export const handleIncomingMessage = (req: Request<Dictionary<string>>, res: Response) => {
    const { body, command } = parseMessage(req.body);
    const data: Message = {
        form: {
            channel: body.channel_id,
            text: `Hi! :wave: \n I\'m your new bot.`,
            token: Configuration().slackToken,
        },
    };
    sendMessage(data);
};
