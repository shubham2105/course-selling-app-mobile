export interface User {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    createdAt: string,
    updatedAt: string
}
export interface Admin{
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    createdAt: string,
    updatedAt: string
}
export interface Course {
    _id: string,
    title: string,
    description: string,
    price: number,
    imageUrl?:string,
    creatorId: string,
    createdAt: string,
    updatedAt: string
}
export interface Purchase{
    _id: string,
    userId: string,
    courseId: string,
     createdAt: string,
    updatedAt: string
}