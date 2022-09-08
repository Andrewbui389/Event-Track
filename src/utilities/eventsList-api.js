import sendRequest from './send-request';
const BASE_URL = '/api/eventslist';

export function grabList(){
    return sendRequest(`${BASE_URL}/list`)
}