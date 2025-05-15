import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Optional } from "../../core/entities/types/optional"

interface QuestionProps {
  authorId: string
  bestAnswerId?: string
  title: string
  content: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
  static create(props: Optional<QuestionProps, 'createdAt' >, id?: UniqueEntityID) {
    return new Question({ ...props, createdAt: new Date() }, id)
  }
}