import{a as P,S as M,i as c}from"./assets/vendor-DqB7j7Ix.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const $="https://pixabay.com/api/",x="50785102-9c13520f9ca563685942e67a3";async function m(r,t){const{data:a}=await P($,{params:{key:x,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}});return a}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),g=document.querySelector(".js-load-more");let B=new M(".gallery a",{captionsData:"alt",captionDelay:250});function y(r){const t=r.map(({webformatURL:a,largeImageURL:i,tags:e,likes:o,views:n,comments:b,downloads:q})=>`<li class="gallery-item">
  <a href="${i}">
    <img loading="lazy" width="360" height=200px src="${a}" alt="${e}">
  </a>
  <div class="info">
  <div class="row">
    <p>Likes</p>
    <p>Views</p>
    <p>Comments</p>
    <p>Downloads</p>
  </div>
  <div class=" value">
    <p>${o}</p>
    <p>${n}</p>
    <p>${b}</p>
    <p>${q}</p>
  </div>
</div>

  

</li>`).join("");f.insertAdjacentHTML("beforeend",t),B.refresh()}function O(){f.innerHTML=""}function L(){h.classList.remove("hidden")}function u(){h.classList.add("hidden")}function v(){g.classList.remove("hidden")}function d(){g.classList.add("hidden")}const w=document.querySelector("form"),p=w.querySelector('input[name="search-text"]'),R=document.querySelector(".js-load-more");let s=1,l="";const S=15;d();w.addEventListener("submit",E);async function E(r){if(r.preventDefault(),l=p.value.trim(),l===""){c.warning({message:"Please enter a search term before submitting.",position:"topRight"});return}p.value="",O(),s=1,d(),L();try{const t=await m(l,s);if(u(),t.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits),t.totalHits>s*S&&v()}catch{c.error({message:"Failed to load images.Please try again.",position:"topRight"}),u()}}R.addEventListener("click",H);async function H(){s+=1,d(),L();try{const r=await m(l,s);u(),y(r.hits),s*S>=r.totalHits?(d(),c.info({message:"You have reached the end of the results"})):v();const i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:i*2,behavior:"smooth"})}catch{c.error({message:"Failed to load more images.",position:"topRight"})}}
//# sourceMappingURL=index.js.map
