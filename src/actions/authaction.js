"use server"
import { signIn } from "@/auth"

export async function login(formData) {
    const action = formData.get('action')
    await signIn(action)
}

export async function logOut(formData) {

}