export type AuthStackParamList = {
    Login: undefined,
    Signup: undefined
}
export type MainStackParamList = {
    Home: undefined,
    CourseDetails:{
        courseId: string
    };
    MyCourses: undefined,
    Profile: undefined,
}