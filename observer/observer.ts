export interface Observer {
    update(data: string): void;
}

export class ConcreteObserver implements Observer {
    constructor(private name: string) {}

    update(data: string): void {
        console.log(`${this.name} received update: ${data}`);
    }
}