(this.webpackJsonppms=this.webpackJsonppms||[]).push([[0],{32:function(e,a,t){e.exports=t(61)},38:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var s=t(0),o=t.n(s),c=t(11),m=t.n(c),n=t(14),l=(t(37),t(38),t(2)),i=t(19),r=t(7);class g extends s.Component{constructor(...e){super(...e),this.state={},this.onNavigate=e=>{this.props.history.push(e)}}componentDidMount(){r.a.timeline({loop:!1}).add({targets:".home-letter",scale:[0,1],duration:1500,elasticity:600,delay:(e,a)=>45*(a+1)}),r.a.timeline({loop:!0}).add({targets:".home-port",scale:[1,1.2,1],elasticity:600,delay:500,duration:1e3}),r.a.timeline({loop:!0}).add({targets:".home-comm",scale:[1,1.2,1],elasticity:600,delay:1e3,duration:1e3}),r.a.timeline({loop:!0}).add({targets:".home-cont",scale:[1,1.2,1],elasticity:600,duration:1e3,delay:1500})}render(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"home-container"},o.a.createElement("div",{className:"home-wrap"},o.a.createElement("div",{className:"home-name"},o.a.createElement("div",{className:"text-wrapper"},o.a.createElement("div",{className:"home-letters"},o.a.createElement("span",{className:"home-letter"},"K"),o.a.createElement("span",{className:"home-letter"},"y"),o.a.createElement("span",{className:"home-letter"},"i")," ",o.a.createElement("br",{className:"home-break"}),o.a.createElement("span",{className:"home-letter"},"S"),o.a.createElement("span",{className:"home-letter"},"h"),o.a.createElement("span",{className:"home-letter"},"o"),o.a.createElement("span",{className:"home-letter"},"o"),o.a.createElement("span",{className:"home-letter"},"n")," ",o.a.createElement("br",{className:"home-break"}),o.a.createElement("span",{className:"home-letter"},"L"),o.a.createElement("span",{className:"home-letter"},"e")))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"home-port",onClick:()=>this.onNavigate("/gallery")},"Gallery")),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"home-comm",onClick:()=>this.onNavigate("/commission")},"Commission")),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"home-cont",onClick:()=>this.onNavigate("/contact")},"Contact Me")))),o.a.createElement("div",{className:"cloud x1"}),o.a.createElement("div",{className:"cloud reverse x2"}),o.a.createElement("div",{className:"cloud x3"}),o.a.createElement("div",{className:"cloud reverse x4"}),o.a.createElement("div",{className:"cloud x5"}),o.a.createElement("div",{className:"cloud x6"}),o.a.createElement("div",{className:"cloud reverse x7"}),o.a.createElement("div",{className:"cloud x8"}),o.a.createElement("div",{className:"cloud fadeRight"}),o.a.createElement("div",{className:"cloud fadeLeft"})))}}var d=g,h=t(10),p=t(12);class u extends s.Component{constructor(...e){super(...e),this.state={title:""},this.onBack=()=>{window.history.back()},this.onNavigate=e=>{this.props.history.push(e)}}componentDidMount(){let e=this.props.history.location.pathname;"/contact"===e&&this.setState({title:"Contact Me"}),"/commission"===e&&this.setState({title:"Commission"}),"/gallery"===e&&this.setState({title:"Gallery"})}render(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"head-container shadow"},o.a.createElement(h.a,{icon:p.a,className:"head-back",onClick:this.onBack}),o.a.createElement("div",{className:"head-title"},this.state.title)))}}var E=Object(l.g)(u),N=t(63);class v extends s.Component{constructor(...e){super(...e),this.state={isOpen:!1,modalImg:""},this.onNavigate=e=>{this.props.history.push(e)},this.setModal=e=>{this.setState({modalImg:e,isOpen:!0})},this.offModal=()=>{this.setState({isOpen:!1})}}componentDidMount(){}render(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,null),o.a.createElement("div",{className:"port-container"},o.a.createElement("div",{className:"port-wrap"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("img",{src:"../../images/PoisonousMosquito.png",className:"port-image",onClick:()=>this.setModal("../../images/PoisonousMosquito.png")})),o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("img",{src:"../../images/PoisonousMosquito.png",className:"port-image",onClick:()=>this.setModal("../../images/PoisonousMosquito.png")})),o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("img",{src:"../../images/PoisonousMosquito.png",className:"port-image",onClick:()=>this.setModal("../../images/PoisonousMosquito.png")}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("img",{src:"../../images/PoisonousMosquito.png",className:"port-image",onClick:()=>this.setModal("../../images/PoisonousMosquito.png")})),o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("img",{src:"../../images/PoisonousMosquito.png",className:"port-image",onClick:()=>this.setModal("../../images/PoisonousMosquito.png")})),o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("img",{src:"../../images/PoisonousMosquito.png",className:"port-image",onClick:()=>this.setModal("../../images/PoisonousMosquito.png")}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("img",{src:"../../images/PoisonousMosquito.png",className:"port-image",onClick:()=>this.setModal("../../images/PoisonousMosquito.png")})),o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("img",{src:"../../images/PoisonousMosquito.png",className:"port-image",onClick:()=>this.setModal("../../images/PoisonousMosquito.png")})),o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("img",{src:"../../images/PoisonousMosquito.png",className:"port-image",onClick:()=>this.setModal("../../images/PoisonousMosquito.png")}))))),o.a.createElement(N.a,{centered:!0,isOpen:this.state.isOpen,toggle:this.offModal},o.a.createElement("img",{src:this.state.modalImg?this.state.modalImg:"",className:"modal-img"})))}}var k=v;class M extends s.Component{constructor(...e){super(...e),this.state={stage:1,stageName:"Portrait"},this.onNavigate=e=>{this.props.history.push(e)},this.onPrev=()=>{switch(this.state.stage){case 1:this.setState({stage:3,stageName:"Caricature"});break;case 2:this.setState({stage:1,stageName:"Portrait"});break;case 3:this.setState({stage:2,stageName:"Realistic"});break;default:this.setState({stage:1,stageName:"Portrait"})}},this.onNext=()=>{switch(this.state.stage){case 2:this.setState({stage:3,stageName:"Caricature"});break;case 3:this.setState({stage:1,stageName:"Portrait"});break;case 1:this.setState({stage:2,stageName:"Realistic"});break;default:this.setState({stage:1,stageName:"Portrait"})}}}componentDidMount(){}render(){const e=this.state;return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,null),o.a.createElement("div",{className:"comm-container"},o.a.createElement("div",{className:"comm-wrap"},o.a.createElement("div",{className:"comm-top"},o.a.createElement(h.a,{icon:p.a,className:"comm-back",onClick:this.onPrev}),o.a.createElement("div",{className:"comm-title"},e.stageName),o.a.createElement(h.a,{icon:p.b,className:"comm-next",onClick:this.onNext})),1===e.stage?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"comm-img-wrap"},o.a.createElement("img",{src:"../../images/Dr.Strange.png",className:"comm-image"})),o.a.createElement("div",{className:"comm-details"},"Price: $100")):"",2===e.stage?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"comm-img-wrap"},o.a.createElement("img",{src:"../../images/PoisonousMosquito.png",className:"comm-image"})),o.a.createElement("div",{className:"comm-details"},"Price: $150")):"",3===e.stage?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"comm-img-wrap"},o.a.createElement("img",{src:"../../images/PirateGhost.png",className:"comm-image"})),o.a.createElement("div",{className:"comm-details"},"Price: $200")):"")))}}var C=M,y=t(23);class w extends s.Component{constructor(...e){super(...e),this.state={},this.onNavigate=e=>{this.props.history.push(e)},this.onClick=e=>{switch(e){case"fb":window.location.href="";break;default:this.props.history.push("/")}}}componentDidMount(){}render(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,null),o.a.createElement("div",{className:"contact-container"},o.a.createElement("div",{className:"contact-wrap"},o.a.createElement("div",{className:""},o.a.createElement(h.a,{icon:y.b,className:"contact-fb shadow",onClick:()=>this.onClick("fb")}),o.a.createElement(h.a,{icon:y.a,className:"contact-as",onClick:()=>this.onClick("as")}),o.a.createElement("a",{href:"mailto:kyishoonle96@gmail.com"},o.a.createElement("img",{src:"../../images/icon_gmail.svg",className:"contact-mail"})),o.a.createElement("img",{src:"../../images/icon_ig.svg",className:"contact-ig",onClick:()=>this.onClick("ig")})))))}}var P=w;var f=()=>{return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{atEnter:{offset:3,opacity:0},atLeave:{offset:3,opacity:1},atActive:{offset:0,opacity:(e=1,Object(i.b)(e,{stiffness:330,damping:22}))},mapStyles:e=>({transform:"translateX(".concat(e.offset,"%)"),opacity:e.opacity}),className:"route-wrapper"},o.a.createElement(l.a,{path:"/",exact:!0,component:d}),o.a.createElement(l.a,{path:"/gallery",exact:!0,component:k}),o.a.createElement(l.a,{path:"/commission",exact:!0,component:C}),o.a.createElement(l.a,{path:"/contact",exact:!0,component:P})));var e};class b extends s.Component{render(){return o.a.createElement(n.a,null,o.a.createElement(f,null))}}var x=b;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.fc60c2e2.chunk.js.map