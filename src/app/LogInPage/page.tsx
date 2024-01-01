import { SignIn } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex justify-center py-12">
      <SignIn />
    </div>
  );
};

export default SignUpPage;
