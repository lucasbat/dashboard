import { CircleDollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
            Últimos Clientes
          </CardTitle>
          <CircleDollarSign className="w-4 h-4 ml-auto" />
        </div>
        <CardDescription>Novos clintes nas últimas 24 horas</CardDescription>
      </CardHeader>
      
      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://avatars.githubusercontent.com/u/35240152?v=4" />
            <AvatarFallback>LB</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Lucas Batista</p>
            <span className="text-[12px] sm:text-sm text-gray-400">engcompbatista@gmail.com</span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://s2-oglobo.glbimg.com/o0jzNXnhFMtLxBHQP-zqbJmFqRc=/0x0:542x924/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/v/A/3ntcf1QBWvjt8IOr8iSg/memes.png" />
            <AvatarFallback>LB</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Sean O'Connor</p>
            <span className="text-[12px] sm:text-sm text-gray-400">sean.oconnor@example.com</span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxAj3021hxWZAKJ_ZKvCPM1yJ9crMGOwAsUA&s" />
            <AvatarFallback>LB</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Liam O'Reilly</p>
            <span className="text-[12px] sm:text-sm text-gray-400">liam.oreilly@example.com</span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}
