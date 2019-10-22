<template>
  <div style="transform: translateY(-34px);transition-duration: 0s;">
    <div class="m-tips m-tips-tp">
      <i class="m-font m-font-down m-font-down-ani"></i>
      <span class="main-link">下拉刷新</span>
    </div>
    <div class="pannelwrap" style="padding-top: 0px; padding-bottom: 0px;">
      <div class="wb-item-wrap">
        <div class="wb-item">
          <div class="card m-panel card9 f-weibo">
            <div class="card-wrap">
              <header class="weibo-top m-box">
                <div class="m-avatar-box m-box-center">
                  <a href="/profile/1893761531" class="m-img-box">
                    <img
                      src="https://tva2.sinaimg.cn/crop.66.66.166.166.180/70e081fbjw8f6glzoo1iuj208c08cmxa.jpg?KID=imgbed,tva&amp;Expires=1571719457&amp;ssig=X4PxXRNx1s"
                    />
                    <i class="m-icon m-icon-bluev"></i>
                  </a>
                </div>
                <div class="m-box-dir m-box-col m-box-center">
                  <div class="m-text-box">
                    <a href="/profile/1893761531" class>
                      <h3 class="m-text-cut">
                        齐鲁网
                        <i class="m-icon m-icon-vipl5"></i>
                      </h3>
                    </a>
                    <h4 class="m-text-cut">
                      <span class="time">11小时前</span>
                    </h4>
                  </div>
                </div>
                <div callback="follow()" class="m-add-box m-followBtn">
                  <span class="m-add-box">
                    <i class="m-font m-font-plus"></i>
                    <h4>关注</h4>
                  </span>
                </div>
              </header>
            </div>
            <article class="weibo-main">
              <div class="card-wrap">
                <div class="weibo-og">
                  <div class="weibo-text">
                    <a
                      href="https://m.weibo.cn/search?containerid=231522type%3D1%26t%3D10%26q%3D%23%E8%A2%AB%E5%9F%8B%E5%A9%B4%E5%84%BF%E5%87%BA%E7%94%9F%E5%8C%BB%E9%99%A2%E5%8F%91%E5%A3%B0%23&amp;extparam=%23%E8%A2%AB%E5%9F%8B%E5%A9%B4%E5%84%BF%E5%87%BA%E7%94%9F%E5%8C%BB%E9%99%A2%E5%8F%91%E5%A3%B0%23&amp;luicode=10000011&amp;lfid=102803"
                      data-hide
                    >
                      <span class="surl-text">#被埋婴儿出生医院发声#</span>
                    </a>
                    【被埋男婴目前情况良好 医院不断收到咨询领养电话】“被埋男婴”
                    事件引发关注，很多市民赶来给孩子送衣服。刚当上“奶爸”的济南市民侯先生觉得孩子实在可怜，便收拾了小棉服、睡袋，还有很多换洗的小内衣，急忙赶到“被埋男婴”目前所在的济南市第二妇幼保健院。但由于监护
                    ...
                    <a href="/status/4429958921136765">全文</a>
                  </div>
                  <div>
                    <div class="weibo-media f-media">
                      <div class="weibo-media-wraps">
                        <div class="card-video type-video">
                          <div class="mwb-video mwbv-play mwbv-info">
                            <div class="m-img-box">
                              <img
                                src="https://wx2.sinaimg.cn/orj480/70e081fbly1g866qkob93j20qo0f047t.jpg"
                                loading="lazy"
                              />
                            </div>
                            <button class="mwbv-play-button">
                              <span class="mwbv-icon"></span>
                            </button>
                            <div class="mwbv-info-bar">
                              <div class="m-box">
                                <div class="m-box-col">926730次观看</div>
                                <div class="time">0:20</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <footer class="f-footer-ctrl">
              <div class="m-diy-btn m-box-center-a">
                <i class="lite-iconf lite-iconf-report"></i>
                <h4>178</h4>
              </div>
              <div class="m-diy-btn m-box-center-a">
                <i class="lite-iconf lite-iconf-comments"></i>
                <h4>224</h4>
              </div>
              <div class="m-diy-btn m-box-center-a">
                <i class="lite-iconf lite-iconf-like"></i>
                <h4>1439</h4>
              </div>
              <aside>
                <i class="m-font m-font-dot-more"></i>
              </aside>
            </footer>
          </div>
        </div>
      </div>
    </div>

    <div class="m-tips m-tips-tp" style="display: none;">
      <div class="m-loading m-loading-dark">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="temporary"></div>
    <div style="position: fixed;"></div>
  </div>
