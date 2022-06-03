import { Value } from "sass-embedded";

let baseURL;
switch(process.env.NODE_ENV){
    case 'dev':
        baseURL='http://dev-mall-pre.springboot.cn/api';
    case 'test':
        baseURL='http://test-mall-pre.springboot.cn/api';
    case 'prod':
        baseURL='http://mall-pre.springboot.cn/api';
        break;
    default:
        baseURL='http://mall-pre.springboot.cn/api';
        bresk;

}



export default {
    baseURL
}