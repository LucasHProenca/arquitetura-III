import z from "zod"

export interface GetCourseInputDTO {
    q: string
}

export interface GetCourseOutputDTO {
    id: string,
    name: string,
    lessons: number,
    createdAt: string
}

export const GetCourseSchema = z.object({
    q: z.string().optional()
}).transform(data => data as GetCourseInputDTO)