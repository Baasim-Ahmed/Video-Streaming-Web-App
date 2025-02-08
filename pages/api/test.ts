import connectToDatabase from '../../lib/mongodb';

export default async function handler(NextAuthReq: any, NextAuthRes: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message?: string; error?: string; }): void; new(): any; }; }; }) {
  try {
    await connectToDatabase(); // Ensure the database is connected
    NextAuthRes.status(200).json({ message: 'Database connection successful!' });
  } catch (error) {
    NextAuthRes.status(500).json({ error: 'Database connection failed' });
  }
}
