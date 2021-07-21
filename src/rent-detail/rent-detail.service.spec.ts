import { Test, TestingModule } from '@nestjs/testing';
import { RentDetailService } from './rent-detail.service';

describe('RentDetailService', () => {
  let service: RentDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentDetailService],
    }).compile();

    service = module.get<RentDetailService>(RentDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
