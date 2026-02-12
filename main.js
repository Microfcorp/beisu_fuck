function addVkPost() {
  var pointNew = document.getElementById('createTable');
  // 1. Создать контейнер
  const containerId = 'vk_post_-88983607_10753';
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement('div');
    container.id = containerId;
    pointNew.insertBefore(container, pointNew.firstChild);
    //pointNew.appendChild(container); // добавляем в body, можно в другой контейнер
  }

  // 2. Загрузить скрипт VK OpenAPI, если он еще не загружен
  if (!window.VK) {
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "https://vk.com/js/api/openapi.js?173";
    script.onload = () => {
      // 3. Инициализировать пост после загрузки скрипта
      VK.Widgets.Post(containerId, -88983607, 10753, 'w4maWXqQraWcZH-oF6w_EDk2f5IT');
    };
    document.head.appendChild(script);
  } else {
    // Если скрипт уже есть, просто инициализируем
    //VK.Widgets.Post(containerId, -88983607, 10753, 'w4maWXqQraWcZH-oF6w_EDk2f5IT');
  }
}

addVkPost();
var nonLOL = document.querySelector("#page-header > div.headermenu > div").textContent.toLowerCase();
if(nonLOL.indexOf("белов") == -1 && nonLOL.indexOf("олейник") == -1){
  document.querySelector("#page-header > h1 > div:nth-child(1) > a > img").src = "https://raw.githubusercontent.com/Microfcorp/beisu_fuck/refs/heads/main/newBeisuLogo.jpg";
}
if(nonLOL.indexOf("медведева") != -1){
  alert("Александра, реклама может быть и таргетинговой, специально для кого то одного :))");
}
if(nonLOL.indexOf("заливин") != -1){
  alert("Господин Заливин, реклама может быть и таргетинговой, специально для кого то одного :))");
}
if(nonLOL.indexOf("елизавета") != -1 || nonLOL.indexOf("алексей") != -1){
  document.querySelector("#page-header > h1 > div.text-header").innerHTML = "ИнфоБелГУ: Лиза";
}
//alert("Helloy bebra world :))");
