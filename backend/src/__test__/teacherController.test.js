const teacherRepo = require('../repositories/TeacherRepository');
const {
    registerUserAsATeacher,
    teacherLogin,
    getTeacherById,
    CpfIsNull,
    googleRegisterUserAsATeacher,
    teacherGoogleLogin
} = require('../controllers/TeacherController');

jest.mock('../repositories/TeacherRepository');

describe('TeacherController', () => {
    describe('registerUserAsATeacher', () => {
        it('deve registrar um professor', async () => {
            const mockTeacher = { userid: 1, teachercpf: '12345678901' };
            teacherRepo.registerUserAsATeacher.mockResolvedValue(mockTeacher);

            const result = await registerUserAsATeacher({ userid: 1, teachercpf: '12345678901' });
            expect(result).toEqual(mockTeacher);
            expect(teacherRepo.registerUserAsATeacher).toHaveBeenCalledWith({ userid: 1, teachercpf: '12345678901' });
        });

        it('deve lançar um erro se o registro do professor falhar', async () => {
            teacherRepo.registerUserAsATeacher.mockRejectedValue(new Error('Erro'));

            await expect(registerUserAsATeacher({ userid: 1, teachercpf: '12345678901' })).rejects.toThrow('Erro ao criar professor: Erro');
        });
    });

    describe('teacherLogin', () => {
        it('deve fazer login de um professor', async () => {
            const mockLogin = { token: 'test-token', name: 'test-name', profilePic: 'test-pic' };
            teacherRepo.loginTeacher.mockResolvedValue(mockLogin);

            const result = await teacherLogin({ useremail: 'test@example.com', teachercpf: '12345678901' });
            expect(result).toEqual(mockLogin);
            expect(teacherRepo.loginTeacher).toHaveBeenCalledWith({ useremail: 'test@example.com', teachercpf: '12345678901' });
        });

        it('deve lançar um erro se o login do professor falhar', async () => {
            teacherRepo.loginTeacher.mockRejectedValue(new Error('Erro'));

            await expect(teacherLogin({ useremail: 'test@example.com', teachercpf: '12345678901' })).rejects.toThrow('Erro no login do professor: Erro');
        });
    });

    describe('googleRegisterUserAsATeacher', () => {
        it('deve registrar um professor via Google', async () => {
            const mockTeacher = { userid: 1 };
            teacherRepo.registerUserAsATeacherViaGoogle.mockResolvedValue(mockTeacher);

            const result = await googleRegisterUserAsATeacher({ userid: 1 });
            expect(result).toEqual(mockTeacher);
            expect(teacherRepo.registerUserAsATeacherViaGoogle).toHaveBeenCalledWith({ userid: 1 });
        });

        it('deve lançar um erro se o registro do professor via Google falhar', async () => {
            teacherRepo.registerUserAsATeacherViaGoogle.mockRejectedValue(new Error('Erro'));

            await expect(googleRegisterUserAsATeacher({ userid: 1 })).rejects.toThrow('Erro ao registrar professor via Google: Erro');
        });
    });

    describe('teacherGoogleLogin', () => {
        it('deve fazer login de um professor via Google', async () => {
            const mockLogin = { token: 'test-token', name: 'test-name', profilePic: 'test-pic' };
            teacherRepo.loginTeacherGoogle.mockResolvedValue(mockLogin);

            const result = await teacherGoogleLogin({ useremail: 'test@example.com' });
            expect(result).toEqual(mockLogin);
            expect(teacherRepo.loginTeacherGoogle).toHaveBeenCalledWith({ useremail: 'test@example.com' });
        });

        it('deve lançar um erro se o login via Google falhar', async () => {
            const errorMessage = 'Erro no login do professor: Erro';
            teacherRepo.loginTeacherGoogle.mockRejectedValue(new Error('Erro'));

            await expect(teacherGoogleLogin({ useremail: 'test@example.com' })).rejects.toThrow(errorMessage);
            expect(teacherRepo.loginTeacherGoogle).toHaveBeenCalledWith({ useremail: 'test@example.com' });
        });
    });

    describe('getTeacherById', () => {
        it('deve retornar um professor pelo ID', async () => {
            const req = { user: { userid: 1 } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
            const mockTeacher = { userid: 1 };
            teacherRepo.getTeacherById.mockResolvedValue(mockTeacher);

            await getTeacherById(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mockTeacher);
            expect(teacherRepo.getTeacherById).toHaveBeenCalledWith(1);
        });

        it('deve retornar 404 se o professor não for encontrado', async () => {
            const req = { user: { userid: 1 } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
            const errorMessage = "Teacher not found";
            teacherRepo.getTeacherById.mockResolvedValue(null);

            await getTeacherById(req, res);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
            expect(teacherRepo.getTeacherById).toHaveBeenCalledWith(1);
        });

        it('deve retornar 500 se houver um erro no servidor', async () => {
            const req = { user: { userid: 1 } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
            const errorMessage = "Internal server error";
            teacherRepo.getTeacherById.mockRejectedValue(new Error(errorMessage));

            await getTeacherById(req, res);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
            expect(teacherRepo.getTeacherById).toHaveBeenCalledWith(1);
        });
    });

    describe('CpfIsNull', () => {
        it('deve lançar um erro se o CPF estiver vazio', async () => {
            await expect(CpfIsNull({ teachercpf: '' })).rejects.toThrow('CPF cannot be empty');
            await expect(CpfIsNull({ teachercpf: null })).rejects.toThrow('CPF cannot be empty');
        });

        it('não deve lançar um erro se o CPF estiver preenchido', async () => {
            await expect(CpfIsNull({ teachercpf: '12345678901' })).resolves.toBeUndefined();
        });
    });
});
