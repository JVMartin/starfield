export class Utils {
    public static randomInt(min, max): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
