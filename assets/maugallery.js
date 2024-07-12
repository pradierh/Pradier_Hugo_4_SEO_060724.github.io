document.addEventListener("DOMContentLoaded",function(){var t,e,a,l;t=document.querySelector(".gallery"),e={columns:{xs:1,sm:2,md:3,lg:3,xl:3},lightBox:!0,lightboxId:"myAwesomeLightbox",showTags:!0,tagsPosition:"top",navigation:!0},a=[],function t(e){if(!e.querySelector(".gallery-items-row")){var a=document.createElement("div");a.classList.add("gallery-items-row","row"),e.appendChild(a)}}(t),e.lightBox&&function t(e,a,l){var i=`<div class="modal fade" id="${a}" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        ${l?'<div class="mg-prev" style="cursor:pointer;position:absolute;top:50%;left:-15px;background:white;">&lt;</div>':""}
                        <img class="lightboxImage img-fluid" alt="Content displayed in lightbox">
                        ${l?'<div class="mg-next" style="cursor:pointer;position:absolute;top:50%;right:-15px;background:white;">&gt;</div>':""}
                    </div>
                </div>
            </div>
        </div>`;e.insertAdjacentHTML("beforeend",i)}(t,e.lightboxId,e.navigation),l=e,document.querySelectorAll(".gallery-item").forEach(function(t){t.addEventListener("click",function(){l.lightBox&&"IMG"===t.tagName&&function t(e,a){document.getElementById(a).querySelector(".lightboxImage").setAttribute("src",e.getAttribute("src"));let l=new bootstrap.Modal(document.getElementById(a));l.show()}(t,l.lightboxId)})}),document.querySelector(".gallery").addEventListener("click",function(t){var e,a,i,s,o,n,r,c,d,g;t.target.classList.contains("nav-link")?function t(e){if(!e.classList.contains("active-tag")){document.querySelector(".active-tag").classList.remove("active","active-tag"),e.classList.add("active","active-tag");var a=e.dataset.imagesToggle;document.querySelectorAll(".gallery-item").forEach(function(t){var e=t.closest(".item-column");"all"===a||t.dataset.galleryTag===a?e.style.display="block":e.style.display="none"})}}(t.target):t.target.classList.contains("mg-prev")?(e=l.lightboxId,a=document.querySelector(".lightboxImage"),i=document.querySelector(".tags-bar .active-tag").dataset.imagesToggle,s=[],"all"===i?document.querySelectorAll(".item-column img").forEach(function(t){s.push(t)}):document.querySelectorAll(".item-column img").forEach(function(t){t.dataset.galleryTag===i&&s.push(t)}),o=s[Array.from(s).findIndex(function(t){return t.getAttribute("src")===a.getAttribute("src")})-1]||s[s.length-1],a.setAttribute("src",o.getAttribute("src"))):t.target.classList.contains("mg-next")&&(n=l.lightboxId,r=document.querySelector(".lightboxImage"),c=document.querySelector(".tags-bar .active-tag").dataset.imagesToggle,d=[],"all"===c?document.querySelectorAll(".item-column img").forEach(function(t){d.push(t)}):document.querySelectorAll(".item-column img").forEach(function(t){t.dataset.galleryTag===c&&d.push(t)}),g=d[Array.from(d).findIndex(function(t){return t.getAttribute("src")===r.getAttribute("src")})+1]||d[0],r.setAttribute("src",g.getAttribute("src")))}),t.querySelectorAll(".gallery-item").forEach(function(t){"IMG"===(l=t).tagName&&l.classList.add("img-fluid"),function t(e){e.parentElement.querySelector(".gallery-items-row").appendChild(e)}(t),i=t,s=e.columns,(o=document.createElement("div")).classList.add("item-column","mb-4"),"number"==typeof s?o.classList.add(`col-${Math.ceil(12/s)}`):"object"==typeof s?(s.xs&&o.classList.add(`col-${Math.ceil(12/s.xs)}`),s.sm&&o.classList.add(`col-sm-${Math.ceil(12/s.sm)}`),s.md&&o.classList.add(`col-md-${Math.ceil(12/s.md)}`),s.lg&&o.classList.add(`col-lg-${Math.ceil(12/s.lg)}`),s.xl&&o.classList.add(`col-xl-${Math.ceil(12/s.xl)}`)):console.error(`Columns should be defined as numbers or objects. ${typeof s} is not supported.`),i.parentElement.appendChild(o),o.appendChild(i);var l,i,s,o,n=t.dataset.galleryTag;e.showTags&&void 0!==n&&-1===a.indexOf(n)&&a.push(n)}),e.showTags&&function t(e,a,l){var i='<li class="nav-item"><span class="nav-link active active-tag" data-images-toggle="all">All</span></li>';l.forEach(function(t){i+=`<li class="nav-item active">
                <span class="nav-link" data-images-toggle="${t}">${t}</span></li>`});var s=`<ul class="my-4 tags-bar nav nav-pills">${i}</ul>`;"bottom"===a?e.insertAdjacentHTML("beforeend",s):"top"===a?e.insertAdjacentHTML("afterbegin",s):console.error(`Unknown tags position: ${a}`)}(t,e.tagsPosition,a),t.style.display="block"});