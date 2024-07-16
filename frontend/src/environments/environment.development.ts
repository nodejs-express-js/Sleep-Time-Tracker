export const environment:environmentType = {
    signup: "http://localhost:8000/users/signup",
    login:"http://localhost:8000/users/login" ,
    getsleeptimes:"http://localhost:8000/sleepTimes",
    postsleeptimes:"http://localhost:8000/sleepTimes",
    deletesleeptimes:"http://localhost:8000/sleepTimes"
};
type environmentType={
    signup: string,
    login: string,
    getsleeptimes: string,
    postsleeptimes: string,
    deletesleeptimes: string
}