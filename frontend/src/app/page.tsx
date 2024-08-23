import { ChartComponent } from "./components/chart_temp";
import { Footer } from "./components/footer";
import { RealTimeClock } from "./components/realTimeClock";
import { AvatarDemo } from "./components/avatar";
import { ChartPressComponent } from "./components/chart_press";
import { MotorStatusIcon } from "./components/compress_analitc";

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-y-auto scroll-invisivel relative">
      <div className="flex-1 flex">
        <main className="flex-1 flex flex-col p-6 bg-background">
          <header className="text-left p-4 rounded-md mb-6 flex justify-between">
            <h1 className="text-4xl font-bold uppercase text-foreground">
              Monitoramento de Compressor
            </h1>
            <div className="flex gap-3">
              <AvatarDemo />
              <RealTimeClock />
            </div>
          </header>
          <div>
            <div className="container mx-auto p-4 bg-background rounded-lg m-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-full overflow-y-auto shadow-lg">
                <ChartComponent />
                <ChartPressComponent />
              </div>
              <div className="flex justify-center items-center mt-4">
                <MotorStatusIcon />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
