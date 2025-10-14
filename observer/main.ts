import { Subject } from "./subject";
import { ConcreteObserver } from "./observer";

const subject = new Subject();

const obs1 = new ConcreteObserver("Observer 1");
const obs2 = new ConcreteObserver("Observer 2");

subject.addObserver(obs1);
subject.addObserver(obs2);

subject.notify("Event #1"); // Both observers notified

subject.removeObserver(obs1);

subject.notify("Event #2"); // Only Observer 2 notified
