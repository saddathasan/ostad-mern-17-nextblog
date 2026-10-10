import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
	return (
		<div className="flex w-full h-20 bg-amber-100 items-center px-10 dev-border-2">
			<div className="flex w-full items-center justify-between">
				<Link
					href="/"
					className="font-bold text-2xl">
					The Next Blog
				</Link>

				<div className="flex gap-4 items-center">
					<Field orientation="horizontal">
						<Input
							type="search"
							placeholder="Search..."
						/>
						<Button className="bg-amber-500 hover:bg-amber-600">
							Search
						</Button>
					</Field>

					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
