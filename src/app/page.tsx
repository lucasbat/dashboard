import { ChartOverview } from "@/components/chart";
import { Sales } from "@/components/sales";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBarDecreasing, CircleDollarSign, DollarSign, DollarSignIcon, Percent, University, Users } from "lucide-react";

const Home = () => {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Total Vendas
              </CardTitle>
                  <DollarSign className="w-4 h-4 ml-auto" />
            </div>
            <CardDescription>
              Total Vendas em 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent className="text-base sm:text-lg font-bold">
            R$ 1.000,00
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Novos Clientes
              </CardTitle>
                  <Users className="w-4 h-4 ml-auto" />
            </div>
            <CardDescription>
              Novos Clientes em 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent className="text-base sm:text-lg font-bold">
            234
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Total Contatos
              </CardTitle>
                  <ChartBarDecreasing className="w-4 h-4 ml-auto" />
            </div>
            <CardDescription>
              Total Contatos em 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent className="text-base sm:text-lg font-bold">
            1525
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Vendas Efetivadas
              </CardTitle>
                  <Percent className="w-4 h-4 ml-auto" />
            </div>
            <CardDescription>
            Vendas Efetivadas em 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent className="text-base sm:text-lg font-bold">
            655
          </CardContent>
        </Card>
      </section>
     

     <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Sales />
     </section>
    </main>
  );
};

export default Home;
