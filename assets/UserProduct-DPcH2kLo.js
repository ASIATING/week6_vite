import{a as g}from"./axios-Bo0ATomq.js";import{S as b}from"./sweetalert2.all-BhxzVmTj.js";import{_ as C,m as w,l as N,r as p,o as r,c as f,a as t,d as u,w as d,t as l,q as T,v as B,F as m,j as I,s as A,k as E,b as _,h as S,n as W,i as D,p as U,e as $}from"./index-DWoxCmm_.js";import{p as y,c as O}from"./productStore-CgCJkn_K.js";import{S as j,a as L,A as R,N as z,P as F}from"./pagination.min-CKBtAKwh.js";var H={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"ting-hexschool",BASE_URL:"/week6_vite/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:P,VITE_PATH:k}=H,M={components:{Swiper:j,SwiperSlide:L},data(){return{modules:[R,z,F],selectedNum:"",productInfo:{imagesUrl:[],content:""}}},mounted(){console.log(this.$route),this.getProducts(),this.getProductInfo(this.$route.params.id),console.log(this.$route.params.id)},methods:{...w(y,["getProducts"]),...w(O,["addToCart"]),getProductInfo(s){const i=`${P}/api/${k}/product/${s}`;g.get(i).then(a=>{this.productInfo=a.data.product,console.log(this.productInfo),console.log(777)}).catch(a=>{alert(a.response.data.message)})},addToCart(s,i=1){const a=`${P}/api/${k}/cart`;g.post(a,{data:{product_id:s,qty:i}}).then(n=>{console.log(n),b.fire({position:"top-end",icon:"success",title:`${n.data.message}`,showConfirmButton:!1,toast:!0,timer:1500})}).catch(n=>{b.fire({position:"top-end",icon:"error",title:`${n.response.data.message}`,showConfirmButton:!1,toast:!0,timer:1500})})}},watch:{$route:{handler(){alert("changed"),this.getProductInfo(this.$route.params.id)},deep:!0}},computed:{...N(y,["products","pagination","isLoading"])}},h=s=>(U("data-v-380d9f31"),s=s(),$(),s),q=h(()=>t("div",{class:"outer"},null,-1)),G={class:"container mt-5"},J={class:"breadcrumb d-flex"},K={class:"row productProfile"},Q={class:"col-md-6"},X=["src"],Y={class:"col-md-6"},Z={class:"fw-bold"},tt={class:"mt-3"},et=h(()=>t("option",{disabled:"",value:""},"選擇數量至購物車",-1)),ot=["value"],st={class:"d-grid gap-2 d-md-flex justify-content-md-end mt-3"},lt={class:"text-decoration-line-through"},it={class:"fw-bold text-danger h5"},at={class:"d-grid gap-2 d-md-flex justify-content-md-end mt-3"},dt=E('<br data-v-380d9f31><div class="rules" data-v-380d9f31><h3 class="fw-bold" data-v-380d9f31>購買須知</h3><ul class="rules-list" data-v-380d9f31><li data-v-380d9f31><i class="bi bi-balloon-fill text-Warning" data-v-380d9f31></i> 商品品質：所有寵物商品均符合品質標準，確保安全可靠。</li><li data-v-380d9f31><i class="bi bi-balloon-fill text-Warning" data-v-380d9f31></i> 產品說明：每個商品都有清晰的產品說明，包括用途、材質、尺寸等訊息，以幫助客戶做出明智的選擇。</li><li data-v-380d9f31><i class="bi bi-balloon-fill text-Warning" data-v-380d9f31></i> 價格透明：商品價格明確顯示，不存在隱性費用。</li><li data-v-380d9f31><i class="bi bi-balloon-fill text-Warning" data-v-380d9f31></i> 客戶服務：提供優質客戶服務，及時回答客戶疑問並解決問題。</li><li data-v-380d9f31><i class="bi bi-balloon-fill text-Warning" data-v-380d9f31></i> 退換政策：提供合理的退換貨政策，確保顧客權益。</li><li data-v-380d9f31><i class="bi bi-balloon-fill text-Warning" data-v-380d9f31></i> 保障措施：採取必要措施保障客戶隱私和交易安全。</li><li data-v-380d9f31><i class="bi bi-balloon-fill text-Warning" data-v-380d9f31></i> 使用者回饋：歡迎客戶提供回饋和建議，以持續改善我們的服務和產品。</li></ul></div>',2),nt={class:"similarArea"},rt=h(()=>t("h3",{class:"fw-bold"},"類似商品",-1)),ct={class:"cardOuter"};function ut(s,i,a,n,e,v){const c=p("router-link"),x=p("swiper-slide"),V=p("swiper");return r(),f(m,null,[q,t("div",G,[t("ul",J,[t("li",null,[u(c,{to:"/",class:"nav-link"},{default:d(()=>[_("首頁 /")]),_:1})]),t("li",null,[u(c,{to:"/products",class:"nav-link"},{default:d(()=>[_("產品首面 /")]),_:1})]),t("li",null,[u(c,{to:`/products?category=${e.productInfo.category}`,class:"nav-link"},{default:d(()=>[_(l(e.productInfo.category),1)]),_:1},8,["to"])])]),t("div",K,[t("div",Q,[t("img",{src:e.productInfo.imageUrl,class:"img-fluid"},null,8,X)]),t("div",Y,[t("h1",Z,l(e.productInfo.title),1),t("h5",tt,"商品分類:"+l(e.productInfo.category),1),t("p",null,l(e.productInfo.description),1),t("p",null,l(e.productInfo.content),1),T(t("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":i[0]||(i[0]=o=>e.selectedNum=o)},[et,(r(),f(m,null,I(20,o=>t("option",{key:o,value:o}," 選購"+l(o)+"個至購物車 ",9,ot)),64))],512),[[B,e.selectedNum]]),t("div",st,[t("div",lt,"原價:"+l(e.productInfo.origin_price)+"元",1),t("div",it,"優惠價格:"+l(e.productInfo.price)+"元",1)]),t("div",at,[t("button",{type:"button",class:"btn btn-primary",onClick:i[1]||(i[1]=o=>v.addToCart(e.productInfo.id))},"立即購買"),t("button",{type:"button",class:A(["btn btn-outline-primary",{disabled:!e.selectedNum}]),onClick:i[2]||(i[2]=o=>v.addToCart(e.productInfo.id,e.selectedNum))},"點我加入購物車",2)])])]),dt,t("div",nt,[rt,u(V,{breakpoints:{640:{slidesPerView:1,spaceBetween:5},768:{slidesPerView:1,spaceBetween:10},1024:{slidesPerView:3,spaceBetween:10}},loop:!0,loopedSlides:s.products.length,slidesPerView:"1",centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{clickable:!0},modules:e.modules,class:"mySwiper mb-5 container"},{default:d(()=>[(r(!0),f(m,null,I(s.products,o=>(r(),S(x,{key:o.id},{default:d(()=>[t("div",ct,[s.products&&s.products.length>0?(r(),S(c,{key:0,class:"card-hotProduct card--lg",style:W(`background-image: url(${o.imageUrl})`),to:`/product/${o.id}`},{default:d(()=>[t("h5",null,l(o.title),1),t("div",null,l(o.category),1),t("div",null,l(`${o.price}/${o.unit}`),1)]),_:2},1032,["style","to"])):D("",!0)])]),_:2},1024))),128))]),_:1},8,["loopedSlides","modules"])])])],64)}const vt=C(M,[["render",ut],["__scopeId","data-v-380d9f31"]]);export{vt as default};
