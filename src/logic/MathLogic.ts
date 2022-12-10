import { ButtonTypes } from '../App';

interface MathLogicInterface {
    mathematicalOperation: (operation: string, firstValue: string, secondValue: string) => string,
}

class MathLogic implements MathLogicInterface {
    mathematicalOperation(operation: string, firstValue: string, secondValue: string) {
        const {Addition, Subtraction, Division, Multiplication} = ButtonTypes;
        let result = '';
        const firstValueNumber = this.isPercentage(firstValue);
        const secondValueNumber = this.isPercentage(secondValue);

        switch(operation) {
            case Addition:
                result = this.additionOperation(firstValueNumber, secondValueNumber);
            break;

            case Subtraction:
                result = this.subtractionOperation(firstValueNumber, secondValueNumber);
            break;

            case Division:
                result = this.divisionOperation(firstValueNumber, secondValueNumber);
            break;

            case Multiplication:
                result = this.multiplicationOperation(firstValueNumber, secondValueNumber);
            break;
        }

        return result;
    }

    private additionOperation(firstValue: number, secondValue: number): string {
        const result = String(firstValue + secondValue);
        return result;
    }

    private subtractionOperation(firstValue: number, secondValue: number): string {
        const result = String(firstValue - secondValue);
        return result;
    }

    private divisionOperation(firstValue: number, secondValue: number): string {
        const result = String(firstValue / secondValue);
        return result;
    }

    private multiplicationOperation(firstValue: number, secondValue: number): string {
        const result = String(firstValue * secondValue);
        return result;
    }

    private isPercentage(value: string): number {
        if(!value.includes('%'))
            return Number(value);

        const valueLength = value.length;
        const valueAfterConversion = Number(value.slice(0, valueLength - 1)) /  100;
        console.log(valueAfterConversion);
        return valueAfterConversion;
    }
}

const mathLogic = new MathLogic();

export default mathLogic;