import { FETCH_PRODUCTS } from './actionTypes';
// import axios from '../axios';

// const compare = {
//   lowestprice: (a, b) => {
//     if (a.price < b.price) return -1;
//     if (a.price > b.price) return 1;
//     return 0;
//   },
//   highestprice: (a, b) => {
//     if (a.price > b.price) return -1;
//     if (a.price < b.price) return 1;
//     return 0;
//   }
// };

// const productResponse = {
//   data: {
//     products: [
//       {
//         "availableSizes": [
//           "S",
//           "XS"
//         ],
//         "currencyFormat": "$",
//         "currencyId": "USD",
//         "description": "4 MSL",
//         "id": 12,
//         "installments": 9,
//         "isFreeShipping": true,
//         "price": 10.9,
//         "sku": 12064273040195392,
//         "style": "Black with custom print",
//         "title": "Cat Tee Black T-Shirt"
//       },
//       {
//         "availableSizes": [
//           "M"
//         ],
//         "currencyFormat": "$",
//         "currencyId": "USD",
//         "description": "",
//         "id": 13,
//         "installments": 5,
//         "isFreeShipping": true,
//         "price": 29.45,
//         "sku": 51498472915966370,
//         "style": "Front print and paisley print",
//         "title": "Dark Thug Blue-Navy T-Shirt"
//       },
//       {
//         "availableSizes": [
//           "X",
//           "L",
//           "XL"
//         ],
//         "currencyFormat": "$",
//         "currencyId": "USD",
//         "description": "GPX Poly 1",
//         "id": 14,
//         "installments": 3,
//         "isFreeShipping": true,
//         "price": 9,
//         "sku": 10686354557628304,
//         "style": "Front tie dye print",
//         "title": "Sphynx Tie Dye Wine T-Shirt"
//       },
//       {
//         "availableSizes": [
//           "X",
//           "L",
//           "XL",
//           "XXL"
//         ],
//         "currencyFormat": "$",
//         "currencyId": "USD",
//         "description": "Treino 2014",
//         "id": 15,
//         "installments": 5,
//         "isFreeShipping": true,
//         "price": 14,
//         "sku": 11033926921508488,
//         "style": "Black T-Shirt with front print",
//         "title": "Skuul"
//       },
//       {
//         "availableSizes": [
//           "X",
//           "L"
//         ],
//         "currencyFormat": "$",
//         "currencyId": "USD",
//         "description": "",
//         "id": 11,
//         "installments": 3,
//         "isFreeShipping": true,
//         "price": 13.25,
//         "sku": 39876704341265610,
//         "style": "Wine",
//         "title": "Wine Skul T-Shirt"
//       },
//       {
//         "availableSizes": [
//           "X",
//           "L",
//           "XL",
//           "XXL"
//         ],
//         "currencyFormat": "$",
//         "currencyId": "USD",
//         "description": "14/15 s/nº",
//         "id": 0,
//         "installments": 9,
//         "isFreeShipping": true,
//         "price": 10.9,
//         "sku": 8552515751438644,
//         "style": "Branco com listras pretas",
//         "title": "Cat Tee Black T-Shirt"
//       },
//       {
//         "availableSizes": [
//           "X",
//           "L",
//           "XL",
//           "XXL"
//         ],
//         "currencyFormat": "$",
//         "currencyId": "USD",
//         "description": "14/15 s/nº",
//         "id": 1,
//         "installments": 9,
//         "isFreeShipping": true,
//         "price": 10.9,
//         "sku": 18644119330491310,
//         "style": "Preta com listras brancas",
//         "title": "Sphynx Tie Dye Grey T-Shirt"
//       },
//       {
//         "availableSizes": [
//           "X",
//           "L"
//         ],
//         "currencyFormat": "$",
//         "currencyId": "USD",
//         "description": "14/15 s/nº",
//         "id": 2,
//         "installments": 7,
//         "isFreeShipping": true,
//         "price": 14.9,
//         "sku": 11854078013954528,
//         "style": "Branco com listras pretas",
//         "title": "Danger Knife Grey"
//       },
//       {
//         "availableSizes": [
//           "X",
//           "L"
//         ],
//         "currencyFormat": "$",
//         "currencyId": "USD",
//         "description": "2014 s/nº",
//         "id": 3,
//         "installments": 7,
//         "isFreeShipping": true,
//         "price": 14.9,
//         "sku": 876661122392077,
//         "style": "Preto com listras brancas",
//         "title": "White DGK Script Tee"
//       },
//       {
//         "availableSizes": [
//           "XL"
//         ],
//         "currencyFormat": "$",
//         "currencyId": "USD",
//         "description": "14/15 s/nº - Jogador",
//         "id": 4,
//         "installments": 12,
//         "isFreeShipping": false,
//         "price": 25.9,
//         "sku": 9197907543445676,
//         "style": "Branco com listras pretas",
//         "title": "Born On The Streets"
//       },
//       {
//         "availableSizes": [
//           "X",
//           "L",
//           "XL"
//         ],
//         "currencyFormat": "$",
//         "currencyId": "USD",
//         "description": "14/15 + Camiseta 1º Mundial",
//         "id": 5,
//         "installments": 9,
//         "isFreeShipping": false,
//         "price": 10.9,
//         "sku": 10547961582846888,
//         "style": "Preto",
//         "title": "Tso 3D Short Sleeve T-Shirt A"
//       },
//       {
//         "availableSizes": [
//           "XL",
//           "XXL"
//         ],
//         "currencyFormat": "$",
//         "currencyId": "USD",
//         "description": "Goleiro 13/14",
//         "id": 6,
//         "installments": 0,
//         "isFreeShipping": true,
//         "price": 49.9,
//         "sku": 6090484789343891,
//         "style": "Branco",
//         "title": "Man Tie Dye Cinza Grey T-Shirt"
//       },
//       {
//         "availableSizes": [
//           "S"
//         ],
//         "currencyFormat": "$",
//         "currencyId": "USD",
//         "description": "1977 Infantil",
//         "id": 7,
//         "installments": 4,
//         "isFreeShipping": true,
//         "price": 22.5,
//         "sku": 18532669286405344,
//         "style": "Preto com listras brancas",
//         "title": "Crazy Monkey Black T-Shirt"
//       },
//       {
//         "availableSizes": [
//           "XL"
//         ],
//         "currencyFormat": "$",
//         "currencyId": "USD",
//         "description": "",
//         "id": 8,
//         "installments": 4,
//         "isFreeShipping": false,
//         "price": 18.7,
//         "sku": 5619496040738316,
//         "style": "Azul escuro",
//         "title": "Tso 3D Black T-Shirt"
//       },
//       {
//         "availableSizes": [
//           "L",
//           "XL"
//         ],
//         "currencyFormat": "$",
//         "currencyId": "USD",
//         "description": "",
//         "id": 9,
//         "installments": 5,
//         "isFreeShipping": true,
//         "price": 134.9,
//         "sku": 11600983276356164,
//         "style": "",
//         "title": "Crazy Monkey Grey"
//       },
//       {
//         "availableSizes": [
//           "L",
//           "XL"
//         ],
//         "currencyFormat": "$",
//         "currencyId": "USD",
//         "description": "",
//         "id": 10,
//         "installments": 9,
//         "isFreeShipping": true,
//         "price": 49,
//         "sku": 27250082398145996,
//         "style": "",
//         "title": "On The Streets Black T-Shirt"
//       }
//     ]
//   }
// };

