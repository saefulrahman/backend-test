import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { MemberEntity } from './member.entity';
import { MemberService } from './member.service';
import { CreateMemberDto } from './member.dto';

@Crud({
  model: {
    type: MemberEntity,
  },
  dto: {
    create: CreateMemberDto,
  },
})
@Controller('member')
export class MemberController implements CrudController<MemberEntity> {
  constructor(public service: MemberService) {}
}
