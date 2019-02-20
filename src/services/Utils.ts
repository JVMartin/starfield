export class Utils {
    public static randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public static randomFloat(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }
}
