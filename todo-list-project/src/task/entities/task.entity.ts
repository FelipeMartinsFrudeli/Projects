import { Base } from 'src/base.entity';
import { TodoList } from 'src/todo-list/entities/todo-list.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Task extends Base {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: false })
  completed: boolean;

  @ManyToOne(() => TodoList)
  todoList: TodoList;
}
