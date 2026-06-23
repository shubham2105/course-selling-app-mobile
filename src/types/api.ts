import { Course, User } from "."

export interface LoginResponse{
    message: string, 
    token: string
}
export interface CourseResponse{
    courses: Course[]
}
export interface PurchaseResponse {
    message: string
    purchase:{
        title: string,
        description: string,
        price: number;
    }
}
export interface SingleCourseResponse {
    course: Course;
    isPurchased: boolean,
}
 export interface ProfileResponse {
    user: User;
 }