import{a as p}from"./axios-Bo0ATomq.js";import{P as E}from"./PaginationArea-Bfg5ebp4.js";import{_ as k,o as n,c as r,a as t,q as a,v as c,F as U,k as M,u as w,K as D,f as V,r as P,b as v,t as b}from"./index-B7hP1S-x.js";import{D as $}from"./DelProductModal-mUihNDz-.js";var I={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"ting-hexschool",BASE_URL:"/week6_vite/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:h,VITE_PATH:g}=I,A={data(){return{isLoding:!0,productModal:null,products:[],isNew:!0,tempProduct:{category:"貓飼料",imagesUrl:[]}}},mounted(){this.productModal=new window.bootstrap.Modal(this.$refs.productModal,{keyboard:!1,backdrop:"static"})},methods:{checkLogin(){p.post(`${h}/api/user/check`).then(o=>{this.getProduct()}).catch(o=>{alert.dir(o)})},getProduct(){this.isLoding=!0;const o=`${h}/api/${g}/admin/products/all`;p.get(o).then(e=>{this.products=e.data.products,this.isLoding=!1}).catch(e=>{alert.dir(e)})},openModal(o,e){o==="new"?(this.isNew=!0,this.tempProduct={category:"貓飼料",imagesUrl:[]},this.productModal.show()):o==="edit"?(this.isNew=!1,this.tempProduct={...e},this.productModal.show()):o==="delete"&&(this.isNew=!1,this.tempProduct={...e},this.DelProductModal.show())},submitBtn(){this.isNew?p.post(`${h}/api/${g}/admin/product/`,{data:this.tempProduct}).then(o=>{this.$emit("update"),this.productModal.hide(),this.getProduct()}).catch(o=>{alert(o.response.data.message)}):p.put(`${h}/api/${g}/admin/product/${this.tempProduct.id}`,{data:this.tempProduct}).then(o=>{this.$emit("update"),this.productModal.hide(),this.getProduct()}).catch(o=>{alert(o.response.data.message)})},deletBtn(){p.delete(`${h}/api/${g}/admin/product/${this.tempProduct.id}`,{data:this.tempProduct}).then(o=>{this.DelProductModal.hide(),alert("刪除成功"),this.getProduct()}).catch(o=>{alert.dir(o)})},addImage(){this.tempProduct.imagesUrl?this.tempProduct.imagesUrl.push(""):(this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push(""))},deleteImage(o){this.tempProduct.imagesUrl.splice(o,1)}}},C={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},T={class:"modal-dialog modal-xl"},B={class:"modal-content border-0"},L={class:"modal-header bg-dark text-white"},S={id:"productModalLabel",class:"modal-title"},q={key:0},N={key:1},R=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),H={class:"modal-body"},O={class:"row"},F={class:"col-sm-4"},j={class:"mb-3"},K=t("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),z=["src"],G=t("h3",null,"多圖",-1),J={key:0},Q={class:"mb-3"},W=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),X=["onUpdate:modelValue"],Y={class:"image-container"},Z=["src","alt"],tt=["onClick"],et={key:1},ot={class:"col-sm-8"},st={class:"mb-3"},lt=t("label",{for:"title",class:"form-label"},"標題",-1),it={class:"row"},dt={class:"mb-3 col-md-6"},nt=t("label",{for:"category",class:"form-label"},"分類",-1),rt=V('<option disabled selected value="">請選擇分類</option><option value="貓飼料">貓飼料</option><option value="狗飼料">狗飼料</option><option value="贊助貓">贊助貓</option><option value="贊助狗">贊助狗</option>',5),at=[rt],ct={class:"mb-3 col-md-6"},ut=t("label",{for:"unit",class:"form-label"},"單位",-1),pt={class:"row"},mt={class:"mb-3 col-md-6"},ht=t("label",{for:"origin_price",class:"form-label"},"原價",-1),_t={class:"mb-3 col-md-6"},bt=t("label",{for:"price",class:"form-label"},"售價",-1),gt=t("hr",null,null,-1),ft={class:"mb-3"},Pt=t("label",{for:"description",class:"form-label"},"產品描述",-1),vt={class:"mb-3"},yt=t("label",{for:"content",class:"form-label"},"說明內容",-1),kt={class:"mb-3"},Ut={class:"form-check"},Mt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),wt={class:"modal-footer"},Vt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function xt(o,e,m,f,s,i){return n(),r("div",C,[t("form",T,[t("div",B,[t("div",L,[t("h5",S,[s.isNew?(n(),r("span",q,"新增產品")):(n(),r("span",N,"編輯商品"))]),R]),t("div",H,[t("div",O,[t("div",F,[t("div",j,[K,a(t("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>s.tempProduct.imageUrl=l),type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,512),[[c,s.tempProduct.imageUrl]]),t("img",{class:"img-fluid",src:s.tempProduct.imageUrl,alt:"商品照片"},null,8,z)]),G,Array.isArray(s.tempProduct.imagesUrl)?(n(),r("div",J,[(n(!0),r(U,null,M(s.tempProduct.imagesUrl,(l,u)=>(n(),r("div",{class:"mb-2",key:u},[t("div",Q,[W,a(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":_=>s.tempProduct.imagesUrl[u]=_},null,8,X),[[c,s.tempProduct.imagesUrl[u]]])]),t("div",Y,[t("img",{class:"img-fluid img-thumbnail",src:l,alt:`多圖${u+1}`},null,8,Z),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:_=>i.deleteImage(u)},"刪除圖片",8,tt)])]))),128)),t("div",null,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[1]||(e[1]=l=>i.addImage())},"新增圖片")])])):(n(),r("div",et,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=l=>i.addImage())}," 新增圖片 ")]))]),t("div",ot,[t("div",st,[lt,a(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[3]||(e[3]=l=>s.tempProduct.title=l),required:""},null,512),[[c,s.tempProduct.title]])]),t("div",it,[t("div",dt,[nt,a(t("select",{id:"category",class:"form-select","onUpdate:modelValue":e[4]||(e[4]=l=>s.tempProduct.category=l),required:""},at,512),[[w,s.tempProduct.category]])]),t("div",ct,[ut,a(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[5]||(e[5]=l=>s.tempProduct.unit=l),required:""},null,512),[[c,s.tempProduct.unit]])])]),t("div",pt,[t("div",mt,[ht,a(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[6]||(e[6]=l=>s.tempProduct.origin_price=l),required:""},null,512),[[c,s.tempProduct.origin_price]])]),t("div",_t,[bt,a(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[7]||(e[7]=l=>s.tempProduct.price=l),required:""},null,512),[[c,s.tempProduct.price]])])]),gt,t("div",ft,[Pt,a(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[8]||(e[8]=l=>s.tempProduct.description=l)},`\r
                      `,512),[[c,s.tempProduct.description]])]),t("div",vt,[yt,a(t("textarea",{id:"content",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[9]||(e[9]=l=>s.tempProduct.content=l)},`\r
                      `,512),[[c,s.tempProduct.content]])]),t("div",kt,[t("div",Ut,[a(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[10]||(e[10]=l=>s.tempProduct.is_enabled=l)},null,512),[[D,s.tempProduct.is_enabled]]),Mt])])])])]),t("div",wt,[Vt,t("button",{type:"submit",class:"btn btn-primary",onClick:e[11]||(e[11]=l=>i.submitBtn())}," 確認 ")])])])],512)}const Et=k(A,[["render",xt]]);var Dt={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"ting-hexschool",BASE_URL:"/week6_vite/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:y,VITE_PATH:$t}=Dt,It={components:{PaginationArea:E,EditProductModal:Et,DelProductModal:$},data(){return{tempCategory:"",category:"",products:[],tempProduct:{imagesUrl:[]},pagination:{},isNew:!1}},mounted(){this.getData()},methods:{checkAdmin(){const o=`${y}/api/user/check`;p.post(o).then(()=>{this.getData()}).catch(e=>{alert(e.response.data.message),this.$router.push("/login")})},getData(o=1){let e=`${y}/api/${$t}/admin/products`;this.category?e+=`?category=${this.category}&page=${o}`:e+=`?page=${o}`,p.get(e).then(m=>{const{products:f,pagination:s}=m.data;this.products=f,this.pagination=s}).catch(m=>{alert(m.response.data.message),this.$router.push("/login")})},openModal(o,e){o==="new"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.EditProductModal.openModal(o,e)):o==="edit"?(this.tempProduct={...e},this.isNew=!1,this.$refs.EditProductModal.openModal(o,e)):o==="delete"&&(this.tempProduct={...e},this.$refs.DelProductModal.openModal(o,e))},serchBtn(o){this.category=o,this.getData()}}},At={id:"app"},Ct={class:"container"},Tt=t("h3",{class:"fw-bold mt-5"},"後台產品列表",-1),Bt={class:"d-flex mt-4 justify-content-between"},Lt={class:"d-flex align-items-center"},St=V('<option disabled selected hidden>選擇商品分類</option><option value="">所有商品</option><option value="貓飼料">貓咪糧食</option><option value="狗飼料">狗狗糧食</option><option value="贊助貓">贊助貓貓</option><option value="贊助狗">贊助狗狗</option>',6),qt=[St],Nt={class:"ml-auto"},Rt={class:"table mt-4"},Ht=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"120"},"編輯")])],-1),Ot={class:"text-end"},Ft={class:"text-end"},jt={key:0,class:"text-success"},Kt={key:1},zt={class:"btn-group"},Gt=["onClick"],Jt=["onClick"];function Qt(o,e,m,f,s,i){const l=P("PaginationArea"),u=P("edit-product-modal"),_=P("del-product-modal");return n(),r("div",At,[t("div",Ct,[Tt,t("div",Bt,[t("div",null,[t("div",Lt,[a(t("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":e[0]||(e[0]=d=>s.tempCategory=d)},qt,512),[[w,s.tempCategory]])])]),t("button",{class:"btn btn-primary ms-2 me-auto",onClick:e[1]||(e[1]=d=>i.serchBtn(s.tempCategory))}," 搜尋分類 "),t("div",Nt,[t("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=d=>i.openModal("new"))}," 建立新的產品 ")])]),t("table",Rt,[Ht,t("tbody",null,[(n(!0),r(U,null,M(s.products,d=>(n(),r("tr",{key:d.id},[t("td",null,b(d.category),1),t("td",null,b(d.title),1),t("td",Ot,b(d.origin_price),1),t("td",Ft,b(d.price),1),t("td",null,[d.is_enabled?(n(),r("span",jt,"啟用")):(n(),r("span",Kt,"未啟用"))]),t("td",null,[t("div",zt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:x=>i.openModal("edit",d)}," 編輯 ",8,Gt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:x=>i.openModal("delete",d)}," 刪除 ",8,Jt)])])]))),128))])]),v(l,{pagination:s.pagination,onEmitPages:i.getData},null,8,["pagination","onEmitPages"])]),v(u,{ref:"EditProductModal",product:s.tempProduct,"is-new":s.isNew,onUpdate:i.getData},null,8,["product","is-new","onUpdate"]),v(_,{ref:"DelProductModal",item:s.tempProduct,apiMethod:"product",onUpdate:i.getData},null,8,["item","onUpdate"])])}const te=k(It,[["render",Qt]]);export{te as default};
