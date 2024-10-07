"use server";

import {
  imageSchema,
  profileSchema,
  propertySchema,
  validateWithZodSchema,
  createReviewSchema,
  careerSchema,
  // pdfSchema,
} from "./schemas";
import db from "./db";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { uploadImage } from "./supabase";
import { calculateTotals } from "./calculateTotals";
import { formatDate } from "./format";
import { UUID } from "crypto";
import { useOrganizationList } from "@clerk/nextjs";
const getAuthUser = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("You must be logged in to access this route");
    }
    if (!user.privateMetadata.hasProfile) {
      redirect("/profile/create");
    }
    return user;
  } catch (error) {
    console.error(error);
    // redirect("/login"); // Redirect to login page
  }
};

const getAdminUser = async () => {
  const user = await getAuthUser();
  if (!user) {
    throw new Error("User is not authenticated");
  }
  if (user.id !== process.env.ADMIN_USER_ID) redirect("/");
  return user;
};

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please login to create a profile");

    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(profileSchema, rawData);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validatedFields,
      },
    });
    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  redirect("/");
};

export const fetchProfileImage = async () => {
  const user = await currentUser();
  if (!user) return null;

  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
    },
  });

  return profile?.profileImage;
};

export const fetchProfile = async () => {
  const user = await getAuthUser();
  if (!user) {
    throw new Error("User is not authenticated");
  }
  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  });
  if (!profile) redirect("/profile/create");
  return profile;
};

export const updateProfileAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(profileSchema, rawData);
    if (!user) {
      throw new Error("User is not authenticated");
    }
    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: validatedFields,
    });

    revalidatePath("/profile");
    return { message: "Profile updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};

export const updateProfileImageAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const image = formData.get("image") as File;
    const validatedFields = validateWithZodSchema(imageSchema, { image });
    const fullPath = await uploadImage(validatedFields.image);
    if (!user) {
      throw new Error("User is not authenticated");
    }
    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: {
        profileImage: fullPath,
      },
    });
    revalidatePath("/profile");
    return { message: "Profile image updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchBabysitter = async (dateRange: {
  startDate: Date | null;
  endDate: Date | null;
}): Promise<{
  message: string;
  babysitters: any[];
}> => {
  try {
    const babysitters = await db.profile.findMany({
      where: {
        isBabySitter: true,
      },
    });
    const busyDates = await db.busyDay.findMany({});
    const availableBabysitters = babysitters.filter((babysitter) => {
      const isAvailable = !busyDates.some((busyDate) => {
        return (
          busyDate.profileId === babysitter.id &&
          dateRange.startDate &&
          dateRange.endDate &&
          ((dateRange.startDate <= busyDate.dateBusy &&
            dateRange.endDate >= busyDate.dateBusy) ||
            (dateRange.startDate >= busyDate.dateBusy &&
              dateRange.startDate <= busyDate.dateBusy) ||
            (dateRange.endDate >= busyDate.dateBusy &&
              dateRange.endDate <= busyDate.dateBusy))
        );
      });

      return isAvailable;
    });
    return {
      message: "Babysitters fetched successfully",
      babysitters: availableBabysitters,
    };
  } catch (error) {
    console.error("Error fetching babysitters:", error);
    return { message: "Error fetching babysitters", babysitters: [] };
  }
};

const handleDateChange = async (dateRange: {
  startDate: Date | null;
  endDate: Date | null;
}) => {
  console.log("Selected date range:", dateRange);
  const result = await fetchBabysitter(dateRange);
};


export const createCareerAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  if (!user) {
    throw new Error("User is not authenticated");
  }
  try {
    const existingUser = await db.profile.findUnique({
      where: { clerkId: user.id },
    });
    if (!existingUser) {
      throw new Error("User does not exist.");
    }
    const rawData = Object.fromEntries(formData);
    const file = formData.get("file") as File;
    console.log(rawData);

    const validatedFields = validateWithZodSchema(careerSchema, rawData);
    const validatedFile = { pdf: file };
    const fullPath = await uploadImage(validatedFile.pdf);

    await db.cV.create({
      data: {
        ...validatedFields,
        cv: fullPath,
        profileId: user.id,
        phone: validatedFields.phone,
      },
    });
  } catch (error) {
    console.error(error);
    return renderError("An error occurred while creating the CV.");
  }
  redirect("/");
};

export const createBusyDates = async (dates: { start: Date }[]) => {
  try {
    const { userId } = auth();
    if (userId) {
      // Verify that the profileId exists in the referenced table
      const profileExists = await db.profile.findUnique({
        where: { clerkId: userId },
      });
      console.log(profileExists);

      if (!profileExists) {
        console.error("Profile ID does not exist");
        // Handle the error appropriately, e.g., show a notification to the user
        return;
      }

      for (const date of dates) {
        await db.busyDay.create({
          data: {
            profileId: profileExists.id,
            dateBusy: date.start,
          },
        });
        console.log(date);
      }
      console.log("Dates inserted successfully");
    } else {
      console.error("User ID is null");
      // Handle the error appropriately, e.g., show a notification to the user
    }
  } catch (error) {
    console.error("Error inserting dates:", error);
  }
};





















export const fetchCV = async () => {
  const cVs = await db.cV.findMany({
    include: {
      profile: true,
    },
  });
  return cVs;
};









export const fetchChartsData = async () => {
  await getAdminUser();
  const date = new Date();
  date.setMonth(date.getMonth() - 6);
  const sixMonthsAgo = date;

  const bookings = await db.booking.findMany({
    where: {
      paymentStatus: true,
      createdAt: {
        gte: sixMonthsAgo,
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  const bookingsPerMonth = bookings.reduce((total, current) => {
    const date = formatDate(current.createdAt, true);
    const existingEntry = total.find((entry) => entry.date === date);
    if (existingEntry) {
      existingEntry.count += 1;
    } else {
      total.push({ date, count: 1 });
    }
    return total;
  }, [] as Array<{ date: string; count: number }>);
  return bookingsPerMonth;
};



export const sendContactForm = async (data: any) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });
