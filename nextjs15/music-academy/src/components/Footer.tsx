import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="h-70 p-10 flex gap-5">
                <section className="w-1/4">
                    <h1 className="text-xl mb-5">About Us</h1>
                    <p className="text-slate-300">
                        Music School is a premier institution dedicated to
                        teaching the art and science of music. We nurture talent
                        from the ground up, fostering a vibrant community of
                        musicians.
                    </p>
                </section>
                <section className="flex flex-col gap-1 w-1/4">
                    <h1 className="text-xl mb-5">Quick Links</h1>
                    <Link className="text-slate-300" href="/home">
                        Home
                    </Link>
                    <Link className="text-slate-300" href="/about">
                        About
                    </Link>
                    <Link className="text-slate-300" href="/courses">
                        Courses
                    </Link>
                    <Link className="text-slate-300" href="/contact">
                        Contact
                    </Link>
                </section>
                <section className="flex flex-col gap-1 w-1/4">
                    <h1 className="text-xl mb-5">Quick Links</h1>
                    <Link className="text-slate-300" href="/facebook">
                        Facebook
                    </Link>
                    <Link className="text-slate-300" href="/instagram">
                        Instagram
                    </Link>
                    <Link className="text-slate-300" href="/linkedin">
                        LinkedIn
                    </Link>
                    <Link className="text-slate-300" href="/x">
                        X
                    </Link>
                </section>
                <section className="w-1/4">
                    <h1 className="text-xl mb-5">Contact Us</h1>
                    <p className="text-slate-300">
                        New Delhi, India <br />
                        Delhi 10001 <br />
                        Email: info@musicschool.com <br />
                        Phone: (123) 456-7890
                    </p>
                </section>
            </div>
            <p className="text-center pb-5 text-xs text-slate-400">
                &copy; 2024 Music School. All rights reserved.
            </p>
        </>
    );
}
