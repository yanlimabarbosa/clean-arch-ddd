import { Answer } from "../entities/answer"

interface AnswerQuestionUseCaseRequest {
  content: string
  instructorId: string
  questionId: string
}

export class AnswerQuestionUseCase {
  execute({ content, instructorId, questionId, }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({ authorId: instructorId, content, questionId })

    return answer
  }
}