(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23049ef8"],{"264a":function(s,a,e){"use strict";e.r(a);var t=function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"content ml-5 mr-5 pl-5 pr-5"},[e("div",{staticClass:"loading"},[e("loading",{attrs:{active:s.loading,"can-cancel":!1,"is-full-page":s.fullpage},on:{"update:active":function(a){s.loading=a}}})],1),e("div",{staticClass:"columns is-multiline is-desktop has-text-centered is-centered is-vcentered"},[s._m(0),e("div",{staticClass:"column is-half"},[e("article",{class:s.errorMessage?"message is-danger":"message is-hidden is-danger"},[e("div",{staticClass:"message-header"},[e("p",[s._v("Error Proccessing")]),e("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(a){s.errorMessage=!1}}})]),e("div",{staticClass:"message-body"},[s._v(" "+s._s(s.resultmessage)+" ")])]),e("form",{on:{submit:function(a){return a.preventDefault(),s.handleSubmit(a)}}},[e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-left"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.oldpassword,expression:"oldpassword"}],staticClass:"input is-rounded",attrs:{id:"oldpassword",type:"password",placeholder:"Your Old Password",required:""},domProps:{value:s.oldpassword},on:{input:function(a){a.target.composing||(s.oldpassword=a.target.value)}}}),s._m(1)])]),e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-left"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.newpassword,expression:"newpassword"}],staticClass:"input is-rounded",attrs:{id:"newpassword",type:"password",placeholder:"New Password",required:""},domProps:{value:s.newpassword},on:{input:function(a){a.target.composing||(s.newpassword=a.target.value)}}}),s._m(2)])]),e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-left"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.confirmpassword,expression:"confirmpassword"}],staticClass:"input is-rounded",attrs:{id:"confirm-password",type:"password",placeholder:"Confirm Password",required:""},domProps:{value:s.confirmpassword},on:{input:function(a){a.target.composing||(s.confirmpassword=a.target.value)}}}),s._m(3)])]),e("button",{class:s.loading?"button is-rounded is-loading is-danger is-medium":"button is-rounded is-medium is-danger",attrs:{disabled:s.disabled}},[s._m(4),e("span",[s._v("Change")])])])])])])},i=[function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"column is-full"},[e("h2",{staticClass:"title has-text-weight-bold has-text-white"},[s._v("Change Your Password")]),e("p",{staticClass:"subtitle has-text-danger-dark"},[s._v(" Enter Your Old Password and Change ")])])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-lock"})])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-lock"})])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-lock"})])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("span",{staticClass:"icon is-medium"},[e("i",{staticClass:"fas fa-shipping-fast"})])}],o=(e("d3b7"),e("25f0"),e("9062")),r=e.n(o),n=(e("e40d"),{components:{Loading:r.a},data:function(){return{user:{},oldpassword:"",newpassword:"",confirmpassword:"",errorMessage:!1,disabled:!0,resultmessage:"",loading:!1,fullpage:!0}},methods:{handleSubmit:function(s){var a=this;this.loading=!0,s.preventDefault(),this.confirmpassword===this.newpassword&&this.newpassword.length>0?this.$http.post(window.apiRoutes.changePasswordRoute,{email:this.user.email,oldpassword:this.oldpassword,newpassword:this.newpassword}).then((function(s){s.data.auth&&s.data.registered&&s.data.changed?(localStorage.removeItem("tokendata"),localStorage.removeItem("userdata"),a.loading=!1,a.$router.push({name:"results",params:{id:0,cmd:"result",success:!0,redirectUrl:"/0:login/",data:"response.data.message. You have to Relogin with new Password"}})):(a.errorMessage=!0,a.loading=!1,a.resultmessage=s.data.message)})):(this.loading=!1,this.resultmessage="Passwords Do Not Match",this.newpassword="",this.confirmpassword="")}},beforeMount:function(){this.loading=!0;var s=localStorage.getItem("userdata"),a=localStorage.getItem("tokendata");if(s&&a){var e=JSON.parse(this.$hash.AES.decrypt(s,this.$pass).toString(this.$hash.enc.Utf8));this.loading=!1,this.user=e}else this.loading=!1,this.user=null},watch:{confirmpassword:function(){this.confirmpassword===this.newpassword&&this.newpassword.length>0?this.disabled=!1:this.disabled=!0}}}),l=n,d=e("2877"),c=Object(d["a"])(l,t,i,!1,null,null,null);a["default"]=c.exports},e40d:function(s,a,e){}}]);