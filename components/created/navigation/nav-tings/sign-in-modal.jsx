/**
 * sign-in-modal.jsx
 */

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Loader2, Mail } from "lucide-react";
import { FaGoogle } from "react-icons/fa6";
import UserDropdown from "./user-dropdown";

const SignInModal = ({ session }) => {
  const router = useRouter();

  const [credentialsClicked, setCredentialsClicked] = useState(false);
  const [googleClicked, setGoogleClicked] = useState(false);
  const [error, setError] = useState({ message: "", is: false });

  const [showRegister, setShowRegister] = useState(false);

  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value
    }));
  };

  useEffect(() => {
    if (error.is) {
      setTimeout(() => {
        setError({ ...error, is: false });
      }, 3000);
    }
  }, [error]);

  const submitCredentials = async (e) => {
    e.preventDefault();

    if (!formValues.email) {
      setError({ message: "Email is required!", is: true });
      return;
    } else if (!/^\S+@\S+\.\S+$/.test(formValues.email)) {
      setError({ message: "Invalid email format!", is: true });
      return;
    }

    if (!formValues.password) {
      setError({ message: "Password is required!", is: true });
      return;
    } else if (formValues.password.length < 5) {
      setError({
        message: "Password must be at least 5 characters long!",
        is: true
      });
      return;
    }

    setCredentialsClicked(true);

    try {
      // Try to sign in with credentials here...
      const result = await signIn("credentials", {
        ...formValues,
        redirect: false // Set redirect to false to prevent redirection
      });

      if (result && result.error === "Error: Email already in use by Signing in with Google") {
        setShowRegister(true);
        setError({
          message: "Error: Email already in use by Signing in with Google",
          is: true
        });
      } else if (result && result.error === "User not in db") {
        setError({
          message: "User not in db",
          is: true
        });
      }

      if (!result.error) {
        router.refresh();
      } else {
        setError({ message: result.error, is: true });
        setCredentialsClicked(false); // Re-enable the sign-in button
        setGoogleClicked(false); // Re-enable the Google sign-in button
      }
    } catch (error) {
      setCredentialsClicked(false); // Re-enable the sign-in button
      setGoogleClicked(false); // Re-enable the Google sign-in button
    }
  };

  return (
    <>
      {session?.user ? (
        <UserDropdown session={session} />
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-28">
              Sign In
            </Button>
          </DialogTrigger>
          {!showRegister ? (
            <DialogContent className=" px-7 py-10 sm:max-w-[425px]">
              <div className="absolute left-0 top-0 h-[30%] w-full rounded-t-2xl bg-zinc-200 dark:bg-zinc-700 "></div>
              <DialogHeader className="z-10 gap-3 px-5">
                <DialogTitle className="w-44 text-center text-2xl font-bold">Sign In</DialogTitle>
                <DialogDescription className="text-center">{` Make changes to your profile here. Click save when you're done.`}</DialogDescription>
              </DialogHeader>
              <form
                className="grid gap-5 px-5 pb-4 pt-16"
                onSubmit={(event) => submitCredentials(event)} // Use onSubmit on the form
              >
                <div className="grid grid-cols-4 items-center gap-3 ">
                  {error.is ? <div className="-top-8 col-span-4 w-full text-center text-sm text-red-400">{error.message}</div> : null}
                  <Label htmlFor="email" className="col-span-4 text-left">
                    Email
                  </Label>
                  <Input id="email" type="email" name="email" onChange={handleChange} className="col-span-4 border-gray-500" />
                </div>
                <div className="grid grid-cols-4 items-center gap-3">
                  <Label htmlFor="password" className="col-span-4 text-left">
                    Password
                  </Label>
                  <Input id="password" type="password" name="password" onChange={handleChange} className="col-span-4 border-gray-500" />
                </div>
                <div className="flex w-full flex-col gap-5 pt-5">
                  <Button
                    type="submit" // Use type="submit" to trigger form submission
                    disabled={credentialsClicked}
                    className="mx-auto w-full border border-zinc-500 px-10 py-5"
                  >
                    {credentialsClicked ? (
                      <div className="flex items-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signin-in...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Mail className="mr-3 h-4 w-4" />
                        <span>Sign In with Email</span>
                      </div>
                    )}
                  </Button>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                  <Button type="button" variant="secondary" disabled={credentialsClicked} className="mx-auto w-full border border-zinc-500 px-10 py-5" onClick={() => signIn("google")}>
                    {googleClicked ? (
                      <div className="flex items-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signin-in...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <FaGoogle />
                        Sign In with Google
                      </div>
                    )}
                  </Button>
                </div>
              </form>
              <DialogFooter className="flex w-full sm:flex-col">
                <div className="mx-auto text-center text-xs ">Multumim ca a-ti ales Service Auto-Nel pentru Masina Dumeavoastra</div>
              </DialogFooter>
            </DialogContent>
          ) : null}
        </Dialog>
      )}
    </>
  );
};

