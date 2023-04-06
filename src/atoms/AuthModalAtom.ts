import { atom } from "recoil";

export enum View
{
    Login = 'login',
    SignUp = 'SignUp',
    ResetPassword = 'ResetPassword'
}

export interface AuthModalState
{
    open: boolean
    view: View.Login | View.SignUp | View.ResetPassword
}

const defaultModalState: AuthModalState =
{
    open: false,
    view: View.Login
}