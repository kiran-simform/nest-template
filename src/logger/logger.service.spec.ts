import { Test, TestingModule } from '@nestjs/testing';
import { Logger } from './logger.service';
import { TsLogLoggerService } from './tslog-logger.service';

describe('LoggerService', () => {
  let service: Logger;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Logger],
    }).compile();

    service = module.get<Logger>(Logger);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TsLogLoggerService],
    }).compile();

    const service1 = module.get<TsLogLoggerService>(TsLogLoggerService);
    service1.log('hello', {
      name: 'hello',
    });
  });
});