export default SignInModal;

// /**
//  * sign-in-modal.jsx
//  */

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";

// import { useEffect, useState } from "react";
// import { signIn } from "next-auth/react";
// import { Loader2, Mail } from "lucide-react";
// import Link from "next/link";
// import { FaGoogle } from "react-icons/fa6";

// const SignInModal = () => {
//   const [credentialsClicked, setCredentialsClicked] = useState(false);
//   const [googleClicked, setGoogleClicked] = useState(false);
//   const [error, setError] = useState({ message: "", is: false });

//   const [showRegister, setShowRegister] = useState(false);

//   const [formValues, setFormValues] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormValues((prevFormValues) => ({
//       ...prevFormValues,
//       [name]: value,
//     }));
//   };

//   useEffect(() => {
//     if (error.is) {
//       setTimeout(() => {
//         setError({ ...error, is: false });
//       }, 3000);
//     }
//   }, [error]);

//   const submitCredentials = async (e) => {
//     e.preventDefault();
//     console.log("Form Values", formValues);

//     if (!formValues.email) {
//       setError({ message: "Email is required!", is: true });
//       return;
//     } else if (!/^\S+@\S+\.\S+$/.test(formValues.email)) {
//       setError({ message: "Invalid email format!", is: true });
//       return;
//     }

//     if (!formValues.password) {
//       setError({ message: "Password is required!", is: true });
//       return;
//     } else if (formValues.password.length < 5) {
//       setError({
//         message: "Password must be at least 5 characters long!",
//         is: true,
//       });
//       return;
//     }

//     setCredentialsClicked(true);

//     try {
//       // Try to sign in with credentials here...
//       const result = await signIn("credentials", {
//         ...formValues,
//         redirect: false, // Set redirect to false to prevent redirection
//       });

//       if (
//         result &&
//         result.error === "Error: Email already in use by Signing in with Google"
//       ) {
//         setShowRegister(true);
//         setError({
//           message: "Error: Email already in use by Signing in with Google",
//           is: true,
//         });
//       } else if (result && result.error === "User not in db") {
//         setError({
//           message: "User not in db",
//           is: true,
//         });
//       }

//       console.log(result);

