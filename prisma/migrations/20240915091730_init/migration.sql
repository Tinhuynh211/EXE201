-- CreateTable
CREATE TABLE "CV" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cv" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "CV_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CV_profileId_key" ON "CV"("profileId");

-- AddForeignKey
ALTER TABLE "CV" ADD CONSTRAINT "CV_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;
