import{a as f}from"./axios-Bo0ATomq.js";import{S as v}from"./sweetalert2.all-BhxzVmTj.js";import{_ as U,r as m,o as d,c,a as e,d as l,w as V,F as O,j as T,i as u,t as _,b as C,q as w,I as S,s as b,p as P,e as A}from"./index-DWoxCmm_.js";var D={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"ting-hexschool",BASE_URL:"/week6_vite/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:g,VITE_PATH:x}=D,N={data(){return{isLoading:!0,products:[],cart:{},qty:1,tempProduct:{},productModal:null,loadingItem:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},mounted(){this.getCart()},methods:{getCart(){const o=`${g}/api/${x}/cart`;f.get(o).then(s=>{console.log(s),this.cart=s.data.data,this.cart.total===0&&this.$router.push({path:"/cart"})}).catch(s=>{alert(s.response.data.message)})},createOrder(){this.loadingItem="createOrder";const o=this.form,s=`${g}/api/${x}/order`;f.post(s,{data:o}).then(r=>{console.log(r),this.$refs.form.resetForm(),this.loadingItem="",this.$router.push({path:`./orderPay/${r.data.orderId}`})}).catch(r=>{alert(r.response.data.message),this.loadingItem=""})},updateCart(o){this.loadingItem=o.id;const s=`${g}/api/${x}/cart/${o.id}`;f.put(s,{data:{product_id:o.product_id,qty:o.qty}}).then(r=>{this.loadingItem="",v.fire({position:"top-end",icon:"success",title:`${r.data.message}`,showConfirmButton:!1,toast:!0,timer:1500}),this.getCart()}).catch(r=>{this.loadingItem="",v.fire({position:"top-end",icon:"error",title:`${r.response.data.message}`,showConfirmButton:!1,toast:!0,timer:1500})})},removeCartItem(o){const s=`${g}/api/${x}/cart/${o}`;this.loadingItem=o,f.delete(s).then(r=>{this.loadingItem="",v.fire({position:"top-end",icon:"success",title:`${r.data.message}`,showConfirmButton:!1,toast:!0,timer:1500}),this.getCart()}).catch(r=>{v.fire({position:"top-end",icon:"error",title:`${r.response.data.message}`,showConfirmButton:!1,toast:!0,timer:1500})})}}},i=o=>(P("data-v-c7628466"),o=o(),A(),o),F={class:"container mb-5"},L={class:"row mt-3"},M={class:"col-md-6"},R=i(()=>e("h5",{class:"fw-bold"},"購物車內容",-1)),j={class:"tableClass"},H={class:"table align-middle"},z=i(()=>e("thead",null,[e("tr",null,[e("th",null,"品名"),e("th",{style:{width:"150px"}},"數量/單位"),e("th",null,"單價"),e("th")])],-1)),G={class:"d-flex align-items-center"},J={key:0,class:"text-success"},K={class:"input-group input-group-sm"},Q=["onUpdate:modelValue","onBlur"],W={class:"input-group-text",id:"basic-addon2"},X={class:"text-end"},Y={key:0,class:"text-success"},Z={class:"text-center"},$=["onClick"],ee={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},te={key:1},se=i(()=>e("td",{colspan:"3",class:"text-end"},"總計",-1)),oe={class:"text-center"},le={key:0},ae=i(()=>e("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1)),re={class:"text-end text-success"},ne={class:"justify-content-center col-md-6"},ie=i(()=>e("h5",{class:"fw-bold"},"填寫付款資料",-1)),de={class:"mb-3"},ce=i(()=>e("label",{for:"email",class:"form-label"},"Email",-1)),me={class:"mb-3"},ue=i(()=>e("label",{for:"name",class:"form-label"},"收件人姓名",-1)),_e={class:"mb-3"},pe=i(()=>e("label",{for:"tel",class:"form-label"},"收件人電話",-1)),he={class:"mb-3"},fe=i(()=>e("label",{for:"address",class:"form-label"},"收件人地址",-1)),ve={class:"mb-3"},be=i(()=>e("label",{for:"message",class:"form-label"},"留言",-1)),ge={class:"text-end"},xe=["disabled"],Ie={key:0,class:"fas fa-spinner fa-pulse"};function ye(o,s,r,Ve,t,I){const y=m("v-stepper-item"),k=m("v-divider"),q=m("v-stepper-header"),B=m("v-stepper"),p=m("v-field"),h=m("error-message"),E=m("v-form");return d(),c("div",F,[e("div",L,[l(B,{class:"stepper-transparent","model-value":"2"},{default:V(()=>[l(q,null,{default:V(()=>[l(y,{title:"購物車確認",value:"1"}),l(k),l(y,{title:"填寫訂購資料",value:"2"}),l(k),l(y,{title:"確認付款",value:"3"})]),_:1})]),_:1}),e("div",M,[R,e("div",j,[e("table",H,[z,e("tbody",null,[t.cart.carts?(d(!0),c(O,{key:0},T(t.cart.carts,a=>(d(),c("tr",{key:a.id},[e("td",null,[e("div",G,[e("div",null,[C(_(a.product.title)+" ",1),a.coupon?(d(),c("div",J,"已套用優惠券")):u("",!0)])])]),e("td",null,[e("div",K,[w(e("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":n=>a.qty=n,onBlur:n=>I.updateCart(a)},null,40,Q),[[S,a.qty,void 0,{number:!0}]]),e("span",W,_(a.product.unit),1)])]),e("td",X,[t.cart.final_total!==t.cart.total?(d(),c("small",Y,"折扣價：")):u("",!0),C(" "+_(a.final_total),1)]),e("td",Z,[e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:n=>I.removeCartItem(a.id)},[t.loadingItem===a.id?(d(),c("span",ee)):(d(),c("div",te,"刪除"))],8,$)])]))),128)):u("",!0)]),e("tfoot",null,[e("tr",null,[se,e("td",oe,_(t.cart.total),1)]),t.cart.final_total!==t.cart.total?(d(),c("tr",le,[ae,e("td",re,_(t.cart.final_total),1)])):u("",!0)])])])]),e("div",ne,[ie,l(E,{class:"formClass",onSubmit:I.createOrder,ref:"form"},{default:V(({errors:a})=>[e("div",de,[ce,l(p,{id:"email",name:"email",type:"email",class:b(["form-control",{"is-invalid":a.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:t.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=n=>t.form.user.email=n)},null,8,["class","modelValue"]),l(h,{name:"email",class:"invalid-feedback"})]),e("div",me,[ue,l(p,{id:"name",name:"姓名",type:"text",class:b(["form-control",{"is-invalid":a.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:t.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=n=>t.form.user.name=n)},null,8,["class","modelValue"]),l(h,{name:"姓名",class:"invalid-feedback"})]),e("div",_e,[pe,l(p,{id:"tel",name:"電話",type:"text",class:b(["form-control",{"is-invalid":a.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:t.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=n=>t.form.user.tel=n)},null,8,["class","modelValue"]),l(h,{name:"電話",class:"invalid-feedback"})]),e("div",he,[fe,l(p,{id:"address",name:"地址",type:"text",class:b(["form-control",{"is-invalid":a.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:t.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=n=>t.form.user.address=n)},null,8,["class","modelValue"]),l(h,{name:"地址",class:"invalid-feedback"})]),e("div",ve,[be,w(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=n=>t.form.message=n)},null,512),[[S,t.form.message]])]),e("div",ge,[e("button",{type:"submit",class:"btn btn-danger",disabled:t.cart.total===0||t.loadingItem==="createOrder"},[t.loadingItem==="createOrder"?(d(),c("i",Ie)):u("",!0),C(" 送出訂單 ")],8,xe)])]),_:1},8,["onSubmit"])])])])}const Se=U(N,[["render",ye],["__scopeId","data-v-c7628466"]]);export{Se as default};
