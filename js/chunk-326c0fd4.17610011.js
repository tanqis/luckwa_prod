(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-326c0fd4"],{"0653":function(t,e,i){"use strict";i("68ef"),i("5c56")},1146:function(t,e,i){},"14b5":function(t,e,i){"use strict";var s=i("c2cc"),n=i.n(s);n.a},"565f":function(t,e,i){"use strict";var s=i("2638"),n=i.n(s),r=i("c31d"),o=i("ad06"),a=i("7744"),l=i("dfaf"),c=i("1325"),u=i("a142");function h(){return!u["d"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var f=i("a8c1"),g=h();function d(){g&&Object(f["c"])(Object(f["a"])())}var m=i("d282"),b=i("ea8e"),p=Object(m["a"])("field"),v=p[0],w=p[1];e["a"]=v({inheritAttrs:!1,props:Object(r["a"])({},l["a"],{error:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(u["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(r["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(b["a"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,s=this.maxlength;return Object(u["b"])(s)&&i.length>s&&(i=i.slice(0,s),t.value=i),i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),d()},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(c["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf("."),s=e>=48&&e<=57||46===e&&i||45===e;s||Object(c["c"])(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(u["c"])(this.autosize)){var i=this.autosize,s=i.maxHeight,n=i.minHeight;s&&(e=Math.min(e,s)),n&&(e=Math.max(e,n))}e&&(t.style.height=e+"px")}},genInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:w("control",this.inputAlign)},[e]);var i={ref:"input",class:w("control",this.inputAlign),domProps:{value:this.value},attrs:Object(r["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",n()([{},i])):t("input",n()([{attrs:{type:this.type}},i]))},genLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:w("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(o["a"],{attrs:{name:this.leftIcon}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:w("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(o["a"],{attrs:{name:this.rightIcon}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength)return t("div",{class:w("word-limit")},[this.value.length,"/",this.maxlength])}},render:function(){var t,e=arguments[0],i=this.slots,s=this.labelAlign,n={icon:this.genLeftIcon};return i("label")&&(n.title=function(){return i("label")}),e(a["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[w("label",s),this.labelClass],arrowDirection:this.arrowDirection},class:w((t={error:this.error},t["label-"+s]=s,t["min-height"]="textarea"===this.type&&!this.autosize,t)),scopedSlots:n,on:{click:this.onClick}},[e("div",{class:w("body")},[this.genInput(),this.showClear&&e(o["a"],{attrs:{name:"clear"},class:w("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),i("button")&&e("div",{class:w("button")},[i("button")])]),this.genWordLimit(),this.errorMessage&&e("div",{class:w("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},"7df4":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"LogIn"},[i("van-nav-bar",{attrs:{title:"用户登录","left-text":"返回","right-text":"","left-arrow":""},on:{"click-left":t.onClickLeft}}),i("van-cell-group",[i("van-field",{attrs:{clearable:"",label:"用户名",placeholder:"请输入账号"},model:{value:t.logInForm.userEmail,callback:function(e){t.$set(t.logInForm,"userEmail",e)},expression:"logInForm.userEmail"}}),i("van-field",{attrs:{type:"password",label:"密码",clearable:"",placeholder:"请输入密码"},model:{value:t.logInForm.userPwd,callback:function(e){t.$set(t.logInForm,"userPwd",e)},expression:"logInForm.userPwd"}})],1),i("div",{staticClass:"userOption"},[i("van-button",{attrs:{type:"info",size:"small"},on:{click:function(e){return t.submitForm()}}},[t._v("登录")]),i("van-button",{attrs:{plain:"",type:"info",size:"small"},on:{click:t.register}},[t._v("注册")]),i("span",{staticClass:"forgetPwd",on:{click:t.forgetPwd}},[t._v(" 忘记密码")])],1)],1)},n=[],r=(i("9a83"),i("f564")),o=(i("be7f"),i("565f")),a=(i("66b9"),i("b650")),l=(i("0653"),i("34e9")),c=(i("5246"),i("6b41")),u=i("567f"),h={name:"LogIn",components:{vanNavBar:c["a"],vanCellGroup:l["a"],vanButton:a["a"],vanField:o["a"]},data:function(){return{logInForm:{}}},methods:{onClickLeft:function(){this.$router.go(-1)},userLogIn:function(){var t=this,e=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;u["a"].isNull(this.logInForm.userEmail)?Object(r["a"])({type:"warning",message:"请输入账号"}):e.test(this.logInForm.userEmail)?u["a"].isNull(this.logInForm.userPwd)?Object(r["a"])({type:"warning",message:"请输入密码"}):this.logInForm.userPwd.length<8||this.logInForm.userPwd.length>16?Object(r["a"])({type:"warning",message:"请输入8-16位数密码"}):this.$axios.post(this.$url.userLogIn).then((function(e){var i=e.data.data.msg;i?t.$message({showClose:!0,message:i,type:"error"}):(t.$message({showClose:!0,message:"登录成功",type:"success"}),window.setTimeout((function(){window.location.href="#/"}),1e3))})).catch((function(e){t.$message({showClose:!0,message:"登录失败请确认账号或者密码正确",type:"error"})})):Object(r["a"])({type:"warning",message:"请输入正确的邮箱账号"})},register:function(){window.location.href="#/user/register"},forgetPwd:function(){window.location.href="#/user/forgetPwd"},submitForm:function(){this.userLogIn(this.logInForm)}}},f=h,g=(i("14b5"),i("2877")),d=Object(g["a"])(f,s,n,!1,null,"1af727fc",null);e["default"]=d.exports},be7f:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("09fe"),i("3743"),i("1a04"),i("1146")},c2cc:function(t,e,i){}}]);
//# sourceMappingURL=chunk-326c0fd4.17610011.js.map