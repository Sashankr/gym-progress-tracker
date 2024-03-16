import Navbar from "../components/Navbar";
import { useLazyGetAllWorkoutsQuery } from "../services/workout";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, parse } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import {
  RESET_WORKOUT_DETAILS,
  SET_WORKOUT_DETAILS,
  UPDATE_WORKOUT_DETAILS,
} from "../redux/features/workoutDetailsSlice";
import { UPDATE_WEIGHT } from "../redux/features/weightTrackerSlice";

const FormSchema = z.object({
  workoutDate: z.date({
    required_error: "Date of workout is required.",
  }),
});

const MyWorkouts = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [getWorkoutData, { isLoading, isSuccess, data }] =
    useLazyGetAllWorkoutsQuery();

  const dispatch = useDispatch();

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data) {
    debugger;
    dispatch(RESET_WORKOUT_DETAILS());

    const formattedDate = format(data.workoutDate, "dd-MM-yyyy", {
      timeZone: "Asia/Kolkata",
    });

    try {
      const response = await getWorkoutData({
        page: 1,
        limit: 10,
        date: formattedDate,
      });
      if (response.data.status === 200) {
        const workoutData = response?.data?.data[0]?.workoutDetails?.[0] ?? [];

        dispatch(SET_WORKOUT_DETAILS(workoutData));
        dispatch(UPDATE_WEIGHT(response?.data?.data[0]?.bodyWeight));
        navigate("/workout-info");
      } else {
        dispatch(RESET_WORKOUT_DETAILS());
      }
    } catch (err) {
      console.log(err);
      dispatch(RESET_WORKOUT_DETAILS());
    }
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-medium text-slate-800">My Workouts</h2>
        <div className="mt-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="workoutDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Select Workout Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                          fromYear={2024}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      Workout Details are fetched with this date.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
        {isSuccess ? (
          <div className="mt-4">
            <Alert>
              <AlertTitle>Message</AlertTitle>
              <AlertDescription>
                {data.message}, try with a different date
              </AlertDescription>
            </Alert>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default MyWorkouts;
