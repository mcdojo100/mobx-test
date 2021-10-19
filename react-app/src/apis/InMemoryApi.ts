import IApi from "../interfaces/IApi"

export default class InMemoryApi implements IApi {
    async getRandomCount(): Promise<number> {
       const count = Math.floor(Math.random() * 100)
       return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(count)
        }, 1000)
       })
    }

}