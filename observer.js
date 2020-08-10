/**
 * 观察者模式：分为 被观察者和观察者
 * 一个对象（称为subject）维持一系列依赖于它的对象（称为observer），
 * 将有关状态的任何变更自动通知给它们（观察者）。
 * */

// 以读者和出版社为例，一个出版社有多个读者。读者是观察者，出版社是被观察者。
// 当出版社（被观察者）的杂志有更新时，会自动通知读者（观察者）
class Subject {

}

class Observer {

}

var publisher = new Subject();
var reader = new Observer();