//       if (!result.error) {
//         router.refresh();
//       } else {
//         setError({ message: result.error, is: true });
//         setCredentialsClicked(false); // Re-enable the sign-in button
//         setGoogleClicked(false); // Re-enable the Google sign-in button
//       }
//     } catch (error) {
//       setCredentialsClicked(false); // Re-enable the sign-in button
//       setGoogleClicked(false); // Re-enable the Google sign-in button
//     }
//   };

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="outline">Sign In</Button>
//       </DialogTrigger>
//       {!showRegister ? (
//         <DialogContent className=" sm:max-w-[425px] py-10 px-7">
//           <div className="absolute top-0 left-0 w-full h-[30%] bg-zinc-200 dark:bg-zinc-700 rounded-t-2xl "></div>
//           <DialogHeader className="z-10 gap-3 px-5">
//             <DialogTitle className="text-2xl font-bold text-center">
//               Sign In
//             </DialogTitle>
//             <DialogDescription className="text-center">
//               {` Make changes to your profile here. Click save when you're done.`}
//             </DialogDescription>
//           </DialogHeader>
//           <form className="grid gap-5 px-5 pt-16 pb-4">
//             <div className="grid items-center grid-cols-4 gap-3 ">
//               {error.is ? (
//                 <div className="w-full col-span-4 text-sm text-center text-red-400 -top-8">
//                   {error.message}
//                 </div>
//               ) : null}
//               <Label htmlFor="email" className="col-span-4 text-left">
//                 Email
//               </Label>
//               <Input
//                 id="email"
//                 type="email"
//                 name="email"
//                 onChange={handleChange}
//                 className="col-span-4 border-gray-500"
//               />
//             </div>
//             <div className="grid items-center grid-cols-4 gap-3">
//               <Label htmlFor="password" className="col-span-4 text-left">
//                 Password
//               </Label>
//               <Input
//                 id="password"
//                 type="password"
//                 name="password"
//                 onChange={handleChange}
//                 className="col-span-4 border-gray-500"
//               />
//             </div>
//             <div className="flex flex-col w-full gap-5 pt-5">
//               <Button
//                 type="submit"
//                 // variant="secondary"
//                 disabled={googleClicked}
//                 className="w-full px-10 py-5 mx-auto border border-zinc-500"
//                 onSubmit={(event) => submitCredentials(event)}
//               >
//                 {credentialsClicked ? (
//                   <div className="flex items-center">
//                     <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                     Signin-in...
//                   </div>
//                 ) : (
//                   <div className="flex items-center justify-center">
//                     <Mail className="w-4 h-4 mr-3" />
//                     <span>Sign In with Email</span>
//                   </div>
//                 )}
//               </Button>
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <span className="w-full border-t" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                   <span className="px-2 bg-background text-muted-foreground">
//                     Or continue with
//                   </span>
//                 </div>
//               </div>
//               <Button
//                 type="button"
//                 variant="secondary"
//                 disabled={credentialsClicked}
//                 className="w-full px-10 py-5 mx-auto border border-zinc-500"
//                 onClick={() => signIn("google")}
//               >
//                 {googleClicked ? (
//                   <div className="flex items-center">
//                     <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                     Signin-in...
//                   </div>
//                 ) : (
//                   <div className="flex items-center justify-center gap-3">
//                     <FaGoogle />
//                     Sign In with Google
//                   </div>
//                 )}
//               </Button>
//             </div>
//           </form>
//           <DialogFooter className="flex w-full sm:flex-col">
//             <div className="mx-auto text-xs ">
//               {`Don't have an account? `}
//               <Link href={"/register"} className="underline">
//                 Sign-Up!
//               </Link>
//             </div>
//           </DialogFooter>
//         </DialogContent>
//       ) : (
//         <DialogContent className=" sm:max-w-[425px] py-10 ">
//           <div className="absolute top-0 left-0 w-full h-[30%] bg-zinc-200 dark:bg-zinc-700 rounded-t-2xl "></div>
//           <DialogHeader className="z-10 gap-3 px-5">
//             <DialogTitle className="text-2xl font-bold text-center">
//               Register
//             </DialogTitle>
//             <DialogDescription className="text-center">
//               {` Make changes to your profile here. Click save when you're done.`}
//             </DialogDescription>
//           </DialogHeader>
//           <div className="grid gap-5 px-5 pt-16 pb-4">
//             <div className="grid items-center grid-cols-4 gap-3 ">
//               {error.is ? (
//                 <div className="w-full col-span-4 text-sm text-center text-red-400 -top-8">
//                   {error.message}
//                 </div>
//               ) : null}
//               <Label htmlFor="email" className="col-span-4 text-left">
//                 Email
//               </Label>
//               <Input
//                 id="email"
//                 type="email"
//                 name="email"
//                 onChange={handleChange}
//                 className="col-span-4 border-gray-500"
//               />
//             </div>
//             <div className="grid items-center grid-cols-4 gap-3">
//               <Label htmlFor="password" className="col-span-4 text-left">
//                 Password
//               </Label>
//               <Input
//                 id="password"
//                 type="password"
//                 name="password"
//                 onChange={handleChange}
//                 className="col-span-4 border-gray-500"
//               />
//             </div>
//             <div className="flex flex-col w-full gap-5 pt-5">
//               <Button
//                 type="button"
//                 variant="secondary"
//                 disabled="true"
//                 className="w-full px-10 py-5 mx-auto border border-zinc-500"
//                 onClick={(event) => submitCredentials(event)}
//               >
//                 {credentialsClicked ? (
//                   <div className="flex items-center">
//                     <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                     Signin-in...
//                   </div>
//                 ) : (
//                   <div className="flex items-center justify-center">
//                     <Mail className="w-4 h-4 mr-3" />
//                     <span>Sign In with Email</span>
//                   </div>
//                 )}
//               </Button>
//               <Button
//                 type="button"
//                 variant="secondary"
//                 className="w-full px-10 py-5 mx-auto border border-zinc-500"
//                 onClick={() => {
//                   signIn("google");
//                   setGoogleClicked(true); //Doesn't really have the time to disable the credentials button, but just in case
//                 }}
//               >
//                 {googleClicked ? (
//                   <div className="flex items-center">
//                     <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                     Signin-in...
//                   </div>
//                 ) : (
//                   <div className="flex items-center justify-center gap-3">
//                     <FaGoogle />
//                     Sign In with Google
//                   </div>
//                 )}
//               </Button>
//             </div>
//           </div>
//           <DialogFooter className="flex w-full sm:flex-col">
//             <div className="mx-auto text-xs ">
//               {`Don't have an account? `}
//               <Link href={"/register"} className="underline">
//                 Sign-Up!
//               </Link>
//             </div>
//           </DialogFooter>
//         </DialogContent>
//       )}
//     </Dialog>
//   );
// };

// export default SignInModal;
