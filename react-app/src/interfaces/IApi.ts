export default interface IApi {
    getRandomCount: () => Promise<number>;
}