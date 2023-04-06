import { atom } from "recoil";


export interface AuthModalState
{
    open: boolean
    view: 'login' | 'SignUp' | 'ResetPassword'
}

const defaultModalState: AuthModalState =
{
    open: false,
    view: 'login'
}