/// <reference types="Cypress" />

import Login from "../pages/LoginPage";
import Inventory from "../pages/InventoryPage";
import Cart from "../pages/CartPage";
import CheckOutInformation from "../pages/CheckOutInformationPage";
import CheckOutOverView from "../pages/CheckOutOverViewPage";
import CheckOutComplete from "../pages/CheckOutCompletePage";

const login = new Login();
const inventory = new Inventory();
const cart = new Cart();
const checkOutInformation = new CheckOutInformation();
const checkOutOverView = new CheckOutOverView();
const checkOutComplete = new CheckOutComplete();

context(
  "Buy item",
  {
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },
  () => {
    let browseData;
    let urlData;
    let productData;

    beforeEach(() => {
      cy.fixture("example").then((data) => {
        browseData = data;
      });

      cy.fixture("url").then((urls) => {
        urlData = urls;
      });

      cy.fixture("product").then((productInfo) => {
        productData = productInfo;
      });
      login.navigate();
    });

    it("Buys an item from the site", () => {
      login.swagLogoDisplaying();
      login.enterUser(browseData.username);
      login.enterPassword(browseData.password);
      login.clickOnLoginButton();

      inventory.urlVerification(urlData.inventory);
      inventory.clickOnProductAddCartButton();
      inventory.checkCartCount(productData.quantity);
      inventory.clickOnCartLogo();

      cart.urlVerification(urlData.cart);
      cart.verifyProductName(productData.name);
      cart.verifyProductDescription(productData.description);
      cart.verifyProductPrice(productData.price);
      cart.verifyProductQuantity(productData.quantity);
      cart.checkCartCount(productData.quantity);
      cart.clickOnCheckButton();

      checkOutInformation.urlVerification(urlData.checkoutinformation);
      checkOutInformation.enterFirstName(browseData.firstname);
      checkOutInformation.enterlastName(browseData.lastname);
      checkOutInformation.enterPostalCode(browseData.postalcode);
      checkOutInformation.clickOnContinueButton();

      checkOutOverView.urlVerification(urlData.checkoutoverview);
      checkOutOverView.checkOutOverViewHeaderDisplaying();
      checkOutOverView.checkCartCount(productData.quantity);
      checkOutOverView.verifyProductName(productData.name);
      checkOutOverView.verifyProductDescription(productData.description);
      checkOutOverView.verifyProductPrice(productData.price);
      checkOutOverView.verifyProductQuantity(productData.quantity);
      checkOutOverView.verifyItemPrice(productData.price);
      checkOutOverView.verifyItemTaxPrice(productData.tax);
      checkOutOverView.verifyTotalProductCartPrice(
        productData.price,
        productData.tax
      );
      checkOutOverView.clickOnFinishButton();

      checkOutComplete.urlVerification(urlData.finalcheckout);
      checkOutComplete.checkCheckOutCompleteTitleDisplaying();
      checkOutComplete.checkHeaderMessageDisplaying();
      checkOutComplete.verifyHeaderMessage(productData.successfulordermessage);
      checkOutComplete.checkOrderTextMessageDisplaying();
      checkOutComplete.verifyTextMessage(productData.successfultextmessage);
      checkOutComplete.clickOnBackHomeButton();
      inventory.urlVerification(urlData.inventory);
    });
  }
);
