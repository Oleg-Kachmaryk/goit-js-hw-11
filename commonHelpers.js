import{i as a,S as d}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function h(i){const r="https://pixabay.com/api/",o=new URLSearchParams({key:"44085737-801aedd726c9c1496368a8656",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${r}?${o}`;return fetch(n).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function g({webformatURL:i,largeImageURL:r,tags:o,likes:n,views:e,comments:t,downloads:s}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${i}" alt="${o}"/>
      </a>
      <ul class="info">
        <li class="info-item"> <b>Likes</b> ${n} </li>
        <li class="info-item"> <b>Views</b> ${e} </li>
        <li class="info-item"> <b>Comments</b> ${t} </li>
        <li class="info-item"> <b>Downloads</b> ${s} </li>
      </ul>
    </li>
  `}function p(i){return i.map(g).join("")}const m=document.querySelector(".search-form"),c=document.querySelector(".gallery"),f=document.querySelector(".loader");let l="";m.addEventListener("input",i=>{l=i.target.value.trim()});m.addEventListener("submit",y);function y(i){if(i.preventDefault(),b(),l===""){a.warning({position:"topRight",timeout:1800,maxWidth:300,icon:"none",message:"Please enter a search query!"}),u();return}return h(l).then(r=>{if(r.hits.length===0)return c.innerHTML="",a.error({...L});const o=p(r.hits);c.innerHTML=o,w.refresh()}).catch(r=>{console.error(r),a.error({position:"topRight",timeout:1800,maxWidth:300,icon:"none",message:"An error occurred while fetching images. Please try again later."})}).finally(()=>{u()}),i.target.reset()}function b(){f.style.display="inline-block"}function u(){f.style.display="none"}const L={position:"topRight",timeout:1800,maxWidth:300,icon:"none",message:"Sorry, there are no images matching your search query. Please try again!"};let w=new d(".gallery a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
