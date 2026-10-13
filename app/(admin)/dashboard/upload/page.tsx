import DashboardHeader from "@/components/custom/dashboard-header";
import DashboardPageHeading from "@/components/custom/dashboard-page-heading";
import UploadDocumentComp from "@/features/upload/components/upload-document";

const UploadDocuments = () => {
  return (
    <div>
      <DashboardHeader directory="workspace" page="upload document" />
      <div className="p-6">
        <DashboardPageHeading
          heading="Add Documents"
          description="Prepare sources for your team’s searchable knowledge base."
        />
        <div className="">
          <UploadDocumentComp />
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
