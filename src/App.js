import React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  state = {
    open: false,
    code: String(
      '<!doctype html><html lang="en"><head profile="http://www.w3.org/2005/10/profile"><meta charset="utf-8"/><link rel="icon" href="/zerowastrip/logo/favicon.ico"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#000000"/><meta name="description" content="Zerowastrip with Pruncup!"/><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"/><link rel="apple-touch-icon" sizes="57x57" href="/zerowastrip/logo/apple-icon-57x57.png"/><link rel="apple-touch-icon" sizes="60x60" href="/zerowastrip/logo/apple-icon-60x60.png"/><link rel="apple-touch-icon" sizes="72x72" href="/zerowastrip/logo/apple-icon-72x72.png"/><link rel="apple-touch-icon" sizes="76x76" href="/zerowastrip/logo/apple-icon-76x76.png"/><link rel="apple-touch-icon" sizes="114x114" href="/zerowastrip/logo/apple-icon-114x114.png"/><link rel="apple-touch-icon" sizes="120x120" href="/zerowastrip/logo/apple-icon-120x120.png"/><link rel="apple-touch-icon" sizes="144x144" href="/zerowastrip/logo/apple-icon-144x144.png"/><link rel="apple-touch-icon" sizes="152x152" href="/zerowastrip/logo/apple-icon-152x152.png"/><link rel="apple-touch-icon" sizes="180x180" href="/zerowastrip/logo/apple-icon-180x180.png"/><link rel="icon" type="image/png" sizes="192x192" href="/zerowastrip/logo/android-icon-192x192.png"/><link rel="icon" type="image/png" sizes="32x32" href="/zerowastrip/logo/favicon-32x32.png"/><link rel="icon" type="image/png" sizes="96x96" href="/zerowastrip/logo/favicon-96x96.png"/><link rel="icon" type="image/png" sizes="16x16" href="/zerowastrip/logo/favicon-16x16.png"/><meta name="msapplication-TileImage" content="/zerowastrip/logo/ms-icon-144x144.png"/><meta name="msapplication-TileColor" content="#ffffff"/><meta name="theme-color" content="#ffffff"/><link rel="manifest" href="/zerowastrip/logo/manifest.json"/><title>Zerowastrip with Pruncup!</title><link href="/zerowastrip/static/css/2.f94ac72c.chunk.css" rel="stylesheet"><link href="/zerowastrip/static/css/main.d2b8758e.chunk.css" rel="stylesheet"></head><body><div id="root"></div><script>!function(e){function r(r){for(var n,f,l=r[0],i=r[1],a=r[2],c=0,s=[];c<l.length;c++)f=l[c],Object.prototype.hasOwnProperty.call(o,f)&&o[f]&&s.push(o[f][0]),o[f]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(p&&p(r);s.length;)s.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,l=1;l<t.length;l++){var i=t[l];0!==o[i]&&(n=!1)}n&&(u.splice(r--,1),e=f(f.s=t[0]))}return e}var n={},o={1:0},u=[];function f(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.m=e,f.c=n,f.d=function(e,r,t){f.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,r){if(1&r&&(e=f(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)f.d(t,n,function(r){return e[r]}.bind(null,n));return t},f.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(r,"a",r),r},f.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},f.p="/zerowastrip/";var l=this.webpackJsonpfrontend=this.webpackJsonpfrontend||[],i=l.push.bind(l);l.push=r,l=l.slice();for(var a=0;a<l.length;a++)r(l[a]);var p=i;t()}([])</script><script src="/zerowastrip/static/js/2.7958414e.chunk.js"></script><script src="/zerowastrip/static/js/main.0e1a774c.chunk.js"></script></body></html><style>body,html{position:fixed;overflow:hidden;height:100vh}body>.main{width:100vw;height:100vh;overflow-y:none;-webkit-overflow-scrolling:touch}</style>'
    ),
  };

  toggleBottomSheet() {
    this.openBottomSheet(!this.state.open);
  }
  openBottomSheet(open) {
    this.setState({ open });
  }

  componentDidMount() {}

  render() {
    const { open, code } = this.state;
    return (
      <div className="container mx-auto bg-black-600 bg-gray-800">
        <div className="overflow-hidden break-all text-xs font-mono text-white font-medium">
          {code}
        </div>
        <SwipeableBottomSheet
          overflowHeight={46}
          shadowTip={false}
          topShadow={false}
          open={open}
          onChange={this.openBottomSheet.bind(this)}
          bodyStyle={{}}
        >
          <div className="text-center">
            {open ? (
              <FontAwesomeIcon
                icon={faAngleDown}
                className="mt-1 text-3xl md:text-4xl opacity-50 mb-2"
                onClick={this.toggleBottomSheet.bind(this)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleUp}
                className="mt-1 text-3xl md:text-4xl opacity-50 mb-2"
                onClick={this.toggleBottomSheet.bind(this)}
              />
            )}
          </div>
          <div className="h-screen w-screen p-10 text-gray-600 flex justify-center items-center">
            <p className="break-words text-lg font-semibold">
              지층처럼 쌓여진 나는 이미 복잡하게 이것저것 복붙해서 만들어진 코드
              와 같아<br></br>
              <br></br>그 코드는 너무 복잡해 다른 사람이 읽을 수도 없고, 동작도
              느리지. <br></br>또, 언제 오류를 발생시킬지 몰라
            </p>
          </div>
        </SwipeableBottomSheet>
      </div>
    );
  }
}
export default App;
