import { POST } from '@/app/api/auth/register/route'; // Import your POST handler
import { connectToDB } from '@/lib/mongodb';
import User from '@/models/User';
import { NextRequest } from 'next/server';

jest.mock('@/lib/mongodb');
jest.mock('@/models/User');

describe('POST /api/register', () => {
    const mockConnectToDB = connectToDB as jest.Mock;
    const mockFindOne = User.findOne as jest.Mock;
    const mockCreate = User.create as jest.Mock;

    beforeEach(() => {
        mockConnectToDB.mockClear();
        mockFindOne.mockClear();
        mockCreate.mockClear();
    });

    it('should return 400 when email or password is missing', async () => {
        const req = {
            json: jest.fn().mockResolvedValue({ email: '', password: '' }), // Mocking NextRequest JSON method
        } as unknown as NextRequest;

        const res = await POST(req);
        const { error } = await res.json();

        expect(res.status).toBe(400);
        expect(error).toBe('missing input fields!');
    });

    it('should return 400 for invalid email format', async () => {
        const req = {
            json: jest.fn().mockResolvedValue({
                email: 'invalid-email',
                password: 'validpassword123',
            }),
        } as unknown as NextRequest;

        const res = await POST(req);
        const { error } = await res.json();

        expect(res.status).toBe(400);
        expect(error).toBe('Invalid email format');
    });

    it('should return 409 when email already exists', async () => {
        // Mocking User.findOne to simulate an existing user in the database
        mockFindOne.mockResolvedValueOnce({ email: 'test@example.com' });

        const req = {
            json: jest.fn().mockResolvedValue({
                email: 'test@example.com',
                password: 'validpassword123',
            }),
        } as unknown as NextRequest;

        const res = await POST(req);
        const { error } = await res.json();

        expect(res.status).toBe(409);
        expect(error).toBe(
            'User with email id test@example.com already exists!'
        );
    });

    it('should return 400 when password is too short', async () => {
        const req = {
            json: jest.fn().mockResolvedValue({
                email: 'newuser@example.com',
                password: 'short',
            }),
        } as unknown as NextRequest;

        const res = await POST(req);
        const { error } = await res.json();

        expect(res.status).toBe(400);
        expect(error).toBe('Password must be at least 6 characters');
    });

    it('should return 201 when user is successfully registered', async () => {
        // Mocking User.create to simulate successful user creation
        mockCreate.mockResolvedValueOnce({
            email: 'newuser@example.com',
            password: 'validpassword123',
        });

        const req = {
            json: jest.fn().mockResolvedValue({
                email: 'newuser@example.com',
                password: 'validpassword123',
            }),
        } as unknown as NextRequest;

        const res = await POST(req);
        const { message } = await res.json();

        expect(res.status).toBe(201);
        expect(message).toBe('User registered successfully.');
    });

    it('should return 500 if user registration fails due to database error', async () => {
        // Mocking connectToDB to simulate a database connection error
        mockConnectToDB.mockRejectedValueOnce(
            new Error('Database connection failed')
        );

        const req = {
            json: jest.fn().mockResolvedValue({
                email: 'newuser@example.com',
                password: 'validpassword123',
            }),
        } as unknown as NextRequest;

        const res = await POST(req);
        const { error } = await res.json();

        expect(res.status).toBe(500);
        expect(error).toBe('User registration failed, try after some time!');
    });

    it('should return 500 if user creation fails', async () => {
        // Mocking User.create to simulate a failure in user creation
        mockCreate.mockRejectedValueOnce(new Error('User creation failed'));

        const req = {
            json: jest.fn().mockResolvedValue({
                email: 'newuser@example.com',
                password: 'validpassword123',
            }),
        } as unknown as NextRequest;

        const res = await POST(req);
        const { error } = await res.json();

        expect(res.status).toBe(500);
        expect(error).toBe('User registration failed, try after some time!');
    });
});
