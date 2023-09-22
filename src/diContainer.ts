import { Container } from 'inversify';

enum Types {}

export default class DIContainer {
    private _container: Container;

    constructor() {
        this._container = new Container();
        this.registerServices();
    }

    public get container() {
        return this._container;
    }

    public static get types() {
        return Types;
    }

    private registerServices = () => {
        //this._container.bind<Service>(Types.Service).to(ServiceImplementation).inTransientScope();
    };
}
