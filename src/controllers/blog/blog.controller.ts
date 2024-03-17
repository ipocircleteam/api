import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { ApiResponse, ApiError, asyncHandler } from "../../utils";

const prisma = new PrismaClient();

interface CustomRequest extends Request {
    userId?: number;
}

const addBlog = asyncHandler(async (req: CustomRequest, res: Response) => {
    const { title, slug, description, tags, metadata, content, imageUrl } = req.body;
    const authorId = req.userId;

    try {
        if (authorId === undefined) {
            throw new Error("AuthorId is missing in the request");
        }

        const authorExists = await prisma.admin.findUnique({
            where: {
                id: authorId
            }
        });

        if (!authorExists) {
            throw new Error("Author not found");
        }

        const newBlog = await prisma.blog.create({
            data: {
                title,
                slug,
                description,
                tags: {
                    set: tags 
                },
                metadata,
                content,
                imageUrl,
                authorId
            },
            include: {
                author: true 
            }
        });

        res.status(201).json(
            new ApiResponse(
                201,
                { blog: newBlog },
                "Blog entry created successfully"
            )
        );
    } catch (error: any) {
        console.error("Error creating blog entry:", error);
        res.status(error.statusCode || 500).json(
            new ApiResponse(error.statusCode || 500, null, error.message)
        );
    }
});

export { addBlog };
