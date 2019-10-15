import $ from 'jquery';
import 'weui';
import './styles/style.css';
import header from './templates/header.html';
import search from './templates/search.html';
import panel from './templates/panel.html';
import footer from './templates/footer.html';
import news from './libs/news'
$('body').html(header + search + panel + footer);
// 首次加载,,,
news();
$('.weui-panel__ft').click(() => {
    // 查看更多
    news();
})

