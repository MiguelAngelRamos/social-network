import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { EmailAlreadyExistsException } from '../common/exceptions/email-already-exists';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    // Verificar si el email ya existe
    const existingUser = await this.userModel.findOne({email: createUserDto.email}).exec();

    if(existingUser) {
     throw new EmailAlreadyExistsException();// lanzar un error si el email ya está en uso
    }

    const { password, ...userData } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = new this.userModel({...userData, password: hashedPassword});
    return createUser.save()
  }

  async findAll():Promise<Omit<User, 'password'>[]> {
    //* Busca todos los usuarios en la base de datos y excluye el campo password de los resultados
    const users = await this.userModel.find().select('-password').exec();
    return users;
  }

  //* necesito crear un método que me permita obtener al usuario por correo
  async findByEmail(email: string ): Promise<User | null> {
    const user = await this.userModel.findOne({email}).exec();
    return user;
  }

  async findOne(id: string):Promise<Omit<User, 'password'> | null> {
    const user =  await this.userModel.findById(id).select('-password').exec();
    return user ? user.toObject(): null;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
