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
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/auth";

const formSchema = z.object({
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
});

const LoginPage = () => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailId: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    debugger;

    try {
      const response = await login(values);
      if (response.error) {
        return toast({
          title: response.error.data.message,
        });
      }
      if (response.data.status === 200) {
        navigate("/add-workout");
        localStorage.setItem("profile", JSON.stringify(response.data.data));
        toast({
          title: response.data.message,
          description: "Welcome to gym progress tracker!",
        });
      } else {
        toast({
          title: response.data.message,
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
      <div className="login grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="hidden md:block"></div>
        <div className="bg-slate-900 opacity-[0.9] text-white h-full">
          <div className="flex h-full p-5">
            <section className="w-full ">
              <h3 className="text-3xl text-blue-200 ">Gym Progress Tracker</h3>
              <h3 className="text-3xl text-blue-200 mt-3 mb-5 ">Login</h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="emailId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="">Email Id</FormLabel>
                        <FormControl>
                          <Input
                            className="text-slate-900"
                            autoComplete="off"
                            placeholder="Enter Email Id"
                            {...field}
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
                            className="text-slate-900"
                            placeholder="Enter Password"
                            type="password"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button disabled={isLoading} type="submit">
                    Login
                  </Button>
                </form>
              </Form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
