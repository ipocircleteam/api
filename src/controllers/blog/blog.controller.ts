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
            throw new ApiError(400,"AuthorId is missing in the request");
        }

        const authorExists = await prisma.admin.findUnique({
            where: {
                id: authorId
            }
        });

        if (!authorExists) {
            throw new ApiError(400,"Author not found");
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
const getBlog = asyncHandler(async(req:Request,res:Response)=>{
    const blogId= Number(req.query);
    const blog = await prisma.blog.findUnique({
        where:{ id: blogId} ,
        select:{
            title:true,
            description:true,
            slug:true,
            imageUrl:true,
            content:true,
            author: {select:{username:true}}
        }
    });
    if(!blog){
        throw new ApiError(400,"Blog not found");
    }
    res.status(200).json(
        new ApiResponse(200,{blog},"Retrieved Blog Successfully")
    );
});

export { addBlog, getBlog};
