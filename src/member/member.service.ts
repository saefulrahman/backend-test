import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Member } from './member.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MemberService extends TypeOrmCrudService<Member> {
  constructor(@InjectRepository(Member) repo) {
    super(repo);
  }
}