</template>
<style scoped>
html,
body {
  margin: 0 !important;
  padding: 0 !important;
}
html,
body,
#app {
  height: 100%;
}
[v-cloak] {
  display: none;
}
.wb-item-wrap .card9.card {
  margin: 0;
}
.f-weibo .m-img-box {
  background-color: #e6e6e6;
}
.empty-bg {
  width: 100%;
  background-color: #e6e6e6;
  height: 0.375rem;
}
.inline-block {
  display: inline-block;
}
.txt-margin {
  margin: 0 0 1rem 0;
}
.width-min {
  width: 4.375rem;
}
.anim-load {
  animation: load 0.5s ease-out;
  -moz-animation: load 0.5s ease-out;
  -webkit-animation: load 0.5s ease-out;
  -o-animation: load 0.5s ease-out;
}
@keyframes load {
  0% {
    background-color: #fff;
  }
  100% {
    background-color: #e6e6e6;
  }
}
@-moz-keyframes load {
  0% {
    background-color: #fff;
  }
  100% {
    background-color: #e6e6e6;
  }
}
@-webkit-keyframes load {
  0% {
    background-color: #fff;
  }
  100% {
    background-color: #e6e6e6;
  }
}
.f-more {
  letter-spacing: 0.1rem;
}
.f-weibo .f-card-title {
  margin: -1rem -1rem 0.5rem -1rem;
  padding: 0 1rem;
  border-width: 0;
}
.f-weibo .m-avatar-box .m-img-box .m-icon {
  font-size: 14px;
}
.iosx3 .card9 .f-card-title {
  border-width: 0;
}
.iosx2 .card9 .f-card-title {
  border-width: 0;
}
.f-weibo.card9 {
  border-bottom: 1px solid #e6e6e6;
}
.iosx3 .f-weibo.card9 {
  border-bottom: 0.36px solid #e6e6e6;
}
.iosx2 .f-weibo.card9 {
  border-bottom: 0.5px solid #e6e6e6;
}
.f-weibo.card9 > .card-wrap {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}
.f-weibo.card9.m-panel {
  border-top-width: 0;
}
.f-weibo.card .card-wrap .f-col-wrap {
  padding: 0 0.9375rem;
}
.f-weibo.card9 .m-box-col {
  min-width: 0;
}
.f-weibo.card9 .weibo-top {
  padding: 0 0 0 0.25rem;
}
.f-weibo.card9 .weibo-top .m-box-col .m-icon {
  margin-left: 3px;
}
.f-weibo.card9 .weibo-main .weibo-og {
  padding: 0.75rem 0 0 0.25rem;
}
.f-weibo.card9 .weibo-main .card-wrap ~ .weibo-rp {
  margin-top: 0.5rem;
}
.f-weibo.card9 .weibo-main .media-b {
  margin: 0.625rem 0 -0.375rem;
}
.f-weibo.card9 .weibo-main .media-b .m-auto-list {
  margin: 0 0 -0.25rem;
}
.f-weibo .weibo-top .m-text-box {
  margin: 0.15rem 0 0.15rem 0.5rem;
}
.f-weibo .f-r {
  float: right;
}
.f-weibo .weibo-main .weibo-og {
  font-size: 0.9375rem;
}
.f-weibo .weibo-rp .weibo-text {
  font-size: 0.9375rem;
}
.f-weibo .weibo-rp .f-footer-ctrl {
  padding: 0.625rem 0 0;
}
.f-weibo .f-bg-img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
}
.f-footer-ctrl {
  border-top-width: 0;
  height: 1.1rem;
  padding: 1rem 0.375rem 1rem 0;
  margin: 0 0.75rem;
}
.f-footer-ctrl .m-diy-btn {
  color: rgba(40, 47, 60, 0.8);
  height: 100%;
  float: left;
}
.f-footer-ctrl .m-diy-btn + .m-diy-btn {
  margin-left: 1.6875rem;
}
.f-footer-ctrl .m-diy-btn .m-icon {
  font-size: 16px;
}
.f-footer-ctrl aside {
  float: right;
  color: rgba(40, 47, 60, 0.8);
}
.f-footer-ctrl .m-font {
  font-size: 1rem;
  vertical-align: middle;
}
.f-footer-ctrl .m-diy-btn h4 {
  font-size: 0.8125rem;
  display: inline-block;
  margin-top: 0;
  margin-left: 0.25rem;
}
</style>