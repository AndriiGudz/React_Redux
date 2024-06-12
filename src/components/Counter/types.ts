export interface CounterProps {
    count: number,
    onMinusClick?: () => void,
    onPlusClick?: () => void,
    disabledMinus?: boolean,
    disabledPlus?: boolean
}