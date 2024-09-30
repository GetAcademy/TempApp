const model = {
    // del 1
    app: {
        currentPage: 'products', // singleProduct
    },

    // del 2
    inputs: {
        singleProductPage: {
            productId: 1,
            variant: 'Red',
            isInWishlist: false,
            zipCodeForDelivery: null,
        },
        productsPage: {
            searchText: 'tastatur',
            sort: null,
            layout: 'list', //'table'
            filter: '',
        },
    },

    // del 3 - felles data
    shoppingCart: [
        { productId: 1, count: 2 },
    ],
    products: [
        {
            id: 1,
            productNo: 'SVIVE',
            skuCode: 1104,
            title: 'Svive Oberon red',
            description: 'Full størrelse...',
            price: 1319,
            rating: 4.2,
            ratingCount: 4,
            inStock: 50,
            variants: ['Brown', 'Red'],
            image: 'svive1.jpg',
        },
        {
            id: 2,
            title: 'Svive Triton Mini',
            description: '60% gaming...',
            price: 499,
            beforePrice: 799,
            rating: 3.2,
            ratingCount: 6,
            inStock: 50,
        },
    ],
};

/*
Besvare tre spørsmål for hvert skjermbilde 
1. Hvilke data trenger vi i modellen for å 
   tegne opp dette skjermbildet?
2. Bruker inputs, tekstfelt, sortering
3. Hva kan ev. brukeren gjøre på denne siden 
   - og hva trenger vi i modellen for det? 

*/