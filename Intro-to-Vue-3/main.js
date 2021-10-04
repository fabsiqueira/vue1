const app = Vue.createApp({
    data(){
        return {
            cart:0,
            product: 'Dark Chocolate',
            image: './assets/images/dark_choc.jpg',
            inStock: true,
            details: ['60% cocoa', '30% sugar', '10% chocolate butter'],
            variants: [
                { id: 2234, type:'dark', image: './assets/images/dark_choc.jpg' },
                { id: 2235, type:'white', image: './assets/images/white_choc.jpg' }
            ]
        }
    }
})