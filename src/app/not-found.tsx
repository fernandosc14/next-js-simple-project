import Link from "next/link";

export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-9 text-6xl">404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>

            <Link href="/">
                BACK TO HOME
            </Link>
        </div>
    );
}