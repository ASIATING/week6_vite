import{a as V}from"./axios-Bo0ATomq.js";import{S as g}from"./sweetalert2.all-D9hfbKyZ.js";import{_ as T,m as E,e as A,r as c,o as s,c as n,a as t,b as l,w as h,F as B,k as L,j as u,t as d,q as y,v as C,f as $,d as k,p as P,l as U}from"./index-B7hP1S-x.js";import{c as I}from"./cartStore-COUaaQ5r.js";var D={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"ting-hexschool",BASE_URL:"/week6_vite/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:N,VITE_PATH:R}=D,q={data(){return{coupon:""}},mounted(){this.getCart()},methods:{...E(I,["getCart","addToCart","updateCart","removeCartItem","clearCart"]),sendCoupon(e){const a=`${N}/api/${R}/coupon`,v={data:{code:e}};V.post(a,v).then(p=>{p.data.data.final_total===this.rawTotal&&g.fire({title:"優惠券有誤，請重新輸入",confirmButtonColor:"#ffb300",icon:"warning"}),this.coupon="",this.getCart()}).catch(p=>{g.fire({title:"優惠券有誤，請重新輸入",confirmButtonColor:"#ffb300",icon:"warning"}),alert.log(p)})},handleInput(e,a){(e.target.value<1||e.target.value==="")&&(e.target.value=1)}},computed:{...A(I,["cartEmpty","cart","productModal","loadingItem"])}},r=e=>(P("data-v-3a1fffa9"),e=e(),U(),e),M={class:"pageColor pt-3"},F={class:"container"},H={key:0,class:"text-center"},O=r(()=>t("h1",{class:"fw-bold"},"目前購物車沒有東西哦",-1)),j=r(()=>t("img",{src:"https://github.com/ASIATING/image-repository/blob/main/head%20(7).png?raw=true",class:"m-auto d-block w-50",alt:"購物車為空"},null,-1)),G={key:1},z=r(()=>t("h3",{class:"fw-bold"},"購物車",-1)),J={class:"text-end"},K={class:"table align-middle mt-3"},Q=r(()=>t("thead",null,[t("tr",null,[t("th",null,"品名"),t("th",{class:"text-center",style:{width:"150px"}},"數量/單位"),t("th",{class:"text-end"},"單價"),t("th",{class:"text-end"},"總價"),t("th")])],-1)),W={class:"d-flex align-items-center"},X={class:"d-none d-md-block me-5"},Y=["src","alt","title"],Z={key:0,class:"text-success"},tt={class:"input-group input-group-sm"},et=["onUpdate:modelValue","onInput","onBlur"],ot={class:"input-group-text",id:"basic-addon2"},at={class:"text-end"},st={class:"text-end"},nt={key:0,class:"text-success"},lt={class:"text-center"},rt=["onClick"],dt={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},it={key:1},ct=r(()=>t("td",{colspan:"4",class:"text-end"},"總計",-1)),pt={class:"text-center"},ut={key:0},_t=r(()=>t("td",{colspan:"4",class:"text-end text-success"},"折扣價",-1)),ft={class:"text-end text-success"},ht={class:"input-group couponInput mb-3 ml-auto"},vt={class:"input-group-append"},mt={class:"text-end"},bt=r(()=>t("button",{type:"button",class:"btn btn-primary"},"結帳去",-1)),gt=$('<div class="" data-v-3a1fffa9><h3 data-v-3a1fffa9>購物車消費注意事項</h3><ul data-v-3a1fffa9><li data-v-3a1fffa9><strong data-v-3a1fffa9>付款方式：</strong>我們接受所有主要信用卡和 PayPal 作為付款方式。訂單處理前需要付款。 </li><li data-v-3a1fffa9><strong data-v-3a1fffa9>運輸方式：</strong>我們提供標準和加急運輸選項。運輸費用和交貨時間可能因您的位置和選擇的運輸方式而異。 </li><li data-v-3a1fffa9><strong data-v-3a1fffa9>退換政策：</strong>如果您對購買的商品不完全滿意，您可以在 30 天內退貨或換貨。請注意，退回的商品必須保持原樣和包裝。 </li><li data-v-3a1fffa9><strong data-v-3a1fffa9>稅費：</strong>我們網站上列出的所有價格均為美元，並且不含稅。適用地點的訂單將加收銷售稅。 </li><li data-v-3a1fffa9><strong data-v-3a1fffa9>隱私：</strong>我們致力於保護您的隱私。您提供給我們的任何個人信息將僅用於處理您的訂單，並不會與第三方共享。 </li></ul></div>',1),yt=r(()=>t("div",null,".",-1));function Ct(e,a,v,p,_,m){const f=c("v-stepper-item"),b=c("v-divider"),S=c("v-stepper-header"),w=c("v-stepper"),x=c("RouterLink");return s(),n("div",M,[t("div",F,[e.cartEmpty?(s(),n("div",H,[O,t("button",{type:"button",class:"btn btn-primary",onClick:a[0]||(a[0]=o=>this.$router.push("/products"))}," 點我逛逛 "),j])):(s(),n("div",G,[z,l(w,{"alt-labels":"",class:"stepper-transparent"},{default:h(()=>[l(S,null,{default:h(()=>[l(f,{title:"購物車確認",value:"1"}),l(b),l(f,{title:"填寫訂購資料",value:"2"}),l(b),l(f,{title:"確認付款",value:"3"})]),_:1})]),_:1}),t("div",J,[t("button",{class:"btn clearCart",type:"button",onClick:a[1]||(a[1]=o=>e.clearCart())}," 清空購物車 ")]),t("table",K,[Q,t("tbody",null,[e.cart.carts?(s(!0),n(B,{key:0},L(e.cart.carts,o=>(s(),n("tr",{key:o.id},[t("td",null,[t("div",W,[t("div",X,[t("img",{src:o.product.imageUrl,alt:`${o.product.title}圖片`,title:o.product.title,width:"180px"},null,8,Y)]),t("div",null,[k(d(o.product.title)+" ",1),o.coupon?(s(),n("div",Z," 已套用優惠券 ")):u("",!0)])])]),t("td",null,[t("div",tt,[y(t("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":i=>o.qty=i,onInput:i=>m.handleInput(i,o),onBlur:i=>e.updateCart(o)},null,40,et),[[C,o.qty,void 0,{number:!0}]]),t("span",ot,d(o.product.unit),1)])]),t("td",at,d(o.product.price.toLocaleString()),1),t("td",st,[e.cart.final_total!==e.cart.total?(s(),n("small",nt,"折扣價：")):u("",!0),k(" "+d(o.final_total.toLocaleString()),1)]),t("td",lt,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:i=>e.removeCartItem(o.id)},[e.loadingItem===o.id?(s(),n("span",dt)):(s(),n("div",it,"x"))],8,rt)])]))),128)):u("",!0)]),t("tfoot",null,[t("tr",null,[ct,t("td",pt,d(e.cart&&e.cart.total?e.cart.total.toLocaleString():""),1)]),e.cart.final_total!==e.cart.total?(s(),n("tr",ut,[_t,t("td",ft,d(e.cart&&e.cart.final_total?e.cart.final_total.toLocaleString():""),1)])):u("",!0)])]),t("div",ht,[y(t("input",{type:"text",class:"form-control",placeholder:"輸入優惠碼","aria-label":"Recipient's username","aria-describedby":"basic-addon2","onUpdate:modelValue":a[2]||(a[2]=o=>_.coupon=o)},null,512),[[C,_.coupon]]),t("div",vt,[t("button",{type:"button",class:"btn btn-primary",onClick:a[3]||(a[3]=o=>m.sendCoupon(_.coupon))}," 套用優惠券 ")])]),t("div",mt,[l(x,{to:"/order",class:"nav-link d-inline-block"},{default:h(()=>[bt]),_:1})]),gt]))]),yt])}const xt=T(q,[["render",Ct],["__scopeId","data-v-3a1fffa9"]]);export{xt as default};