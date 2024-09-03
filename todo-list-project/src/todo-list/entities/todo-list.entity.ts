import { Base } from 'src/base.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class TodoList extends Base {
  @Column()
  name: string;

  @Column()
  tag: string;

  @ManyToOne(() => User)
  user: User;
}
