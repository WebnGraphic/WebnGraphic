import { auth, signIn } from "@/auth";
import { SignOut } from "@/components/manual/sign-out";
import Image from "next/image";

export default async function SignUp() {
  const session = await auth();
  console.log(session);
  return (
    <section className="bg-[#16152f] h-[100vh] flex justify-center items-center">
      <form
        className="group beforeForm"
        action={async () => {
          "use server";
          await signIn("google", { callbackUrl: "/admin" });
        }}
      >
        <button
          type="submit"
          className="flex z-10 gap-5 cursor-pointer overflow-hidden border-2 group-hover:shadow-lg group-hover:shadow-[#32306d] border-gray-400 p-4 relative rounded-full text-white font-bold before:content-[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-linear-115 before:from-[#4f4cad] before:to-[#64E9FF] before:transition-all before:duration-500 before:-z-1 clip-path-custom
          "
          title="Google"
        >
          <Image src={"/google.png"} alt={"Google"} width={25} height={20} />
          <span>Countinue With Google</span>
        </button>
      </form>
      <SignOut />
    </section>
  );
}
