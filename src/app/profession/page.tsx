import Link from "next/link";

const Profession = () => {
  return (
    <section className="flex justify-around   h-screen  items-center">
      <Link href="/students">
        {" "}
        <div className="w-44 h-44 bg-white border-2 flex items-center justify-center">
          students
        </div>
      </Link>
      <Link href="/supervisor">
        {" "}
        <div className="w-44 h-44 bg-white border-2 flex items-center justify-center">
          supervisor
        </div>
      </Link>
      <Link href="/cordinator">
        {" "}
        <div className="w-44 h-44 bg-white border-2 flex items-center justify-center">
          cordinator
        </div>
      </Link>
    </section>
  );
};

export default Profession;
