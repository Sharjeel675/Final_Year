import React from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
 

const Signup = () => {
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Login/Signup</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="flex justify-center text-4xl">Login</DialogTitle>
       
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            UserName
          </Label>
          <Input id="name" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Password
          </Label>
          <Input id="username" type="password" className="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Login</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  );
};

export default Signup;
