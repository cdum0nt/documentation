window.addEventListener("DOMContentLoaded", (event) => {
    var divs = document.querySelectorAll('h2');

    [].forEach.call(divs, function(div) {
        let p = document.createElement("span");
        div.prepend(p);
    });

    const ul = document.querySelector('.md-tabs__list');
    ul?.insertAdjacentHTML("beforeend", "<li class='md-tabs__item'><a data-sleek data-badge-changelog class='md-tabs__link' href='#'>Changelog</a></li>");

    window.$sleek=[];window.SLEEK_PRODUCT_ID=901462981;(function(){d=document;s=d.createElement("script");s.src="https://client.sleekplan.com/sdk/e.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
});
