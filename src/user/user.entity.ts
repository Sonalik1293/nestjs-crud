import { PrimaryGeneratedColumn, BaseEntity, Column, Entity, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    /*@ManyToOne(() => Account, { nullable: true })
    @JoinColumn({
      name: "account_id",
      referencedColumnName: "id"
    })
    account: Account;  */

}