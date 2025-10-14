import { Observer } from "./observer";

export class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notify(data: string): void {
        for (const observer of this.observers) {
            observer.update(data);
        }
    }
}
