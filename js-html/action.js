let newArticles = [
  {
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/bd/5a/bd5a67c0f777764fc4dcc72842a61529.webp",
    Price: "9.4 сая ₮",
    Title: "Хотын төвд city center-т 171мкв оффис",
    Location: "УБ — Сүхбаатар, Сүхбаатар, Хороо 1",
  },
  {
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/36/ae/36ae89d046558bf036869974b78d09de.webp",
    Price: "50,000 ₮",
    Title: "Univision-ны хар, цагаан төхөөрөмж",
    Location: "УБ — Баянзүрх, 14-р хороолол",
  },
  {
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/bd/5a/bd5a67c0f777764fc4dcc72842a61529.webp",
    Price: "1.5 сая ₮",
    Title: "Dell 15.6' Intel Core i7, 16 GB RAM, 512 GB",
    Location: "УБ — Сүхбаатар, Сүхбаатар, Хороо 8",
  },
  {
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/36/19/36197082fe6c1c62d3f2e05a72d481a4.webp",
    Price: "1.55 Тэрбум ₮",
    Title: "СХД Авто оншилгооны урд авто засвар",
    Location: "УБ — Сонгинохайрхан, Сонгинохайрхан, Хороо 20",
  },
  {
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/af/0b/af0b8427a3e48493efe017eee5ead524.webp",
    Price: "200,000 ₮",
    Title: "Shoes",
    Location: "УБ — Баянгол, 3, 4 хороолол",
  },
  {
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/32/4d/324d0d9b1c38cb6694592049e5f4ff65.webp",
    Price: "10.5 сая ₮",
    Title: "Toyota Prius 20, 2007/2016",
    Location: "Орхон, Орхон",
  },
  {
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/46/d2/46d23e4123b75f3eb6d76f5ea1d4048a.webp",
    Price: "350,000 ₮",
    Title: "Нийтийн байр схд",
    Location: "УБ — Сонгинохайрхан, Сонгинохайрхан, Хороо 19",
  },
  {
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/ac/4d/ac4d4e50e66114703b067ed959dd6c02.webp",
    Price: "850,000 ₮",
    Title: "Гал тогоо тусдаа 1 өрөө байр",
    Location: "УБ — Сонгинохайрхан, 21-р хороолол",
  },
];

let articles = "";
newArticles.map((arr) => {
  let article = `
    <div class=article-body>
      <div class="image"><img src="${arr.imgUrl}" alt="" /></div>
      <div class="price">${arr.Price}</div>
      <div class="title">${arr.Title}</div>
      <div class="location">${arr.Location}</div>
    </div>
`;
  articles = articles + article;
});

document.getElementById("parent").innerHTML = articles;
