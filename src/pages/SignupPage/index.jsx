import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useSignupMutation } from "../../services/auth";

import { Link, useNavigate } from "react-router-dom";

const formSchema = z
  .object({
    username: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(40, {
        message: "Username must be at most 40 characters.",
      })
      .regex(/^[A-Za-z ]+$/, {
        message: "Username must contain only letters and spaces.",
      }),
    fullName: z
      .string()
      .min(2, {
        message: "Full Name must be at least 2 characters.",
      })
      .max(40, {
        message: "Full Name must be at most 40 characters.",
      })
      .regex(/^[A-Za-z ]+$/, {
        message: "Full Name must contain only letters and spaces.",
      }),
    emailId: z.string().email({
      message: "Invalid email format.",
    }),
    password: z
      .string()
      .min(10, {
        message: "Password must have min of 10 characters",
      })
      .max(100, {
        message: "Password must be at most 100 characters.",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path of error
  });

const SignupPage = () => {
  const navigate = useNavigate();
  const [signup, { isLoading, isSuccess }] = useSignupMutation();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      fullName: "",
      emailId: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    debugger;

    try {
      const response = await signup(values);
      if (!response.error && response.data.status === 201) {
        navigate("/add-workout");
        sessionStorage.setItem("profile", JSON.stringify(response.data.data));
        toast({
          title: response.data.message,
          description: "Welcome to gym progress tracker!",
        });
      } else {
        toast({
          title: response.error.data.message,
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description: "We will check what went wrong",
      });
    }
  }
  return (
    <div className="bg-login h-screen bg-cover">
      <div className="signup grid grid-cols-1 md:grid-cols-2  h-full">
        <div className="hidden md:block"></div>
        <div className="bg-background opacity-[0.9]  h-full">
          <div className="flex h-full p-5">
            <section className="w-full ">
              <h3 className="text-3xl text-blue-600 ">Gym Progress Tracker</h3>
              <h3 className="text-3xl text-blue-600 mt-3 mb-5 ">Signup</h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="">Full Name</FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="off"
                            placeholder="Enter Full Name"
                            {...field}
                            tabIndex="0"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="">Username</FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="off"
                            placeholder="Enter Username"
                            {...field}
                            tabIndex="1"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="emailId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="">Email Id</FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="off"
                            placeholder="Enter Email Id"
                            {...field}
                            tabIndex="2"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="">Password</FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="off"
                            placeholder="Enter Password"
                            type="password"
                            {...field}
                            customKey={0}
                            tabIndex="3"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="">Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            autoComplete="off"
                            placeholder="Confirm Password"
                            tabIndex="4"
                            {...field}
                            customKey={1}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button disabled={isLoading} type="submit">
                    Submit
                  </Button>
                </form>
              </Form>
              <div className="mt-5">
                <p>
                  Already have an account?{" "}
                  <Link className="text-blue-500" to="/login">
                    Login Here
                  </Link>{" "}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
