import{a as p}from"./axios-Bo0ATomq.js";import{_ as u,o as m,c as _,d as h,a as o,e as l,v as c,p as f,k as b}from"./index-DovIXswq.js";const w={data(){return{user:{username:"",password:""}}},methods:{login(){const e="https://vue3-course-api.hexschool.io/v2/admin/signin";console.log(this.user),p.post(e,this.user).then(s=>{console.log(s.data);const{token:r,expired:i}=s.data;document.cookie=`hexToken=${r};expires=${new Date(i)};`,alert(s),this.$router.push("/admin/products")}).catch(s=>{console.dir(s),alert(s)})}}},n=e=>(f("data-v-e0a7bb1f"),e=e(),b(),e),v={class:"container"},g={class:"row justify-content-center"},x=n(()=>o("h1",{class:"h3 mb-3 font-weight-normal"}," 請先登入 ",-1)),k={class:"col-8"},y={id:"form",class:"form-signin"},I={class:"form-floating mb-3"},V=n(()=>o("label",{for:"username"},"Email address",-1)),B={class:"form-floating"},S=n(()=>o("label",{for:"password"},"Password",-1)),T=n(()=>o("p",{class:"mt-5 mb-3 text-muted"}," © 2021~∞ - 六角學院 ",-1));function U(e,s,r,i,a,d){return m(),_("div",null,[h(" 使用者登入頁面 "),o("div",v,[o("div",g,[x,o("div",k,[o("form",y,[o("div",I,[l(o("input",{type:"email",class:"form-control",placeholder:"name@example.com","onUpdate:modelValue":s[0]||(s[0]=t=>a.user.username=t),required:"",autofocus:""},null,512),[[c,a.user.username]]),V]),o("div",B,[l(o("input",{type:"password",class:"form-control",id:"password",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=t=>a.user.password=t),required:""},null,512),[[c,a.user.password]]),S]),o("button",{class:"btn btn-lg btn-primary w-100 mt-3",onClick:s[2]||(s[2]=(...t)=>d.login&&d.login(...t)),type:"button"}," 登入 ")])])]),T])])}const E=u(w,[["render",U],["__scopeId","data-v-e0a7bb1f"]]);export{E as default};
