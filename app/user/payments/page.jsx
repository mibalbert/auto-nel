/**
 * payments/page.jsx
 */

import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

const Payments = async () => {
  const session = await getServerSession();

  try {
    const data = await prisma.user.findMany({
      where: {
        email: session.user.email
      },
      select: {
        payments: true
      }
    });

    if (!data || !data.payments || data.payments.length === 0) {
      // Handle the case where no quote was found
      return (
        <div>
          <p>No payment found for this user.</p>
        </div>
      );
    }

    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error(error);
    // Handle the error gracefully, e.g., show an error message
    return (
      <div>
        <p>There was an error fetching the payment.</p>
      </div>
    );
  }
};

export default Payments;
