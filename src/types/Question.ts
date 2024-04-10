export interface Questions {
    day: number | string,
    answers: Answer[]
}

export interface Answer {
    category: string,
    question: string,
    answers: string [],
    correct: number
}