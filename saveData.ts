// utilities/saveData.ts
import prisma from '../next-js/lib/prisma';

export const saveData = async (data: any) => {
  try {
    await prisma.data.create({
      data: {
        name: "Default",
        description: data.description || "Description",
        videourl: data.videourl || "https://youtube.com",
        thumbnailurl: data.thumbnailurl || "https://youtube.com",
        rating: data.rating || "0"
      },
    });
  } catch (error) {
    console.error('Error saving data:', error);
    throw new Error('Data saving failed');
  }
};
