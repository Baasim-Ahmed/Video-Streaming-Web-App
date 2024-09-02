import { NextApiRequest, NextApiResponse } from 'next';
import fastify from 'fastify';
import flixhqRoutes from '.next/server/routes/flixhqRoutes';

const server = fastify({
  logger: true, // Enables logging for better debugging and monitoring
});

// Registering flixhq routes with the Fastify server
server.register(flixhqRoutes);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Ensure the Fastify server is ready to handle requests
    await server.ready();

    // Pass the request and response to the Fastify server
    server.server.emit('request', req, res);
  } catch (error) {
    // In case of an error, respond with a 500 status and error message
    res.status(500).send({
      message: 'Server error. Please try again later.',
    });
  }
};
