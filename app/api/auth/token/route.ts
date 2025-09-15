import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

// This function handles GET requests to the /api/auth/token endpoint
// It retrieves and returns the JWT token for the authenticated user    

export async function GET(request: NextRequest) {
  const token = await getToken({ req: request });
  return NextResponse.json(token);
}