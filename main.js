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
document.querySelector("#page-header > h1 > div:nth-child(1) > a > img").src = "https://raw.githubusercontent.com/Microfcorp/beisu_fuck/refs/heads/main/newBeisuLogo.jpg";
//alert("Helloy bebra world :))");
