const studentRepo = require('../repositories/StudentRepository');
const {
    registerUserStudent,
    studentLogin,
    getStudentById,
    googleRegisterUserAsStudent,
    studentGoogleLogin
} = require('../controllers/StudentController');

jest.mock('../repositories/StudentRepository');

describe('StudentController', () => {
    describe('registerUserStudent', () => {
        it('deve registrar um estudante', async () => {
            const mockStudent = { userid: 1 };
            studentRepo.registerUserAsAStudent.mockResolvedValue(mockStudent);

            const result = await registerUserStudent({ userid: 1 });
            expect(result).toEqual(mockStudent);
            expect(studentRepo.registerUserAsAStudent).toHaveBeenCalledWith({ userid: 1 });
        });

        it('deve lançar um erro se o registro do estudante falhar', async () => {
            studentRepo.registerUserAsAStudent.mockRejectedValue(new Error('Erro'));

            await expect(registerUserStudent({ userid: 1 })).rejects.toThrow('Erro ao criar aluno: Erro');
        });
    });

    describe('studentLogin', () => {
        it('deve fazer login de um estudante', async () => {
            const mockLogin = { token: 'test-token', name: 'test-name', profilePic: 'test-pic' };
            studentRepo.loginStudent.mockResolvedValue(mockLogin);

            const result = await studentLogin({ useremail: 'test@example.com' });
            expect(result).toEqual(mockLogin);
            expect(studentRepo.loginStudent).toHaveBeenCalledWith({ useremail: 'test@example.com' });
        });

        it('deve lançar um erro se o login do estudante falhar', async () => {
            studentRepo.loginStudent.mockRejectedValue(new Error('Erro'));

            await expect(studentLogin({ useremail: 'test@example.com' })).rejects.toThrow('Erro no login do aluno: Erro');
        });
    });

    describe('googleRegisterUserAsStudent', () => {
        it('deve registrar um estudante via Google', async () => {
            const mockStudent = { userid: 1 };
            studentRepo.registerUserAsAStudentViaGoogle.mockResolvedValue(mockStudent);

            const result = await googleRegisterUserAsStudent({ userid: 1 });
            expect(result).toEqual(mockStudent);
            expect(studentRepo.registerUserAsAStudentViaGoogle).toHaveBeenCalledWith({ userid: 1 });
        });

        it('deve lançar um erro se o registro do estudante via Google falhar', async () => {
            studentRepo.registerUserAsAStudentViaGoogle.mockRejectedValue(new Error('Erro'));

            await expect(googleRegisterUserAsStudent({ userid: 1 })).rejects.toThrow('Erro ao registrar aluno via Google: Erro');
        });
    });

    describe('studentGoogleLogin', () => {
        it('deve fazer login de um estudante via Google', async () => {
            const mockLogin = { token: 'test-token', name: 'test-name', profilePic: 'test-pic' };
            studentRepo.loginStudentGoogle.mockResolvedValue(mockLogin);

            const result = await studentGoogleLogin({ useremail: 'test@example.com' });
            expect(result).toEqual(mockLogin);
            expect(studentRepo.loginStudentGoogle).toHaveBeenCalledWith({ useremail: 'test@example.com' });
        });

        it('deve lançar um erro se o login via Google falhar', async () => {
            const errorMessage = 'Erro no login do aluno: Erro';
            studentRepo.loginStudentGoogle.mockRejectedValue(new Error('Erro'));

            await expect(studentGoogleLogin({ useremail: 'test@example.com' })).rejects.toThrow(errorMessage);
            expect(studentRepo.loginStudentGoogle).toHaveBeenCalledWith({ useremail: 'test@example.com' });
        });
    });

    describe('getStudentById', () => {
        it('deve retornar um estudante pelo ID', async () => {
            const req = { user: { userid: 1 } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
            const mockStudent = { userid: 1 };
            studentRepo.getStudentById.mockResolvedValue(mockStudent);

            await getStudentById(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mockStudent);
            expect(studentRepo.getStudentById).toHaveBeenCalledWith(req);
        });

        it('deve retornar 404 se o estudante não for encontrado', async () => {
            const req = { user: { userid: 1 } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
            const errorMessage = "Student not found";
            studentRepo.getStudentById.mockResolvedValue(null);

            await getStudentById(req, res);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
            expect(studentRepo.getStudentById).toHaveBeenCalledWith(req);
        });

        it('deve retornar 500 se houver um erro no servidor', async () => {
            const req = { user: { userid: 1 } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
            const errorMessage = "Internal server error";
            studentRepo.getStudentById.mockRejectedValue(new Error(errorMessage));

            await getStudentById(req, res);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
            expect(studentRepo.getStudentById).toHaveBeenCalledWith(req);
        });
    });
});
