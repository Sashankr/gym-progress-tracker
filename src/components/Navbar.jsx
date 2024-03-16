import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user: profileDetails } = JSON.parse(
    sessionStorage.getItem("profile")
  );
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 container mx-auto">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6">
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              to="#"
            >
              <span className="font-medium p-3 rounded-lg bg-slate-700 text-white transition hover:bg-slate-600">
                Gym Progress Tracker 💪🏼
              </span>
            </Link>
            <p className=" flex w-full items-center  text-lg font-regular">
              <span className="font-semibold underline text-slate-800">
                {" "}
                {profileDetails.username}
              </span>
            </p>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              to="#"
            >
              Home
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              to="#"
            >
              About
            </Link>

            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              to="/login"
              onClick={() => {
                sessionStorage.clear();
              }}
            >
              Logout
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex" to="#">
        <span className="font-medium p-3 rounded-lg bg-slate-700 text-white transition hover:bg-slate-600">
          Gym Progress Tracker 💪🏼
        </span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <p className=" flex w-full items-center  text-lg font-semibold text-slate-800 underline">
          {profileDetails.username}
        </p>
        <Link
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          to="#"
        >
          Home
        </Link>
        <Link
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          to="#"
        >
          About
        </Link>

        <Link
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          to="/login"
          onClick={() => {
            sessionStorage.clear();
          }}
        >
          Logout
        </Link>
      </nav>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
