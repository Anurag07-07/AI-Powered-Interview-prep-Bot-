"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"


const authFormSchema = (type:FormType)=>{ 
  return z.object({
   name: type === 'sign-up' ? z.string().min(2).max(50): z.string().optional(),
   email:z.string(),
   password:z.string().min(3)
})
}


const Authpage = ({type}:{type:FormType}) => {

   const formSchema = authFormSchema(type)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })
 
  const router = useRouter()

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === 'sign-up') {
        toast.success(`Account is Created Successfully`)
        router.push('/signin')
      }else{
        toast.success(`Sign in Succesfully`)
        router.push('/')
      }
      
    } catch (error) {
      console.log(error);
      toast.error(`There was an Error: ${error}`)      
    }
  }

  const isSignin:boolean = type === 'sign-in'

  return (
    <div className=" card-border  lg:min-w-[566px]">
      <div className="  flex flex-col justify-center items-center gap-6 card py-14 px-10">
        <div className="  flex flex-row gap-2 justify-center">
          <Image src={'/logo.svg'} alt="logo" height={32} width={38}></Image>
          <h2 className=" text-primary-100">MockMate</h2>
        </div>
        <h3>Practice job interview with AI</h3>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full space-y-6 mt-4 form">
        {!isSignin &&
        <FormField 
        control={form.control}
        name="name"
        label="Name"
        placeholder="Your Name"
        ></FormField>}
        <FormField 
        control={form.control}
        name="email"
        label="Email"
        placeholder="Your Email Address"
        type="email"
        ></FormField>
        <FormField 
        control={form.control}
        name="password"
        label="Password"
        placeholder="Enter your Password"
        type="password"
        ></FormField>
        <Button className="btn" type="submit">{isSignin ? `Sign in`: `Create an Account` }</Button>
      </form>
    </Form>
    <p className="text-center">
      {isSignin ? 'No account yet?':'Have an account already'}
      <Link href={!isSignin ? `/signin`: `/signup`} className=" font-bold text-user-primary ml-1">
      {!isSignin ? "Signin" : "Signup"}
      </Link>
    </p>
    </div>
</div>

  )
}

export default Authpage