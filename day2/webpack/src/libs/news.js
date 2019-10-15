import axios from 'axios';
import $ from 'jquery';
let page = 1;
const news = () => {
    axios.get('https://cnodejs.org/api/v1/topics', {
        params: {
            page: page++,
            tab: 'ask',
            limit: 10
        }
    }).then((data) => {
        let news = data.data.data;
        console.log(news);
        let template = news.map((item) => {
            return `
        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div style="display:${
                item.author.avatar_url ? 'block' : 'none'
                }" class="weui-media-box__hd">
                <img class="weui-media-box__thumb"
                    src="${item.author.avatar_url ? item.author.avatar_url : ''}"
                    alt="">
            </div>
            <div class="weui-media-box__bd">
                <h4 class="weui-media-box__title">${item.title}</h4>
                <p class="weui-media-box__desc">${item.author.loginname}</p>
            </div>
        </a>
        `
        }).join('');
        $('#news').append(template);
    });
}
// module.exports = news
// export {news}
export default news