// export const fetchProducts = (filters, sortBy, callback) => dispatch => {
//   return axios
//     .get('/products.json')
//     .then(res => {
//       let { products } = res.data;

//       if (!!filters && filters.length > 0) {
//         products = products.filter(p =>
//           filters.find(f => p.availableSizes.find(size => size === f))
//         );
//       }

//       if (!!sortBy) {
//         products = products.sort(compare[sortBy]);
//       }

//       if (!!callback) {
//         callback();
//       }

//       return dispatch({
//         type: FETCH_PRODUCTS,
//         payload: products
//       });
//     })
//     .catch(err => {
//       console.log('Could not fetch products. Try again later.');
//     });
// };

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  lowestcalories: (a, b) => {
    if (a.calories < b.calories) return -1;
    if (a.calories > b.calories) return 1;
    return 0;
  },
};

const foodItemResponse = {
  data: {
    products: [
      {
        "currencyFormat": "$",
        "currencyId": "HKD",
        "description": "romaine & field greens, hard boiled egg, avocado, bacon, aged cheddar, tomatoes, corn, greek yogurt ranch",
        "id": 1,
        "isFreeDelivery": true,
        "price": 9.99,
        "category": "Salad",
        "title": "Cobb",
        "calories": 450,
        "thumbnail": "https://images.dev.unoapp.io/650x650/2/f3FLn1CFAazTCmPoxlLtnWCXKUasDhT2Mi9IgIMO.png"
      },
      {
        "currencyFormat": "$",
        "currencyId": "HKD",
        "description": "field greens, avocado, aged cheddar, corn, black beans, salsa fresca, cilantro lime vinaigrette",
        "id": 2,
        "isFreeDelivery": true,
        "price": 8.99,
        "category": "Salad",
        "title": "Fiesta",
        "calories": 440,
        "thumbnail": "https://images.dev.unoapp.io/650x650/2/CZmm5S3OwuF0tlkGMxFhiXMz9PsKGJ7WG7x1DOXH.png"
      },
      {
        "currencyFormat": "$",
        "currencyId": "HKD",
        "description": "field greens & spinach, quinoa, feta cheese, dried cranberries, beet slaw, strawberries, carrots, balsamic vinaigrette",
        "id": 3,
        "isFreeDelivery": true,
        "price": 9.49,
        "category": "Salad",
        "title": "Fiesta",
        "calories": 540,
        "thumbnail": "https://images.dev.unoapp.io/650x650/2/0Ceh82WnJklzbL7WzByF9gNJ0RL5h3BcX1ClynUn.png"
      },
      {
        "currencyFormat": "$",
        "currencyId": "HKD",
        "description": "spicy lemongrass chicken broth, rice noodles, cabbage, carrots, tomatoes, mushrooms, cilantro",
        "id": 4,
        "isFreeDelivery": true,
        "price": 7.49,
        "category": "Soup",
        "title": "Spicy lemongrass",
        "calories": 300,
        "thumbnail": "https://images.dev.unoapp.io/650x650/2/C1chstDLF2FtjseRhSHipN9jl55bojrGbiyFeBMh.png"
      },
      {
        "currencyFormat": "$",
        "currencyId": "HKD",
        "description": "scrambled egg, avocado, aged cheddar, black beans, cilantro, salsa fresca",
        "id": 5,
        "isFreeDelivery": true,
        "price": 5.99,
        "category": "Breakfast",
        "title": "Ranchero burrito",
        "calories": 700,
        "thumbnail": "https://images.dev.unoapp.io/650x650/2/tACwyxsVs1AM1NJzf2EufAgpkavfw9nrrT5V2hUp.png"
      },
      {
        "currencyFormat": "$",
        "currencyId": "HKD",
        "description": "scrambled egg, bacon, aged cheddar, tomatoes",
        "id": 6,
        "isFreeDelivery": true,
        "price": 3.99,
        "category": "Breakfast",
        "title": "Bacon, egg & cheese pocket",
        "calories": 410,
        "thumbnail": "https://images.dev.unoapp.io/650x650/2/luTgyaDODzR46wfe1JwKCfOjG8VzbthKytalCUaT.png"
      },
      {
        "currencyFormat": "$",
        "currencyId": "HKD",
        "description": "enjoy the great taste of coca-cola, sweetened from natural sources. with 50% fewer calories than regular colas.",
        "id": 7,
        "isFreeDelivery": true,
        "price": 2.29,
        "category": "Drinks",
        "title": "Coke life",
        "calories": 90,
        "thumbnail": "https://images.dev.unoapp.io/650x650/2/z9xitPVx4MLQlH341hCcCY6X4VKaXdYmIzpN1sAG.png"
      },
      {
        "currencyFormat": "$",
        "currencyId": "HKD",
        "description": "whether you’re stepping into a big pitch or meeting the in-laws for the first time, our antioxidant rich hibiscus & rosehips kombucha calms the nervous system and helps you get centered. calm is definitely the new cool.",
        "id": 8,
        "isFreeDelivery": true,
        "price": 5.99,
        "category": "Drinks",
        "title": "Rise kombucha – hibiscus/rose hips",
        "calories": 30,
        "thumbnail": "https://images.dev.unoapp.io/650x650/2/rJb8DaOUh7rvdvzmYrdOkJWW8WxfEUSVGeruSVhJ.png"
      }
    ]
  }
};

export const fetchProducts = (filters, sortBy, callback) => dispatch => {
  return Promise.resolve(foodItemResponse)
    .then(res => {
      let { products } = res.data;
      console.log(filters);

      if (!!filters && filters.length > 0) {
        products = products.filter(p =>
          filters.find(f => p.category === f)
        );
      }

      if (!!sortBy) {
        products = products.sort(compare[sortBy]);
      }

      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
    })
    .catch(err => {
      console.log('Could not fetch products. Try again later.');
    });
};
