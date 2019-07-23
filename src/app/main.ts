import { sayHello } from "./greet";
import { showCustomer } from "./showCustomer";
import { showBannerAndNav } from "./showBannerAndNav";
import { test } from "./../templates/js/banner";

/*let banner = new Init(10451513);*/

if (typeof window === 'undefined') {
    console.log('hi from Nodejs------------------------------------------------------------------')
}else {

    showCustomer(".customer", "Politie");
    showBannerAndNav('.container');

    /*banner.start();*/
    test();
    
} 