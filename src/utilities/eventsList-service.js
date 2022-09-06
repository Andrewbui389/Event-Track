import * as eventsListApi from './eventsList-api';

export async function grabList(){
    let data = await eventsListApi.grabList()
    return data
}