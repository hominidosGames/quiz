export class Helper {
    static getDay() {
        const date = new Date();
        const dayYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (24 * 60 * 60 * 1000));
    
        return dayYear;
    }
}
