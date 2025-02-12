import { plainToClass } from 'class-transformer';
import { IsEnum, IsNumber, IsString, validateSync } from 'class-validator';

export enum EnvironmentType {
  Dev = 'dev',
  Prod = 'prod',
}

export class EnvironmentVariables {
  @IsEnum(EnvironmentType)
  NODE_ENV: EnvironmentType;

  @IsNumber()
  PORT: number;

  @IsString()
  JWT_SECRET: string;
}

export function validateENV(configuration: Record<string, unknown>) {
  const finalConfig = plainToClass(EnvironmentVariables, configuration, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(finalConfig);

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return finalConfig;
}
