import { sayHello } from "./greet";
import { showCustomer } from "./showCustomer";
import { showBannerAndNav } from "./showBannerAndNav";

if (typeof window === 'undefined') {
    console.log('hi from Nodejs------------------------------------------------------------------')
}else {
    showCustomer(".customer", "Politie");
    showBannerAndNav('.container');
}

 