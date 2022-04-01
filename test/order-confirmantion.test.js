const compile = require("../compile").default;

it("should create order confirmation email", () => {

    compile("order-confirmation/order-confirmation.hbs", {                                                                          
        account: null,                                                           
        billing: {                                                               
          address: null,                                                         
          payments: [ [Object] ],                                                
          subtotal: '$99.00',                                                    
          shipping: '$10.85',                                                    
          taxes: '$0.00',                                                        
          discounts: '$0.00',                                                    
          refunds: '$0.00',                                                      
          total: '$109.85',                                                      
          adjustedTotal: '$109.85'                                               
        },                                                                       
        combinedItems: [                                                         
          {                                                                      
            _id: 'oxkmtfLy2W3XKmXo5',                                            
                addedAt: "2022-04-01T19:17:48.825Z",                                   
            attributes: [Array],                                                 
                createdAt: "2022-04-01T19:18:05.798Z",                                 
            optionTitle: '1',                                                    
            parcel: [Object],                                                    
            price: {
                displayAmount: "$99.00"
            },                                                     
            productId: 'PXC6oWTKRSni8BnSo',                                      
            productSlug: 'primary-1-product',                                    
            productType: 'product-simple',                                       
            productTagIds: null,                                                 
            productVendor: null,                                                 
            quantity: 1,                                                         
            shopId: 'mHSNAMohtBcty8Pjp',                                         
            subtotal: [Object],                                                  
            title: 'Primary 1 Product',                                          
                updatedAt: "2022-04-01T19:18:05.798Z",                                 
            variantId: '8eM3YtQhMCST5GZPW',                                      
            variantTitle: 'Primary 1 Product | Variant 1',                       
            workflow: [Object],                                                  
            isTaxable: true,                                                     
            taxCode: null,                                                       
            tax: 0,                                                              
            taxableAmount: 0,                                                    
            taxes: [],           
            imageURLs: {
                thumbnail: "http://localhost:4081/_next/image?url=http%3A%2F%2Flocalhost%3A3000%2Fassets%2Ffiles%2FMedia%2FBknHFoW8sypPdGXyB%2Fthumbnail%2Fbanner.png&w=3840&q=75"
            },                                             
            productConfiguration: [Object],                                      
            placeholderImage: 'http://localhost:3000/resources/placeholder.gif', 
            productImage: undefined,                                             
            variantImage: undefined                                              
          }                                                                      
        ],                                                                       
        contactEmail: 'info@airfit.bg',                                          
        copyrightDate: 2022,                                                     
        homepage: null,                                                          
        legalName: undefined,                                                    
        order: {                                                                 
          _id: '3FJLL5hyzvGiZdEkR',                                              
          accountId: null,                                                       
          cartId: 'tnMEdJSqaknqooaHX',                                           
          createdAt: "2022-04-01T19:18:05.950Z",                                   
          currencyCode: 'USD',                                                   
          discounts: [],                                                         
          email: 'tedraykov@gmail.com',                                          
          ordererPreferredLanguage: null,                                        
          payments: [ [Object] ],                                                
          shipping: [ [Object] ],                                                
          shopId: 'mHSNAMohtBcty8Pjp',                                           
          surcharges: [],                                                        
          totalItemQuantity: 1,                                                  
          updatedAt: "2022-04-01T19:18:05.950Z",                                   
          workflow: { status: 'new', workflow: [Array] },                        
          anonymousAccessTokens: [ [Object] ],                                   
          referenceId: 'MbdZev9xCSEcKXzGc'                                       
        },                                                                       
        orderDate: '04/01/2022',                                                 
        orderUrl: null,                                                          
        physicalAddress: null,                                                   
        shipping: {                                                              
          address: {                                                             
            address: 'ул. Гоце Делчев',                                          
            city: 'Асеновград',                                                  
            fullName: 'Теодор Райков',                                           
            postal: '4230',                                                      
            region: 'Асеновград'                                                 
          },                                                                     
          carrier: 'Econt Express',                                              
          tracking: undefined                                                    
        },                                                                       
        shop: {                                                                  
          _id: 'mHSNAMohtBcty8Pjp',                                              
          active: true,                                                          
          availablePaymentMethods: [ 'iou_example' ],                            
          baseUOL: 'cm',                                                         
          baseUOM: 'kg',                                                         
          createdAt: "2021-09-17T18:20:54.095Z",                                   
          currency: 'USD',                                                       
          domains: [ 'localhost' ],                                              
          language: 'en',                                                        
          name: 'Airfit',                                                        
          description: null,                                                     
          paymentMethods: [],                                                    
          slug: 'airfit',                                                        
          timezone: 'US/Pacific',                                                
          unitsOfLength: [ [Object], [Object], [Object] ],                       
          unitsOfMeasure: [ [Object], [Object], [Object], [Object] ],            
          updatedAt: "2022-04-01T19:02:13.266Z",                                   
          shopType: 'primary',                                                   
          defaultNavigationTreeId: 'GiWEue9x3zcw4zZ3Z',                          
          allowGuestCheckout: true,                                              
          emails: [ [Object] ]                                                   
        },                                                                       
        shopName: 'Airfit',                                                      
        socialLinks: { display: false }                                          
      }                                                                          
      )
})
