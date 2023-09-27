/**
 * invoices/[invoicesId]/page.jsx
 */

import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

const OneInvoice = async ({ params }) => {
  const session = await getServerSession();

  const { invoiceId } = params;

  try {
    const data = await prisma.user.findUnique({
      where: {
        email: session.user.email
      },
      select: {
        invoices: {
          where: {
            id: invoiceId
          }
        }
      }
    });

    if (!data || !data.invoices || data.invoices.length === 0) {
      // Handle the case where no quote was found
      return (
        <div>
          <p>No invoices found for this user.</p>
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
        <p>There was an error fetching the invoices.</p>
      </div>
    );
  }
};

export default OneInvoice;
