import { MailhogMailProvider } from '../../providers/implementations/MailhogMailProvider';
import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider';
import { MockUsersRepository } from '../../repositories/implementations/MockUserRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const mailtrapMailProvider = new MailtrapMailProvider();
const mailhogMailProvider = new MailhogMailProvider();

const mockUsersRepository = new MockUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  mockUsersRepository,
  mailhogMailProvider
  // mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
