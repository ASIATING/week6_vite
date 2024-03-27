import{a as S}from"./axios-Bo0ATomq.js";import{S as f}from"./sweetalert2.all-DLRfucKB.js";import{_ as B,m as E,l as T,r,o as a,c as n,a as t,d,w as v,F as A,j as $,i as u,t as i,q as y,v as k,k as P,b as C,p as U,e as D}from"./index-Cnmolp8o.js";import{c as I}from"./cartStore-6VUhryMK.js";var R={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"ting-hexschool",BASE_URL:"/week6_vite/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:N,VITE_PATH:L}=R,q={data(){return{coupon:""}},mounted(){this.getCart()},methods:{...E(I,["getCart","addToCart","updateCart","removeCartItem","clearCart"]),sendCoupon(e){const s=`${N}/api/${L}/coupon`,m={data:{code:e}};S.post(s,m).then(p=>{p.data.data.final_total===this.rawTotal&&f.fire({title:"優惠券有誤，請重新輸入",confirmButtonColor:"#566B5A",icon:"warning"}),this.coupon="",this.getCart()}).catch(p=>{f.fire({title:"優惠券有誤，請重新輸入",confirmButtonColor:"#566B5A",icon:"warning"}),console.log(p)})},handleInput(e,s){e.target.value<1&&(e.target.value=1)}},computed:{...T(I,["cartEmpty","cart","productModal","loadingItem"])}},c=e=>(U("data-v-cadd18dc"),e=e(),D(),e),M={class:"pageColor pt-3"},F={class:"container"},H={key:0,class:"text-center"},O=c(()=>t("h1",{class:"fw-bold"},"目前購物車沒有東西哦",-1)),j=c(()=>t("img",{src:"https://cdn.discordapp.com/attachments/1216979871138320384/1222101155753234462/british-cat-with-shopping-cart-isolated-white-kitten-osolated_767502-1923-removebg-preview.png?ex=6614fd65&is=66028865&hm=06ee7ccfa814b4c6767a3ee8639fed973415e98e72de769b47bd210ceca95171&",class:"m-auto d-block w-50",alt:"購物車為空"},null,-1)),z={key:1},G=c(()=>t("h3",{class:"fw-bold"},"購物車",-1)),J={class:"text-end"},K={class:"table align-middle mt-3"},Q=c(()=>t("thead",null,[t("tr",null,[t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",null,"單價"),t("th")])],-1)),W={class:"d-flex align-items-center"},X={class:"d-none d-md-block"},Y=["src","alt","title"],Z={key:0,class:"text-success"},tt={class:"input-group input-group-sm"},et=["onUpdate:modelValue","onInput","onBlur"],ot={class:"input-group-text",id:"basic-addon2"},st={class:"text-end"},at={key:0,class:"text-success"},nt={class:"text-center"},dt=["onClick"],ct={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},lt={key:1},rt=c(()=>t("td",{colspan:"3",class:"text-end"},"總計",-1)),it={class:"text-center"},pt={key:0},ut=c(()=>t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1)),_t={class:"text-end text-success"},ht={class:"input-group couponInput mb-3 ml-auto"},vt={class:"input-group-append"},mt={class:"text-end"},bt=c(()=>t("button",{type:"button",class:"btn btn-primary"},"結帳去",-1)),gt=P('<div class="" data-v-cadd18dc><h3 data-v-cadd18dc>購物車消費注意事項</h3><ul data-v-cadd18dc><li data-v-cadd18dc><strong data-v-cadd18dc>付款方式：</strong>我們接受所有主要信用卡和 PayPal 作為付款方式。訂單處理前需要付款。</li><li data-v-cadd18dc><strong data-v-cadd18dc>運輸方式：</strong>我們提供標準和加急運輸選項。運輸費用和交貨時間可能因您的位置和選擇的運輸方式而異。</li><li data-v-cadd18dc><strong data-v-cadd18dc>退換政策：</strong>如果您對購買的商品不完全滿意，您可以在 30 天內退貨或換貨。請注意，退回的商品必須保持原樣和包裝。</li><li data-v-cadd18dc><strong data-v-cadd18dc>稅費：</strong>我們網站上列出的所有價格均為美元，並且不含稅。適用地點的訂單將加收銷售稅。</li><li data-v-cadd18dc><strong data-v-cadd18dc>隱私：</strong>我們致力於保護您的隱私。您提供給我們的任何個人信息將僅用於處理您的訂單，並不會與第三方共享。</li></ul></div>',1),ft=c(()=>t("div",null,".",-1));function yt(e,s,m,p,_,b){const h=r("v-stepper-item"),g=r("v-divider"),w=r("v-stepper-header"),x=r("v-stepper"),V=r("RouterLink");return a(),n("div",M,[t("div",F,[e.cartEmpty?(a(),n("div",H,[O,t("button",{type:"button",class:"btn btn-primary",onClick:s[0]||(s[0]=o=>this.$router.push("/products"))},"點我逛逛"),j])):(a(),n("div",z,[G,d(x,{class:"stepper-transparent"},{default:v(()=>[d(w,null,{default:v(()=>[d(h,{title:"購物車確認",value:"1"}),d(g),d(h,{title:"填寫訂購資料",value:"2"}),d(g),d(h,{title:"確認付款",value:"3"})]),_:1})]),_:1}),t("div",J,[t("button",{class:"btn btn-outline-danger",type:"button",onClick:s[1]||(s[1]=o=>e.clearCart())},"清空購物車")]),t("table",K,[Q,t("tbody",null,[e.cart.carts?(a(!0),n(A,{key:0},$(e.cart.carts,o=>(a(),n("tr",{key:o.id},[t("td",null,[t("div",W,[t("div",X,[t("img",{src:o.product.imageUrl,alt:`${o.product.title}圖片`,title:o.product.title,width:"180px"},null,8,Y)]),t("div",null,[C(i(o.product.title)+" ",1),o.coupon?(a(),n("div",Z,"已套用優惠券")):u("",!0)])])]),t("td",null,[t("div",tt,[y(t("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":l=>o.qty=l,onInput:l=>b.handleInput(l,o),onBlur:l=>e.updateCart(o)},null,40,et),[[k,o.qty,void 0,{number:!0}]]),t("span",ot,i(o.product.unit),1)])]),t("td",st,[e.cart.final_total!==e.cart.total?(a(),n("small",at,"折扣價：")):u("",!0),C(" "+i(o.final_total),1)]),t("td",nt,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:l=>e.removeCartItem(o.id)},[e.loadingItem===o.id?(a(),n("span",ct)):(a(),n("div",lt,"刪除"))],8,dt)])]))),128)):u("",!0)]),t("tfoot",null,[t("tr",null,[rt,t("td",it,i(e.cart.total),1)]),e.cart.final_total!==e.cart.total?(a(),n("tr",pt,[ut,t("td",_t,i(e.cart.final_total),1)])):u("",!0)])]),t("div",ht,[y(t("input",{type:"text",class:"form-control",placeholder:"輸入優惠碼","aria-label":"Recipient's username","aria-describedby":"basic-addon2","onUpdate:modelValue":s[2]||(s[2]=o=>_.coupon=o)},null,512),[[k,_.coupon]]),t("div",vt,[t("button",{type:"button",class:"btn btn-primary",onClick:s[3]||(s[3]=o=>b.sendCoupon(_.coupon))}," 送出優惠券 ")])]),t("div",mt,[d(V,{to:"/order",class:"nav-link d-inline-block"},{default:v(()=>[bt]),_:1})]),gt]))]),ft])}const xt=B(q,[["render",yt],["__scopeId","data-v-cadd18dc"]]);export{xt as default};
