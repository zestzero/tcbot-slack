import { SlashRequest } from 'slashRequest';
import Commands from '../types/command';

interface IParseResult {
    body: SlashRequest;
    command: Commands;
}

export const parseMessage = (body: SlashRequest): IParseResult => {
    return {
        body,
        command: Commands.None,
    };
};
