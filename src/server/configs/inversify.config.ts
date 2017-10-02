import { Container, inject } from 'inversify';
import { makeProvideDecorator } from 'inversify-binding-decorators';

const container: Container = new Container();

const Provide: any = makeProvideDecorator(container);

export {container, Provide, inject};
