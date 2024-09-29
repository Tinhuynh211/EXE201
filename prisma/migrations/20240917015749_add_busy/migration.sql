-- CreateTable
CREATE TABLE "BusyDay" (
    "id" TEXT NOT NULL,
    "dateBusy" TIMESTAMP(3) NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "BusyDay_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BusyDay" ADD CONSTRAINT "BusyDay_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
