function Item(purchase, price, done) {
  this.purchase = purchase;
  this.price = price;
  this.done = done;
}

var JsComponent = ng.core.Component({
  selector: 'my-app',
  templateUrl: '/app.component.html'
})
  .Class({
    constructor: function() {

      this.items= [
        new Item("Хлеб",15.9),
        new Item("Масло",60),
        new Item("Картофель",22.6, true),
        new Item("Сыр",310)
      ];
    }
  });

JsComponent.prototype.addItem = function (text, price) {
  if (text == undefined || text.trim() == "" || price == undefined)
    return;
  this.items.push(new Item(text, price));
};
