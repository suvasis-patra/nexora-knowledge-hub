import { FileUp, Plus } from "lucide-react";
import { Button } from "../ui/button";

const DashboardPageHeading = ({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="bg-cyan-500 w-8 h-0.5"></span>
        <p className="uppercase text-cyan-500 font-semibold font-sans text-sm">
          knowledge operation
        </p>
      </div>
      <div className="mt-3">
        <h3 className="text-3xl font-semibold text-black">{heading}</h3>
        <div className="flex w-full items-center justify-between">
          <p className="text-muted-foreground text-sm">{description}</p>
          <div className="flex items-center gap-5">
            <Button variant={"outline"} size={"sm"}>
              <FileUp />
              <span>Export report</span>
            </Button>
            <Button size={"sm"} className={"bg-primary"}>
              <Plus />
              <span>Add documents</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPageHeading;
