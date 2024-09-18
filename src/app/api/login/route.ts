import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// Define an interface for the login request body
interface LoginRequestBody {
  username: string;
  password: string;
}

// Mocked user data for login validation (replace with your actual user validation logic)
const mockUser = {
  username: 'user',
  password: 'password',  // In a real application, use hashed passwords!
};

// JWT secret key (ensure it is set in your environment variables)
const JWT_SECRET = process.env.JWT_SECRET as string;

// Generate JWT Token
const generateToken = (username: string) => {
  return jwt.sign({ username }, JWT_SECRET, {
    expiresIn: '1h', // Token expiration time
  });
};

export async function POST(req: NextRequest) {
  try {
    const body: LoginRequestBody = await req.json();

    // Validate the user credentials (replace with actual authentication logic)
    if (body.username !== mockUser.username || body.password !== mockUser.password) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Generate JWT token
    const token = generateToken(body.username);

    // Respond with the JWT token
    return NextResponse.json({ token }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
