"use strict";(self.webpackChunkpharmacy_front=self.webpackChunkpharmacy_front||[]).push([[596],{596:(n,e,r)=>{r.r(e),r.d(e,{default:()=>_});var i,o,t,d=r(43),c=r(528),s=r(197);const a=s.Ay.form(i||(i=(0,c.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  border: 1px solid #ccc;\n  padding-left:35px;\n  padding-right:35px;\n  padding-top: 40px;\n  padding-bottom: 180px;\n  border-radius: 10px;\n  margin-top: auto;\n  background-color: white;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n"]))),p=s.Ay.label(o||(o=(0,c.A)(["\n  display: flex;\n  justify-content: center;\n  text-align: start;\n  flex-direction: column;\n"]))),l=s.Ay.input(t||(t=(0,c.A)(["\n  width: 500px;\n  padding: 10px;\n  border-radius: 10px;\n  border: 1px solid #ccc;\n\n  &::placeholder {\n  }\n  &:focus {\n    outline: none;\n     border: 2px solid rgba(233, 235, 117, 0.5);\n    transition-duration: 400ms;\n  }\n"])));var x=r(579);const h=()=>(0,x.jsx)("div",{children:(0,x.jsxs)(a,{action:"",children:[(0,x.jsx)("h1",{children:"Delivery data"}),(0,x.jsxs)(p,{htmlFor:"",children:["Name:",(0,x.jsx)(l,{type:"text",placeholder:"Lex"})]}),(0,x.jsxs)(p,{htmlFor:"",children:["Email:",(0,x.jsx)(l,{type:"email",placeholder:"lex@gmail.com"})]}),(0,x.jsxs)(p,{htmlFor:"",children:["Phone:",(0,x.jsx)(l,{type:"text",placeholder:"+380937779999"})]}),(0,x.jsxs)(p,{htmlFor:"",children:["Address:",(0,x.jsx)(l,{type:"text",placeholder:"Lex"})]})]})});var u,g,m,f,y,b,A,j;const v=s.Ay.div(u||(u=(0,c.A)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: auto;\n  gap: 30px;\n  width: 780px;\n  height: 610px;\n  overflow-x: hidden;\n  border: 1px solid #ccc;\n  padding: 15px 50px;\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n"]))),w=(s.Ay.h2(g||(g=(0,c.A)([""]))),s.Ay.ul(m||(m=(0,c.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 30px;\n"])))),k=s.Ay.li(f||(f=(0,c.A)(["\n  display: flex;\n  gap: 50px;\n  padding: 10px 15px;\n  width: 350px;\n  min-width: calc((100% - 3 * 20px) / 1);\n  color: #458546;\n  font-size: 25px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  margin: auto;\n  margin-bottom: 10px;\n  &:hover {\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); \n    transition-duration: 400ms;\n  }\n"]))),z=s.Ay.img(y||(y=(0,c.A)(["\n  width: 300px;\n  border: 1px solid #ccc;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  margin-bottom: 10px;\n"]))),N=s.Ay.p(b||(b=(0,c.A)(["\n  font-size: 25px;\n  color: rgb(25, 59, 26);\n  margin-top: 10px;\n"]))),S=s.Ay.div(A||(A=(0,c.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 40px;\n  margin-bottom: 25px;\n"])));s.Ay.button(j||(j=(0,c.A)(["\n  width: 200px;\n  font-size: 16px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  color: white;\n  background-color: #458546;\n  transition: background-color 0.3s ease;\n  margin-bottom: 10px;\n  &:hover {\n    background-color: #356235;\n  }\n"])));var C=r(3),F=r(424);const D=()=>{const n=(0,C.wA)(),e=JSON.parse(localStorage.getItem("cart"))||[],r=(0,C.d4)((n=>n.medick.total)),[i,o]=(0,d.useState)(e.map((n=>({...n,count:1}))));return(0,d.useEffect)((()=>{n((0,F.D)(i.reduce(((n,e)=>n+e.price*e.count),0))),0===r&&localStorage.setItem("cart",JSON.stringify(null))})),(0,x.jsx)(v,{children:(0,x.jsx)(w,{children:i.map(((n,e)=>(0,x.jsxs)(k,{children:[(0,x.jsx)(z,{src:n.image,alt:"qwe"}),(0,x.jsxs)(S,{children:[(0,x.jsx)(N,{children:n.name}),(0,x.jsxs)("p",{children:["Price: ",n.price,"$"]}),(0,x.jsx)("form",{action:"",children:(0,x.jsx)("input",{type:"number",value:n.count,onChange:n=>{((n,e)=>{const r=[...i];console.log(r),r[e].count=parseInt(n),o(r)})(n.target.value,e)}})})]})]},n._id)))})})};var I;const L=s.Ay.div(I||(I=(0,c.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px\n"])));var O=r(429),T=r(772);const _=()=>(0,x.jsxs)(L,{children:[(0,x.jsxs)(O.N,{children:[(0,x.jsx)(h,{}),(0,x.jsx)(D,{})]}),(0,x.jsx)(T.A,{})]})},772:(n,e,r)=>{r.d(e,{A:()=>S});r(43);var i,o,t,d,c,s,a,p,l=r(528),x=r(197);const h=x.Ay.div(i||(i=(0,l.A)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  padding: 30px;\n  justify-content: space-between;\n  background-color: #ccc;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n"]))),u=x.Ay.div(o||(o=(0,l.A)(["\n  display: flex;\n  padding: 15px;\n"]))),g=x.Ay.ul(t||(t=(0,l.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),m=x.Ay.li(d||(d=(0,l.A)([""]))),f=x.Ay.div(c||(c=(0,l.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n"]))),y=x.Ay.p(s||(s=(0,l.A)(["\n  font-size: 20px;\n"]))),b=x.Ay.button(a||(a=(0,l.A)(["\n  width: 200px;\n  font-size: 16px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  color: white;\n  background-color: #458546;\n  transition: background-color 0.3s ease;\n  &:hover {\n    background-color: #356235;\n  }\n"]))),A=x.Ay.a(p||(p=(0,l.A)(["\n  font-size: 23px;\n  font-weight: 600;\n  color: #458546;\n  text-decoration: none;\n  margin-right: 10px;\n  padding: 10px 35px;\n"])));var j=r(216),v=r(3),w=r(726),k=r.n(w),z=r(424),N=r(579);const S=()=>{const n=(0,j.zy)(),e=(0,v.d4)((n=>n.medick.total)),r="/basket"===n.pathname,i=(0,v.wA)(),o=(0,j.Zp)();return(0,N.jsxs)(h,{children:[(0,N.jsx)(u,{children:(0,N.jsxs)(g,{children:[(0,N.jsx)(m,{children:(0,N.jsx)(A,{href:"https://oleksii-senchenko.github.io/my-cv/",children:"CV"})}),(0,N.jsx)(m,{children:(0,N.jsx)(A,{href:"https://github.com/Oleksii-Senchenko",children:"GitHub"})}),(0,N.jsx)(m,{children:(0,N.jsx)(A,{href:"https://www.linkedin.com/in/oleksii-senchenko-601759292/",children:"Linkidin"})}),(0,N.jsx)(m,{children:(0,N.jsx)(A,{href:"https://t.me/maverick359",children:"Telegram"})})]})}),r&&(0,N.jsxs)(f,{children:[(0,N.jsxs)(y,{children:["Total: ",e,"$"]}),(0,N.jsx)(b,{onClick:()=>{(()=>{if(0===e)return k().Notify.warning("Cart is empty\ud83e\udd14"),void o(-1);k().Notify.success("Thank you for your attention \u2764\ufe0f"),i((0,z.D)(0)),o(-1)})()},children:"Submit"})]})]})}},429:(n,e,r)=>{r.d(e,{N:()=>s,v:()=>c});var i,o,t=r(528),d=r(197);const c=d.Ay.div(i||(i=(0,t.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n"]))),s=d.Ay.div(o||(o=(0,t.A)(["\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  justify-content: center;\n\n  padding: 15px 35px;\n  border-radius: 10px;\n"])))}}]);
//# sourceMappingURL=596.87016685.chunk.js.map