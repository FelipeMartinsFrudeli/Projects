import { BeforeInsert, PrimaryColumn } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { nanoid } = require('nanoid');

export class Base {
  @PrimaryColumn()
  id: string;

  @BeforeInsert()
  generateId() {
    this.id = nanoid(12);
  }
}
