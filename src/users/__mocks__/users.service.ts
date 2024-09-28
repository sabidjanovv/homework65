// src/folder_name/file_name.service.ts  -- folde_name ichidagi file_name.service.ts filesi bilan birxil nomi bo'lishi kerak

import { userStub } from "../test/stubs/user.stub";


export const UsersService = jest.fn().mockReturnValue({
    create: jest.fn().mockResolvedValue(userStub()),
    findAll: jest.fn().mockResolvedValue([userStub()]),
    findOne: jest.fn().mockResolvedValue(userStub()),
    update: jest.fn().mockResolvedValue(userStub()),
    remove: jest.fn().mockReturnValue({message:"Foydalanuvchi o'chirildi"}),
})