import{_ as y,l as m,m as I,r,o as d,c as u,a as t,b as n,w as l,t as o,q as k,u as S,F as f,j as v,x as P,e as N,d as p,h as b,n as C,i as V,p as $,k as B}from"./index-l4rZ5sXX.js";import{c as W}from"./cartStore-CHd--tZZ.js";import{S as A,a as T,A as U,N as j,P as D}from"./pagination.min-DKWW1-PI.js";import{p as _}from"./productStore-C3Mo2YwR.js";import"./axios-Bo0ATomq.js";import"./sweetalert2.all-US3IRVOt.js";const z={components:{Swiper:A,SwiperSlide:T},data(){return{modules:[U,j,D],selectedNum:""}},mounted(){this.getProducts(),this.getProductInfo(this.$route.params.id)},methods:{...m(_,["getProducts","getProductInfo"]),...m(W,["addToCart"])},watch:{$route:{handler(){this.getProductInfo(this.$route.params.id)},deep:!0}},computed:{...I(_,["products","pagination","isLoading","productInfo"])}},g=e=>($("data-v-2d6c23c3"),e=e(),B(),e),F={class:"container pt-2"},L={class:"breadcrumb d-flex mt-3"},O={class:"row productProfile"},q={class:"col-md-6"},E=["src","alt"],M={class:"col-md-6"},x={class:"fw-bold"},G={class:"mt-3"},H=g(()=>t("option",{disabled:"",value:""},"請選擇數量",-1)),J=["value"],K={class:"d-grid gap-2 d-md-flex justify-content-md-end mt-3"},Q={class:"text-decoration-line-through"},R={class:"fw-bold text-danger h5"},X={class:"d-grid gap-2 d-md-flex justify-content-md-end mt-3"},Y=N('<br data-v-2d6c23c3><div class="rules" data-v-2d6c23c3><h3 class="fw-bold" data-v-2d6c23c3>購買須知</h3><ul class="rules-list ps-0" data-v-2d6c23c3><li data-v-2d6c23c3><i class="bi bi-balloon-fill text-Warning" data-v-2d6c23c3></i> 商品品質：所有寵物商品均符合品質標準，確保安全可靠。</li><li data-v-2d6c23c3><i class="bi bi-balloon-fill text-Warning" data-v-2d6c23c3></i> 產品說明：每個商品都有清晰的產品說明，包括用途、材質、尺寸等訊息，以幫助客戶做出明智的選擇。</li><li data-v-2d6c23c3><i class="bi bi-balloon-fill text-Warning" data-v-2d6c23c3></i> 價格透明：商品價格明確顯示，不存在隱性費用。</li><li data-v-2d6c23c3><i class="bi bi-balloon-fill text-Warning" data-v-2d6c23c3></i> 客戶服務：提供優質客戶服務，及時回答客戶疑問並解決問題。</li><li data-v-2d6c23c3><i class="bi bi-balloon-fill text-Warning" data-v-2d6c23c3></i> 退換政策：提供合理的退換貨政策，確保顧客權益。</li><li data-v-2d6c23c3><i class="bi bi-balloon-fill text-Warning" data-v-2d6c23c3></i> 保障措施：採取必要措施保障客戶隱私和交易安全。</li><li data-v-2d6c23c3><i class="bi bi-balloon-fill text-Warning" data-v-2d6c23c3></i> 使用者回饋：歡迎客戶提供回饋和建議，以持續改善我們的服務和產品。</li></ul></div>',2),Z={class:"similarArea"},tt=g(()=>t("h3",{class:"fw-bold"},"類似商品",-1)),et={class:"cardOuter"};function st(e,a,ot,at,i,lt){const c=r("router-link"),h=r("swiper-slide"),w=r("swiper");return d(),u("div",F,[t("ul",L,[t("li",null,[n(c,{to:"/",class:"nav-link"},{default:l(()=>[p("首頁 /")]),_:1})]),t("li",null,[n(c,{to:"/products",class:"nav-link"},{default:l(()=>[p("產品首面 /")]),_:1})]),t("li",null,[n(c,{to:`/products?category=${e.productInfo.category}`,class:"nav-link"},{default:l(()=>[p(o(e.productInfo.category),1)]),_:1},8,["to"])])]),t("div",O,[t("div",q,[t("img",{src:e.productInfo.imageUrl,class:"img-fluid",alt:e.productInfo.title},null,8,E)]),t("div",M,[t("h1",x,o(e.productInfo.title),1),t("h5",G,"商品分類:"+o(e.productInfo.category),1),t("p",null,o(e.productInfo.description),1),t("p",null,o(e.productInfo.content),1),k(t("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":a[0]||(a[0]=s=>i.selectedNum=s)},[H,(d(),u(f,null,v(20,s=>t("option",{key:s,value:s},o(s),9,J)),64))],512),[[S,i.selectedNum]]),t("div",K,[t("div",Q,"原價:"+o(e.productInfo.origin_price)+"元",1),t("div",R,"優惠價格:"+o(e.productInfo.price)+"元",1)]),t("div",X,[t("button",{type:"button",class:P(["btn cardBtn",{disabled:!i.selectedNum}]),onClick:a[1]||(a[1]=s=>e.addToCart(e.productInfo.id,i.selectedNum))},"點我加入購物車",2),t("button",{type:"button",class:"btn btn-primary",onClick:a[2]||(a[2]=s=>e.addToCart(e.productInfo.id))},"立即購買")])])]),Y,t("div",Z,[tt,n(w,{breakpoints:{640:{slidesPerView:1,spaceBetween:5},768:{slidesPerView:1,spaceBetween:10},1024:{slidesPerView:3,spaceBetween:10}},autoplay:{delay:2500,disableOnInteraction:!1},pagination:{clickable:!0},modules:i.modules,class:"mySwiper mb-5 container"},{default:l(()=>[(d(!0),u(f,null,v(e.products,s=>(d(),b(h,{key:s.id},{default:l(()=>[t("div",et,[e.products&&e.products.length>0?(d(),b(c,{key:0,class:"card-hotProduct card--lg",style:C(`background-image: url(${s.imageUrl})`),to:`/product/${s.id}`},{default:l(()=>[t("h5",null,o(s.title),1),t("div",null,o(s.category),1),t("div",null,o(`${s.price}/${s.unit}`),1)]),_:2},1032,["style","to"])):V("",!0)])]),_:2},1024))),128))]),_:1},8,["modules"])])])}const pt=y(z,[["render",st],["__scopeId","data-v-2d6c23c3"]]);export{pt as default};