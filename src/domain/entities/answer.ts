import { Entity } from "../../core/entities/entity"
import { Optional } from "../../core/entities/types/optional"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"

interface AnswerProps {
  content: string
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content
  }

  static create(props: Optional<AnswerProps, 'createdAt' >, id?: UniqueEntityID) {
    return new Answer({ ...props, createdAt: new Date() }, id)
  }
}