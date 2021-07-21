import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Member } from './member.entity';
import { MemberService } from './member.service';
import { CreateMemberDto } from './member.dto';

@Crud({
  model: {
    type: Member,
  },
  dto: {
    create: CreateMemberDto,
  },
})
@Controller('member')
export class MemberController implements CrudController<Member> {
  constructor(public service: MemberService) {}
}
