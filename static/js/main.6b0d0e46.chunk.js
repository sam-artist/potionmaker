(this.webpackJsonppotionmaker=this.webpackJsonppotionmaker||[]).push([[0],{1:function(e,t,o){e.exports={Content:"Vile_Content__2nANv",Water:"Vile_Water__Wa8y4",VileTop:"Vile_VileTop__1u3EK",VileUpperOne:"Vile_VileUpperOne__2lEJA",VileUpperTwo:"Vile_VileUpperTwo__jFRUM",VileUpper:"Vile_VileUpper__1fZun",VileUpperLight:"Vile_VileUpperLight__3xwpr",VileMiddle:"Vile_VileMiddle__CaySr",VileMiddleLight:"Vile_VileMiddleLight__288nV",VileBottom:"Vile_VileBottom__QknnX",VileBottomLight:"Vile_VileBottomLight__eAJX9",Flower:"Vile_Flower__11u8V"}},11:function(e,t,o){e.exports={Ingredients:"PotionIngredients_Ingredients__1p6vW",Hide:"PotionIngredients_Hide__3c8Vs"}},19:function(e,t,o){},20:function(e,t,o){"use strict";o.r(t);var i=o(0),n=o(2),r=o.n(n),l=o(12),s=o.n(l),a=(o(19),o(5)),c=o(6),d=o(8),u=o(7),f=o(9),h=o(13),g=o(1),p=o.n(g),m=[{ingredient:"Mango Extract",color1:[255,195,41]},{ingredient:"Water Melon Extract",color1:[255,132,204]},{ingredient:"Guava Extract",color1:[148,30,95]},{ingredient:"Blended Fish Scales",color1:[63,65,62]},{ingredient:"Orange Extract",color1:[255,162,41]},{ingredient:"Lemon Extract",color1:[255,241,41]},{ingredient:"Blended Salmon Guts",color1:[255,50,50]},{ingredient:"Spinach Extract",color1:[41,161,25]},{ingredient:"Coconut Oil",color1:[255,255,255]},{ingredient:"Sunflower Oil",color1:[255,254,203]},{ingredient:"Rosemary Oil",color1:[126,113,102]},{ingredient:"Castor Oil",color1:[188,194,196]},{ingredient:"Canola Oil",color1:[255,252,237]},{ingredient:"Lavender Oil",color1:[186,153,247]},{ingredient:"Vegetable Oil",color1:[255,248,216]},{ingredient:"Sunflower Petal",color1:[255,204,0]},{ingredient:"Rose Petal",color1:[230,0,0]},{ingredient:"Cardinal Petal",color1:[230,0,0]},{ingredient:"Tulip Petal",color1:[230,92,0]},{ingredient:"Amaryllis Petal",color1:[230,0,92]},{ingredient:"Foxgloves Petal",color1:[184,46,138]},{ingredient:"Bellflower Petal",color1:[153,51,255]},{ingredient:"clear",color1:[113,255,246]}],y=function(e){var t="",o="",i={};return m.forEach((function(n){n.ingredient===e&&(t=",0.777)0%, rgba(216, 246, 247, 0.7822479333530288)100%)",o="radial-gradient(circle, rgba(".concat(n.color1.join()).concat(t),i={background:o})})),i},w=function(e){var t={},o={},n={},r={},l={},s={};return e.mixed?(t=s=function(e){var t=[],o=0,i=0,n=0;return m.forEach((function(t){t.ingredient===e[0].ingredient&&(o+=t.color1[0],i+=t.color1[1],n+=t.color1[2]),t.ingredient===e[1].ingredient&&(o+=t.color1[0],i+=t.color1[1],n+=t.color1[2]),t.ingredient===e[2].ingredient&&(o+=t.color1[0],i+=t.color1[1],n+=t.color1[2])})),t=[Math.floor(o/3),Math.floor(i/3),Math.floor(n/3)],{background:"radial-gradient(circle, rgba(".concat(t.join()," ,0.777)0%, rgba(216, 246, 247, 0.7822479333530288)100%)")}}(e.ingredients),o=s,n=s,r=s,l={display:"none"}):(t=y(e.ingredients[0].ingredient),o=y(e.ingredients[1].ingredient),n=y(e.ingredients[2].ingredient),r=y(e.ingredients[3].ingredient),"clear"!==e.ingredients[4].ingredient&&(l=y(e.ingredients[4].ingredient))),Object(i.jsxs)("div",{className:p.a.Content,children:[Object(i.jsx)("div",{className:p.a.VileTop}),Object(i.jsx)("div",{className:"".concat(p.a.VileUpperTwo," ").concat(p.a.Water)}),Object(i.jsx)("div",{className:p.a.VileUpperOne,style:r}),Object(i.jsx)("div",{className:p.a.VileUpper,style:n,children:Object(i.jsx)("div",{className:p.a.VileUpperLight})}),Object(i.jsx)("div",{className:p.a.VileMiddle,style:o,children:Object(i.jsx)("div",{className:p.a.VileMiddleLight})}),Object(i.jsx)("div",{className:p.a.VileBottom,style:t,children:Object(i.jsx)("div",{className:p.a.VileBottomLight,children:Object(i.jsx)("div",{className:p.a.Flower,style:l})})})]})},b=function(e){return e.children},x=o(4),j=o.n(x),O=function(e){return Object(i.jsxs)("select",{className:(t=e.show,t?j.a.Ingredients:j.a.Hide),onChange:e.changed,children:[Object(i.jsx)("option",{className:j.a.Option,children:"Select an Extract...."}),e.options.map((function(t){return Object(i.jsx)("option",{className:j.a.Option,value:t.ingredient+e.id,children:t.ingredient},t.ingredient+e.id)}))]});var t},P=o(11),v=o.n(P),_=function(e,t){return"clear"!==t[e-1].ingredient},T=function(e){return Object(i.jsxs)("div",{className:(t=e.mixed,t?v.a.Hide:v.a.Ingredients),children:[Object(i.jsx)(O,{show:!0,changed:e.changed,options:e.extracts,cleared:e.mixed,id:"0"}),Object(i.jsx)(O,{show:_(1,e.ingredients),changed:e.changed,options:e.extracts,cleared:e.mixed,id:"1"}),Object(i.jsx)(O,{show:_(2,e.ingredients),changed:e.changed,options:e.extracts,cleared:e.mixed,id:"2"}),Object(i.jsx)(O,{show:_(3,e.ingredients),changed:e.changed,options:e.oils,cleared:e.mixed,id:"3"}),Object(i.jsx)(O,{show:_(4,e.ingredients),changed:e.changed,options:e.flowers,id:"4"})]});var t},V=o(3),C=o.n(V),k=function(e,t){return e?Object(i.jsx)("button",{onClick:t,children:"Clear Potion"}):Object(i.jsx)("p",{className:C.a.Bold,children:"You must select at least 4 ingredients to make a potion"})},Y=function(e,t,o,i){var n=[];if(o.forEach((function(e){n.push(e.ingredient)})),!e)return"Build Your Potion";if("sweet"===t)return n.includes("Spinach Extract")?"Potion of Befriend. You will at least get your crush to notice you":n.includes("Lavender Oil")?"Potion of Friend Zone. Give this potion to your crush and you will be friend-zoned. The effects of this potion last for a year":n.includes("Rosemary Oil")?"Potion of Falling & Forget. Each day your crush will fall for you then will forget about your existence. The effects of this potion last for 3 weeks":n.includes("Vegetable Oil")?"Potion of Wanting. Your crush will ponder a romantic relationship with you but will never act on those feelings. The effects of this potion last for 4 months":n.includes("Blended Fish Scales")?"Potion of Favor. Your crush will grow to like you over 3 days. The effects of this potion last for 4 weeks. ":n.includes("Blended Salmon Guts")||n.includes("Foxgloves Petal")?"Potion of Bloom. Give this potion to your crush and watch your love bloom in a matter of an hour. The effects of this potion last for 1 year.":n.includes("Lemon Extract")?"Potion of Royal Charming. Your crush will court you, and treat you like royalty. The effects of this potion last for 2 days":n.includes("Cardinal Petal")?"Potion of A Hallmark Movie. The course of your love will follow the cringe-worthy sequence of a Hallmark movie. The effects of this potion will last for 2 months":n.includes("Tulip Petal")?"Potion of Falling X2. Your crush will fall for you, but this may lead to an overwhelming obsession. The effects of this potion last for 3 weeks ":n.includes("Amaryllis Petal")?"Potion of Casting. Your crush will fall for you and will transform into your celebrity crush. The effects of this potion last for 5 weeks":n.includes("Sunflower Petal")?"Potion of Sunshine. Your crush will love you during the day but will hate you during the night. The effects of this potion last for 8 weeks":n.includes("Rose Petal")?"Potion of Friend Zone. Give this potion to your crush and you will be friend-zoned. The effects of this potion last for a year":n.includes("Bellflower Petal")?"Potion of Royal Charming. Your crush will court you, and treat you like royalty. The effects of this potion last for 2 days":n.includes("Castor Oi")?"Potion of the Dove. Your crush will fall for you the next time they see a dove":n.includes("Sunflower Oil")?"Potion of Sunshine X2. Your crush will love your during the day, but every other day. The effects of this potion last for 3 days. ":n.includes("Canola Oil")?"Potion of the Raven. Your crush will fall for you the next time they see a raven. The effects of this potion last for 2 years":"Hmm...try again you might be onto something powerful!";if("salty"===t)return n.includes("Mango Extract")?"Potion of like. Your crush will love and hate you. The effects of this potion lasts for 2 weeks":n.includes("Water Melon Extract")?"Potion of likeness. Your potion will like you but when they look at you they see the face of their celebrity crush. The effects of this potion last for 2 months":n.includes("Orange Extract")?"Potion of Teleportation. Your crush will be teleported far away from you if you get too close. The effects of this potion last for 2 days ":n.includes("Coconut Oil")?"Potion of Feline X 1/2. Your crush will be transformed into a hybrid of a human and cat. The effects of this potion last for 3 weeks":"Potion of Petty. Your crush will perform petty spiteful actions towards you. The effects of this potion last for 2 weeks.";if("bitter"!==t)return"sour"===t?n.includes("Mango Extract")?"Potion of Destruction. Your crush will seek to destroy all of your personal property":n.includes("Water Melon Extract")?"Potion of the Sparrow. Your crush will fall for you the next time they see a sparrow. The effects of this potion last for 2 years":n.includes("Orange Extract")?"Potion of Frost. Your crush will be frozen in a block of ice. The effects of this potion lasts for 6 weeks":n.includes("Coconut Oil")?"Potion of Amphibia. Your crush will be transformed into a frog":n.includes("Spinach Extract")?"Potion of Rebound. Give this crush and they will be come your enemy. The effects of this potion last for 1 day":n.includes("Lavender Oil")?"Potion of Feline. Your crush will become a cat. The effects of this potion last for 2 days":n.includes("Sunflower Oil")?"Potion of Photosynthesis. Your crush will become vegan. The effects of this potion lasts 1 year.":n.includes("Rose Petal")?"Potion of Favor. Your crush will grow to like you over 3 days. The effects of this potion last for 4 weeks. ":n.includes("Sunflower Petal")?"Potion of the Hero. Your crush will save and fall for you if you are in inauspicious circumstances. ":n.includes("Cardinal Petal")||n.includes("Rosemary Oil")?"Potion of Amphibia. Your crush will be transformed into a frog":n.includes("Vegetable Oil")?"Potion of the Hero. Your crush will save and fall for you if you are in inauspicious circumstances. ":n.includes("Blended Fish Scales")?"Potion of Romeo and Juliet. Your crush will be lovesick for you but this might not be a good thing...The effects of this potion last, well, permanently!":n.includes("Blended Salmon Guts")?"Potion of Rage X2. Your crush will go on a destructive rampage. The effects of this potion last for 5 days":n.includes("Foxgloves Petal")?"Potion of the Black Rose. Your crush will fall for you tremendously, but will die immediately afterward\u2026":n.includes("Castor Oil")||n.includes("Canola Oil")?"Potion of the Sparrow. Your crush will fall for you the next time they see a sparrow. The effects of this potion last for 2 years":"Hmm...try again you might be onto something powerful!":'"Hmm...try again you might be onto something powerful!"';if(n.includes("Mango Extract"))return"Potion of the Full Moon. Your crush will fall for you on the next full moon. The effects of this potion lasts for 6 weeks";if(n.includes("Watermelon Extract"))return"Potion of Frost. Your crush will be frozen in a block of ice. The effects of this potion lasts for 6 weeks";if(n.includes("Orange Extract"))return"Potion of Canine. Your crush will transform into a dog. The effects of this potion last for 20 days.";if(n.includes("Coconut Oil"))return"Potion of Feline. Your crush will become a cat. The effects of this potion last for 2 days";if(n.includes("Rosemary Oil"))return"Potion of Frost. Your crush will be frozen in a block of ice. The effects of this potion lasts for 6 weeks";if(n.includes("Vegetable Oil"))return"Potion of Feline. Your crush will become a cat. The effects of this potion last for 2 days";if(n.includes("Blended Fish Scales"))return"Potion of Rebound. Give this crush and they will be come your enemy. The effects of this potion last for 1 day";if(n.includes("Blended Salmon Guts"))return"Potion of Scales. Your crush will be transformed into a fish. The effects of this potion lasts for 6 weeks";if(n.includes("Foxgloves Petal"));else{if(n.includes("Lemon Extract"))return"Potion of Rebound. Give this crush and they will be come your enemy. The effects of this potion last for 1 day";if(n.includes("Tulip Petal"))return"Potion of Canine. Your crush will transform into a dog. The effects of this potion last for 1 week.";if(n.includes("Amaryllis Petal"))return"Potion of Canine X2. Your crush will transform into a dog. The effects of this potion last for 1 month.";if(n.includes("Bellflower Petal"))return"Potion of Photosynthesis. Your crush will become vegan. The effects of this potion lasts 1 year.";if(n.includes("Castor Oil"))return"Potion of the Sparrow. Your crush will fall for you the next time they see a sparrow. The effects of this potion last for 2 years";if(!n.includes("Canola Oil"))return"Hmm...try again you might be onto something powerful!"}},S=function(e){return Object(i.jsx)("div",{className:C.a.MixerContent,children:Object(i.jsxs)("div",{className:C.a.InnerContent,children:[Object(i.jsx)("button",{className:(t=e.mixed,t?C.a.HideMixer:C.a.ShowMixer),onClick:e.clicked,children:"Mix Your Potion"}),Object(i.jsxs)("div",{className:C.a.Bold,children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:C.a.Bold,children:"Ingredients: "}),e.myingredient[0].ingredient," + ",e.myingredient[1].ingredient,"+ ",e.myingredient[2].ingredient," + ",e.myingredient[3].ingredient," + ",e.myingredient[4].ingredient]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:C.a.Bold,children:"Taste: "}),e.taste]}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{className:C.a.Bold,children:Y(e.mixed,e.taste,e.myingredient,e.allingredients)}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),k(e.mixed,e.clear)]})]})});var t},M=[{ingredient:"Mango Extract",taste:"sweet"},{ingredient:"Water Melon Extract",taste:"sweet"},{ingredient:"Guava Extract",taste:"sweet"},{ingredient:"Orange Extract",taste:"sweet"},{ingredient:"Blended Fish Scales",taste:"salty"},{ingredient:"Blended Salmon Guts",taste:"salty"},{ingredient:"Lemon Extract",taste:"sour"},{ingredient:"Spinach Extract",taste:"bitter"}],B=[{ingredient:"Lavender Oil",taste:"bitter"},{ingredient:"Sunflower Oil",taste:"bitter"},{ingredient:"Coconut Oil",taste:"sweet"},{ingredient:"Rosemary Oil",taste:"salty"},{ingredient:"Castor Oil",taste:"neutral"},{ingredient:"Canola Oil",taste:"neutral"},{ingredient:"Vegetable Oil",taste:"salty"}],F=[{ingredient:"Rose Petal",taste:"bitter"},{ingredient:"Sunflower Petal",taste:"bitter"},{ingredient:"Cardinal Petal",taste:"bitter"},{ingredient:"Tulip Petal",taste:"sour"},{ingredient:"Amaryllis Petal",taste:"sour"},{ingredient:"Foxgloves Petal",taste:"salty"},{ingredient:"Bellflower Petal",taste:"sour"}],E=function(e){Object(d.a)(o,e);var t=Object(u.a)(o);function o(){var e;Object(a.a)(this,o);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={options:[{name:"option1",ingredient:"clear"},{name:"option2",ingredient:"clear"},{name:"option3",ingredient:"clear"},{name:"option4",ingredient:"clear"},{name:"option5",ingredient:"clear"}],taste:"neutral",mixed:!1},e.colorChangeHandler=function(t){var o=t.target.value.substring(0,t.target.value.length-1),i=t.target.value.substring(t.target.value.length-1),n=Object(h.a)({},e.state.options[i]);n.name="option"+i,n.ingredient=o;var r=Object(f.a)(e.state.options);r[i]=n,e.setState({options:r})},e.mixPotionHandler=function(){if("clear"!==e.state.options[0].ingredient&&"clear"!==e.state.options[1].ingredient&&"clear"!==e.state.options[2].ingredient&&"clear"!==e.state.options[3].ingredient){var t={bitter:0,sweet:0,salty:0,neutral:0,sour:0},o=Object(f.a)(M.concat(B,F));e.state.options.map((function(e){o.map((function(o){o.ingredient===e.ingredient&&("bitter"===o.taste?t.bitter+=1:"sweet"===o.taste?t.sweet+=1:"sour"===o.taste?t.sour+=1:"salty"===o.taste?t.salty+=1:t.neutral+=1)}))}));var i={bitter:t.bitter/5,sweet:t.sweet/5,salty:t.salty/5,neutral:t.neutral/5,sour:t.sour/5},n={},r=0;for(var l in i)i[l]>=r&&(r=i[l],n=l);var s=n;e.setState({taste:s,mixed:!0})}else e.setState({mixed:!1})},e.clearPotionHandler=function(){e.setState({options:[{name:"option1",ingredient:"clear"},{name:"option2",ingredient:"clear"},{name:"option3",ingredient:"clear"},{name:"option4",ingredient:"clear"},{name:"option5",ingredient:"clear"}],taste:"neutral",mixed:!1,note:"Build me a potion my love!"})},e}return Object(c.a)(o,[{key:"render",value:function(){return Object(i.jsx)(b,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(w,{ingredients:this.state.options,mixed:this.state.mixed}),Object(i.jsx)(T,{extracts:M,oils:B,flowers:F,ingredients:this.state.options,changed:this.colorChangeHandler,mixed:this.state.mixed}),Object(i.jsx)(S,{taste:this.state.taste,allingredients:Object(f.a)(M.concat(B,F)),myingredient:this.state.options,clicked:this.mixPotionHandler,mixed:this.state.mixed,clear:this.clearPotionHandler})]})})}}]),o}(n.Component),H=function(e){Object(d.a)(o,e);var t=Object(u.a)(o);function o(){return Object(a.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)(E,{})})}}]),o}(n.Component),N=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,21)).then((function(t){var o=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,l=t.getTTFB;o(e),i(e),n(e),r(e),l(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(H,{})}),document.getElementById("root")),N()},3:function(e,t,o){e.exports={MixerContent:"Mixer_MixerContent__1ia_j",Bold:"Mixer_Bold__2j34m",InnerContent:"Mixer_InnerContent__3-HSI",ShowMixer:"Mixer_ShowMixer__1Geyg",HideMixer:"Mixer_HideMixer__mADyP"}},4:function(e,t,o){e.exports={Ingredients:"Options_Ingredients__3lFve",Option:"Options_Option__1--ZH",Hide:"Options_Hide__3uzVU"}}},[[20,1,2]]]);
//# sourceMappingURL=main.6b0d0e46.chunk.js.map