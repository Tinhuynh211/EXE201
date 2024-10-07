-- CreateEnum
CREATE TYPE "BookingType" AS ENUM ('HOURLY', 'DAILY', 'MONTHLY');

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isBabySitter" BOOLEAN NOT NULL DEFAULT false,
    "detailProfileId" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetailProfile" (
    "id" TEXT NOT NULL,
    "citizenId" TEXT NOT NULL,
    "homeTown" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "dateofBirth" TEXT NOT NULL,
    "residence" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,

    CONSTRAINT "DetailProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusyDay" (
    "id" TEXT NOT NULL,
    "dateBusy" TIMESTAMP(3) NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "BusyDay_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "paymentStatus" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "babySitterId" TEXT,
    "amount" TEXT NOT NULL,
    "startDateTime" TIMESTAMP(3),
    "endDateTime" TIMESTAMP(3),
    "type" "BookingType" NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_clerkId_key" ON "Profile"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_detailProfileId_key" ON "Profile"("detailProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "CV_profileId_key" ON "CV"("profileId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_detailProfileId_fkey" FOREIGN KEY ("detailProfileId") REFERENCES "DetailProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusyDay" ADD CONSTRAINT "BusyDay_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CV" ADD CONSTRAINT "CV_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_babySitterId_fkey" FOREIGN KEY ("babySitterId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
