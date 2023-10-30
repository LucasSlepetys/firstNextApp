import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import prisma from '@/prisma/client';

interface Props {
  params: { id: string };
}

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: id },
  });

  if (!user)
    return NextResponse.json({ error: 'user not found' }, { status: 404 });
  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const userExists = await prisma.user.findUnique({
    where: { id: id },
  });

  if (!userExists)
    return NextResponse.json({ error: 'user not found' }, { status: 404 });

  const res = await prisma.user.update({
    where: { id: id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(res);
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const userExists = await prisma.user.findUnique({
    where: { id: id },
  });
  if (!userExists)
    return NextResponse.json({ error: 'user not found' }, { status: 404 });

  const res = await prisma.user.delete({
    where: { id: id },
  });

  return NextResponse.json(res);
}
