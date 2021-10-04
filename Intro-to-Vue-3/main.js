const app = Vue.createApp({
    data(){
        return {
            product: 'Dark Chocolate',
            image: './assets/images/dark_choc.jpg',
            url: 'https://www.google.com.br',
            stock: 100,
            details: ['60% cocoa', '30% sugar' , '10% chocolate butter'],
            variants: [
                {id: '2234', type: "Dark"},
                {id: '2235', type: "White"}
            ]
        }
    }
})