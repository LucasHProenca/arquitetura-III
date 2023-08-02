import z from "zod"

export interface EditCourseInputDTO {
    idToEdit: string,
    id: string,
    name: string,
    lessons: number
}

export interface EditCurseOutputDTO {
    message: string,
    course: {
        id: string,
        name: string,
        lessons: number,
        createdAt: string
    }
}

export const EditCourseSchema = z.object({
    idToEdit: z.string(),
    
})