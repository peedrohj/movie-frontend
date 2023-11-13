import { UserCircle2 } from "lucide-react";
import Link from "next/link";

type ConditionalAvatarPropos = {
  isLogged: boolean;
};

function ConditionalAvatar({ isLogged }: ConditionalAvatarPropos) {
  if (isLogged) {
    return (
      <Link href="/auth/profile">
        <UserCircle2 />
      </Link>
    );
  }
  return (
    <Link href="/auth/signin">
      <UserCircle2 />
    </Link>
  );
}

export default ConditionalAvatar;
