/**
 * quotes/[quoteId]/page.jsx
 */

import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

const OneQuote = async ({ params }) => {
  const session = await getServerSession();
  const { quoteId } = params;

  try {
    const data = await prisma.user.findUnique({
      where: {
        email: session.user.email
      },
      select: {
        quotes: {
          where: {
            id: quoteId
          }
        }
      }
    });

    if (!data || !data.quotes || data.quotes.length === 0) {
      // Handle the case where no quote was found
      return (
        <div>
          <p>No quote found for this ID.</p>
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
        <p>There was an error fetching the quote.</p>
      </div>
    );
  }
};

export default OneQuote;
