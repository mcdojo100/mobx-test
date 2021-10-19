import { makeObservable, observable, action, flow } from "mobx"
import InMemoryApi from "../apis/InMemoryApi";
import IApi from "../interfaces/IApi";

export class CountStore {
    count: number = 0;
    api: IApi = new InMemoryApi()

    constructor() {
        makeObservable(this, {
            count: observable,
            api: observable,
            increment: action,
            randomize: flow
        })
    }

    increment() {
        this.count = this.count + 1;
    }

    *randomize() {
        const count: number = yield this.api.getRandomCount()
       this.count = count;
    }
}

const countStore = new CountStore()
export default countStore