import { ButtonTypes } from '../App';

interface MathLogicInterface {
    mathematicalOperation: (operation: string, firstValue: string, secondValue: string) => string,
}

class MathLogic implements MathLogicInterface {
    mathematicalOperation(operation: string, firstValue: string, secondValue: string) {
        const {Addition, Subtraction, Division, Multiplication} = ButtonTypes;
        let result = '';
        const firstValueNumber = Number(firstValue);
        const secondValueNumber = Number(secondValue);
        console.log(operation);

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

    private additionOperation(firstValue: number, secondValue: number) {
        const result = String(firstValue + secondValue);
        return result;
    }

    private subtractionOperation(firstValue: number, secondValue: number) {
        const result = String(firstValue - secondValue);
        return result;
    }

    private divisionOperation(firstValue: number, secondValue: number) {
        const result = String(firstValue / secondValue);
        return result;
    }

    private multiplicationOperation(firstValue: number, secondValue: number) {
        const result = String(firstValue * secondValue);
        return result;
    }

    private percentageOperation(firstValue: number, secondValue: number) {
        return 'Hello tehrr'
    }
}

const mathLogic = new MathLogic();

export default mathLogic;